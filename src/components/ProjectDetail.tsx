/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Layers } from "lucide-react";
import { PROJECTS } from "../types";
import { useEffect } from "react";

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#050505] font-mono">
        <h1 className="text-4xl mb-8 opacity-20">PROJECT_NOT_FOUND</h1>
        <Link to="/" className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition-transform uppercase tracking-widest text-xs">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black pb-32">
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <Link to="/" className="text-xl font-medium tracking-tighter font-mono interactive">
          <ArrowLeft className="inline-block mr-2 mb-1" size={20} />
          BACK_TO_WORK
        </Link>
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-70">
          Project Detail // {project.year}
        </div>
      </nav>

      <main className="pt-48 px-6 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Title Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] opacity-70 mb-6">
              <span>{project.category}</span>
              <span className="w-8 h-px bg-white/40" />
              <span>{project.year}</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter mb-12">
              {project.title}
            </h1>
          </div>

          {/* Main Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#111] mb-24 border border-white/5">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover brightness-105 contrast-105 ${project.id === 'arduino-synth' ? 'brightness-[1.1]' : ''}`}
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {/* Left Column: Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 flex items-center gap-2">
                  <Calendar size={12} /> Timeline
                </h3>
                <p className="text-lg opacity-100">{project.year}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 flex items-center gap-2">
                  <Tag size={12} /> Category
                </h3>
                <p className="text-lg opacity-100">{project.category}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 flex items-center gap-2">
                  <Layers size={12} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-wider opacity-80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex flex-col gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-sm font-mono uppercase tracking-[0.3em] hover:text-gray-400 transition-colors interactive group/github"
                  >
                    <div className="p-4 rounded-full border border-white/20 group-hover/github:bg-white group-hover/github:text-black transition-all duration-500">
                      <Github size={24} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] opacity-50">Source Code</span>
                      <span>View on GitHub</span>
                    </div>
                  </a>
                )}
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-sm font-mono uppercase tracking-[0.3em] hover:text-gray-400 transition-colors interactive group/explore"
                  >
                    <div className="p-4 rounded-full border border-white/20 bg-white text-black group-hover/explore:scale-110 transition-all duration-500">
                      <ExternalLink size={24} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] opacity-50">View Live</span>
                      <span>Explore Project</span>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Description */}
            <div className="md:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-sm font-mono uppercase tracking-[0.5em] opacity-60">Overview</h2>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 text-balance">
                  {project.description}
                </p>
              </div>

              <div className="space-y-8 pt-12 border-t border-white/5">
                <h2 className="text-sm font-mono uppercase tracking-[0.5em] opacity-60">The Challenge</h2>
                {project.challenge ? (
                  project.challenge.map((paragraph, i) => (
                    <p key={i} className="text-lg font-light leading-relaxed text-white/80">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <>
                    <p className="text-lg font-light leading-relaxed text-white/80">
                      This project explored the boundaries of {project.category.toLowerCase()} by integrating complex systems with intuitive user interfaces. The primary goal was to create a seamless experience that highlights the potential of creative technology in modern digital environments.
                    </p>
                    <p className="text-lg font-light leading-relaxed text-white/80">
                      Through iterative prototyping and deep technical research, we developed a solution that not only meets the initial requirements but also provides a platform for future exploration in the field of {project.techStack?.[0] || "interactive design"}.
                    </p>
                  </>
                )}
              </div>

              {/* Secondary Images and Videos */}
              {project.gallery && project.gallery.length > 0 ? (
                <div className="grid grid-cols-2 gap-8 pt-12">
                  {project.gallery.map((media, i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/5">
                      {media.type === 'image' ? (
                        <img
                          src={media.url}
                          alt={`Gallery ${i + 1}`}
                          className={`w-full h-full object-cover brightness-125 contrast-110 hover:scale-105 transition-transform duration-700 ${project.id === 'arduino-synth' ? 'brightness-[1.1]' : ''}`}
                        />
                      ) : (
                        <video
                          src={media.url}
                          controls
                          className={`w-full h-full object-cover brightness-125 contrast-110 ${project.id === 'arduino-synth' ? 'brightness-[1.1]' : ''}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-8 pt-12">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/5">
                    <img
                      src={`https://picsum.photos/seed/${project.id}-1/800/800`}
                      alt="Detail 1"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/5">
                    <img
                      src={`https://picsum.photos/seed/${project.id}-2/800/800`}
                      alt="Detail 2"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer Call to Action */}
      <section className="mt-48 px-6 md:px-24 text-center">
        <div className="max-w-4xl mx-auto py-24 border-t border-white/5">
          <h2 className="text-sm font-mono uppercase tracking-[0.5em] opacity-50 mb-12">Next Project</h2>
          <Link
            to={`/project/${PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].id}`}
            className="text-4xl md:text-7xl font-serif italic tracking-tighter hover:translate-x-4 transition-transform inline-block interactive"
          >
            {PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].title}
          </Link>
        </div>
      </section>
    </div>
  );
};
