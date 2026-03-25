/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github, ExternalLink, Code2, Cpu, Box, Palette, ChevronRight, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PROJECTS, Project } from "./types";
import { P5Background } from "./components/P5Background";
import { ThreeHero } from "./components/ThreeHero";
import { ProjectDetail } from "./components/ProjectDetail";
import { AboutDetail } from "./components/AboutDetail";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      animate={{ 
        x: mousePos.x - 16, 
        y: mousePos.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)"
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
    />
  );
};

const ProjectShowcase = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full py-24 border-b border-white/10 flex flex-col md:flex-row items-center gap-12 interactive"
    >
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] opacity-70">
          <span>0{index + 1}</span>
          <span className="w-8 h-px bg-white/20" />
          <span>{project.category}</span>
        </div>
        
        <Link 
          to={`/project/${project.id}`} 
          target="_blank"
          rel="noopener noreferrer"
          className="block interactive group/text"
        >
          <h3 className="text-5xl md:text-8xl font-serif italic tracking-tighter group-hover/text:translate-x-4 transition-transform duration-500 mb-6">
            {project.title}
          </h3>
          <p className="max-w-md text-white/70 font-light leading-relaxed group-hover/text:text-white transition-colors">
            {project.description}
          </p>
        </Link>
        
        <Link 
          to={`/project/${project.id}`} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors interactive group/link"
        >
          Discover More 
          <ChevronRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
        
        <div className="flex flex-wrap gap-3 pt-4">
          {project.techStack?.map(tech => (
            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-wider opacity-60">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Link 
        to={`/project/${project.id}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-2xl bg-[#111] interactive"
      >
        <motion.img 
          src={project.image} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
            <ArrowUpRight size={32} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="text-xl font-medium tracking-tighter font-mono interactive">KRISTY HUNG</div>
        <div className="hidden md:flex gap-12 text-[10px] font-mono uppercase tracking-[0.3em] opacity-70">
          <a href="#work" className="hover:opacity-100 transition-opacity interactive">Work</a>
          <a href="#project" className="hover:opacity-100 transition-opacity interactive">Project</a>
          <Link to="/about" className="hover:opacity-100 transition-opacity interactive">About</Link>
          <a href="#contact" className="hover:opacity-100 transition-opacity interactive">Contact</a>
        </div>
        <div className="flex gap-4">
          <a 
            href="https://wa.me/85262117135" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="opacity-70 hover:opacity-100 transition-opacity interactive"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden">
        <ThreeHero />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-serif italic tracking-tighter text-gradient mb-12">
            Digital <br /> Alchemist
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <p className="max-w-lg text-lg md:text-2xl font-light text-white/70 leading-relaxed text-balance">
              Crafting high-performance digital experiences at the intersection of <span className="text-white">code</span> and <span className="text-white">creativity</span>.
            </p>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-50 flex items-center gap-4"
            >
              Scroll to explore <ChevronRight size={12} className="rotate-90" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/[0.02] rounded-full blur-[120px] -z-10" />
      </header>

      {/* Dynamic Gallery */}
      <main id="work" className="px-6 md:px-24 pb-48">
        <div className="mb-32">
          <h2 className="text-sm font-mono uppercase tracking-[0.5em] opacity-50 mb-8">Selected Projects</h2>
          <div className="w-full h-px bg-white/10" />
        </div>

        <div className="space-y-0">
          {PROJECTS.map((project, index) => (
            <div key={project.id}>
              <ProjectShowcase project={project} index={index} />
            </div>
          ))}
        </div>
      </main>

      {/* Exhibitions Section (Named "Project" in nav) */}
      <section id="project" className="py-48 px-6 md:px-24 border-t border-white/5">
        <div className="mb-24">
          <h2 className="text-sm font-mono uppercase tracking-[0.5em] opacity-50 mb-8">Exhibitions & Recognition</h2>
          <div className="w-full h-px bg-white/10" />
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {[
            { year: "2026", title: "Transit", venue: "Hong Kong X Japan, Nagoya" },
            { year: "2025", title: "Hangang Bridge Bombing", venue: "Hong Kong" },
            { year: "2023", title: "Meshby", venue: "Hong Kong" }
          ].map((exhibit, i) => (
            <div 
              key={i} 
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/5 transition-colors"
            >
              <div className="flex items-center gap-8">
                <span className="text-xs font-mono opacity-50">{exhibit.year}</span>
                <h3 className="text-2xl md:text-4xl font-serif italic tracking-tight">{exhibit.title}</h3>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest opacity-70 mt-4 md:mt-0">{exhibit.venue}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-48 px-6 md:px-24 bg-white text-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-sm font-mono uppercase tracking-[0.5em] opacity-60">The Philosophy</h2>
            <p className="text-4xl md:text-6xl font-serif italic leading-[1.1] tracking-tight">
              Code is the <span className="text-gray-600">canvas</span>, logic is the <span className="text-gray-600">brush</span>.
            </p>
          </div>
          <div className="space-y-8 text-xl font-light leading-relaxed opacity-80">
            <Link to="/about" className="block space-y-8 hover:opacity-100 transition-opacity interactive group/about">
              <p className="group-hover/about:translate-x-2 transition-transform duration-500">
                I specialize in building tools and experiences that push the boundaries of what's possible on the web. From custom VS Code extensions to complex Three.js environments.
              </p>
              <p className="group-hover/about:translate-x-2 transition-transform duration-500 delay-75">
                My work is a constant dialogue between technical precision and artistic expression, ensuring every project is as robust as it is beautiful.
              </p>
              <div className="pt-6 flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] group-hover/about:gap-6 transition-all duration-500">
                <span className="opacity-70 group-hover/about:opacity-100">Learn more about me</span>
                <div className="w-12 h-px bg-black/20 group-hover/about:w-24 group-hover/about:bg-black transition-all duration-500" />
                <ArrowUpRight size={16} className="opacity-40 group-hover/about:opacity-100 group-hover/about:rotate-45 transition-all" />
              </div>
            </Link>
            <div className="pt-8 flex gap-12">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-70 block">Expertise</span>
                <ul className="text-sm font-medium space-y-1">
                  <li>Full-Stack Dev</li>
                  <li>Creative Coding</li>
                  <li>3D Modeling</li>
                </ul>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-70 block">Tools</span>
                <ul className="text-sm font-medium space-y-1">
                  <li>Arduino/ VS Code</li>
                  <li>Three.js/ p5.js</li>
                  <li>Blender/ Unity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-48 px-6 md:px-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-[15vw] font-serif italic tracking-tighter text-gradient mb-12">Connect</h2>
          <p className="text-xl md:text-3xl font-light text-white/70 mb-24 max-w-2xl mx-auto">
            Got a question? Let's just a message away.
          </p>
          <a 
            href="mailto:yokanikky@gmail.com" 
            className="group relative inline-flex items-center gap-4 text-2xl md:text-5xl font-serif italic interactive"
          >
            yokanikky@gmail.com
            <motion.div 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight size={32} />
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">
        <p>© 2026 KRISTY HUNG — ALL RIGHTS RESERVED</p>
        <div className="flex gap-12">
          <a href="https://www.instagram.com/kristyhung_hk?igsh=MWc5ZGNycDZtcDQ2cQ==" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity interactive">INSTAGRAM</a>
          <a href="https://www.linkedin.com/in/kristyhung130" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity interactive">LINKEDIN</a>
          <a href="https://drive.google.com/file/d/1yF8eTN4ZeF4ZsUggCN5DYKETtS7R68BA/view" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity interactive">CV</a>
          <a href="https://drive.google.com/file/d/1aNcc8x7d5ileDUfd73Otj0hY-_OWcr4j/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity interactive">PORTFOLIO</a>
        </div>
      </footer>
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black cursor-none">
        <CustomCursor />
        <P5Background />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
