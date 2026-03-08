
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const sectionInView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });

  // Different animation variants for each project
  const projectAnimations = [
    { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 }, duration: 0.6 },
    { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, duration: 0.7 },
    { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 }, duration: 0.6 },
    { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -50 }, duration: 0.6 },
    { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 }, duration: 0.6 },
    { initial: { opacity: 0, rotateY: -90 }, animate: { opacity: 1, rotateY: 0 }, exit: { opacity: 0, rotateY: 90 }, duration: 0.8 },
  ];

  useEffect(() => {
    if (sectionRef.current && sectionInView) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setCurrentIndex(index);
              setIsTypingComplete(false);
            }
          });
        },
        { threshold: 0.3 }
      );

      const projectCards = sectionRef.current.querySelectorAll('.project-card');
      projectCards.forEach((card) => observer.observe(card));

      return () => observer.disconnect();
    }
  }, [sectionInView]);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 xs:py-24 sm:py-32 relative bg-black"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-12 xs:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black mb-4">
          My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-sm xs:text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
          Here are some of the projects I&apos;ve worked on
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const animation = projectAnimations[index % projectAnimations.length];
            const isActive = index === currentIndex;

            return (
              <motion.div
                key={project.id}
                data-index={index}
                className="project-card"
                initial={animation.initial}
                animate={isActive ? animation.animate : animation.initial}
                exit={animation.exit}
                transition={{ duration: animation.duration, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative group h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl h-full min-h-[300px] xs:min-h-[350px]">
                    <motion.img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 xs:p-6">
                      {/* Project Number */}
                      <div className="absolute top-4 left-4 text-4xl xs:text-5xl font-black text-white/20">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Project Title */}
                      <motion.h3
                        className="text-xl xs:text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Typewriter Description */}
                      <div className="text-xs xs:text-sm text-gray-300 mb-3 xs:mb-4 line-clamp-2">
                        <Typewriter
                          key={`${currentIndex}-${index}`}
                          options={{
                            strings: [project.description],
                            autoStart: false,
                            delay: 0.1,
                            deleteSpeed: 0,
                            loop: false,
                            cursor: '|',
                          }}
                          onInit={(typewriter) => {
                            if (isActive) {
                              typewriter
                                .typeString(project.description.slice(0, 80))
                                .callFunction(() => {
                                  setTimeout(() => handleTypingComplete(), 10);
                                })
                                .start();
                            }
                          }}
                        />
                      </div>

                      {/* Technologies */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            className="flex flex-wrap gap-2 mb-3 xs:mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 xs:px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* View Project Button */}
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 xs:px-6 py-2 xs:py-3 bg-white text-black font-semibold rounded-full text-sm hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="text-center text-white p-4">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm mb-4">{project.description.slice(0, 100)}...</p>
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 bg-white text-black font-bold rounded-full"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Live
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

