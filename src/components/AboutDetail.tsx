/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Github, Linkedin, Instagram, Mail, ExternalLink, Code2, Cpu, Box, Palette } from "lucide-react";
import { useEffect } from "react";

export const AboutDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black pb-32">
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <Link to="/" className="text-xl font-medium tracking-tighter font-mono interactive">
          <ArrowLeft className="inline-block mr-2 mb-1" size={20} />
          BACK_TO_HOME
        </Link>
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-70">
          About // Kristy Hung
        </div>
      </nav>

      <main className="pt-48 px-6 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Hero Section */}
          <div className="mb-32">
            <h1 className="text-6xl md:text-[10vw] font-serif italic tracking-tighter leading-[0.8] mb-12">
              Digital Alchemist <br /> & Creative Technologist
            </h1>
            <div className="w-full h-px bg-white/10 mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="space-y-8">
                <img 
                  src="/images/kristy.jpeg" 
                  alt="Kristy Hung" 
                  className="w-full max-w-sm rounded-2xl object-cover shadow-2xl"
                />
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80 text-balance">
                  I am a multidisciplinary designer and developer based in Hong Kong, specializing in the intersection of <span className="text-white">code</span>, <span className="text-white">art</span>, and <span className="text-white">human experience</span>.
                </p>
              </div>
              <div className="space-y-8">
                <p className="text-lg opacity-80 leading-relaxed mb-6">
                  Passionate about crafting compelling 2D and 3D visual experiences with AI, I will graduate in 2026 from Hong Kong Baptist University with a Bachelor's degree in Arts (Honors) in Art and Technology, minoring in Business. In 2025, I enriched my global perspective through a semester-long exchange program at Sogang University in Seoul, further honing my skills in international media and cross-cultural storytelling.
                </p>
                <p className="text-lg opacity-80 leading-relaxed mb-6">
                  My work focuses on building high-performance digital tools and immersive experiences that challenge the boundaries of traditional audience experiences. Whether it's customizing VS Code extensions or developing physical visual works, I strive for technical precision and artistic depth.
                </p>
                <p className="text-lg opacity-80 leading-relaxed">
                  As an ENFJ, I thrive on building connections and fostering communities through shared enthusiasm. I love traveling and meeting people from diverse backgrounds, which continually inspires my artistic journey. I am always excited to collaborate on exciting projects and welcome any opportunity to create meaningful and impactful work together.
                </p>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/kristyhung130" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all interactive"><Linkedin size={20} /></a>
                  <a href="https://www.instagram.com/kristyhung_hk?igsh=MWc5ZGNycDZtcDQ2cQ==" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all interactive"><Instagram size={20} /></a>
                  <a href="mailto:yokanikky@gmail.com" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all interactive"><Mail size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-48">
            <div className="p-12 border border-white/5 bg-white/[0.02] rounded-3xl space-y-6">
              <Code2 className="opacity-60" size={32} />
              <h3 className="text-2xl font-serif italic">Full-Stack Development</h3>
              <p className="text-sm opacity-80 leading-relaxed">Building robust, scalable applications with modern frameworks. Specializing in React, Node.js, and performance optimization.</p>
            </div>
            <div className="p-12 border border-white/5 bg-white/[0.02] rounded-3xl space-y-6">
              <Palette className="opacity-60" size={32} />
              <h3 className="text-2xl font-serif italic">Creative Coding</h3>
              <p className="text-sm opacity-80 leading-relaxed">Exploring the artistic potential of algorithms. Proficient in p5.js, Processing, and generative art systems.</p>
            </div>
            <div className="p-12 border border-white/5 bg-white/[0.02] rounded-3xl space-y-6">
              <Box className="opacity-60" size={32} />
              <h3 className="text-2xl font-serif italic">3D Modeling</h3>
              <p className="text-sm opacity-80 leading-relaxed">Creating immersive 3D environments using Three.js, Blender, and Unity integration.</p>
            </div>
          </div>

          {/* Experience/Timeline */}
          <div className="space-y-24">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <h2 className="text-sm font-mono uppercase tracking-[0.5em] opacity-40">Background</h2>
              <div className="max-w-2xl space-y-12">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono opacity-60">
                    <span>2024 — PRESENT</span>
                    <span>FREELANCE</span>
                  </div>
                  <h3 className="text-2xl font-serif italic">Creative Technologist</h3>
                  <p className="opacity-80">Collaborating with global brands and artists to create bespoke digital experiences and experimental web tools.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono opacity-60">
                    <span>2022 — 2024</span>
                    <span>DESIGN STUDIO</span>
                  </div>
                  <h3 className="text-2xl font-serif italic">Lead Interactive Developer</h3>
                  <p className="opacity-80">Spearheaded the development of high-end portfolio sites and interactive installations using Three.js and React.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer Call to Action */}
      <section className="mt-48 px-6 md:px-24 text-center">
        <div className="max-w-4xl mx-auto py-24 border-t border-white/5">
          <h2 className="text-sm font-mono uppercase tracking-[0.5em] opacity-50 mb-12">Let's Connect</h2>
          <a 
            href="mailto:yokanikky@gmail.com"
            className="text-4xl md:text-7xl font-serif italic tracking-tighter hover:translate-x-4 transition-transform inline-block interactive"
          >
            yokanikky@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};
