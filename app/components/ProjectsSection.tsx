'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { projects } from '../data/projects';
import Lenis from '@studio-freight/lenis';
import ScrollTrigger from "gsap/ScrollTrigger";
import SmoothScroll from "../gsap/SmoothScroll";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);

   
  // Define different animation variants for each project
  const projectAnimations = [
    // 1. Fade In
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    // 2. Zoom In
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 }
    },
    // 3. Slide from Left
    {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 }
    },
    // 4. Slide from Right
    {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 }
    },
    // 5. Slide from Top
    {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -100 }
    },
    // 6. Slide from Bottom
    {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 100 }
    },
    // 7. Flip Horizontal
    {
      initial: { opacity: 0, rotateY: -90 },
      animate: { opacity: 1, rotateY: 0 },
      exit: { opacity: 0, rotateY: -90 }
    },
    // 8. Flip Vertical
    {
      initial: { opacity: 0, rotateX: -90 },
      animate: { opacity: 1, rotateX: 0 },
      exit: { opacity: 0, rotateX: -90 }
    },
    // 9. Scale and Fade
    {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 }
    },
    // 10. Bounce In
    {
      initial: { opacity: 0, scale: 0.3 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.3 },
      transition: { stiffness: 300, damping: 20 }
    },
    // 11. Rotate In
    {
      initial: { opacity: 0, rotate: -180 },
      animate: { opacity: 1, rotate: 0 },
      exit: { opacity: 0, rotate: -180 }
    },
    // 12. Skew In
    {
      initial: { opacity: 0, skewX: -30 },
      animate: { opacity: 1, skewX: 0 },
      exit: { opacity: 0, skewX: -30 }
    },
    // 13. Blur In
    {
      initial: { opacity: 0, filter: "blur(10px)" },
      animate: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(10px)" }
    },
    // 14. Pulse In
    {
      initial: { opacity: 0, scale: 1.2 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.2 },
      transition: { duration: 0.6 }
    }
  ];


  const sectionInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    setIsSectionInView(sectionInView);
  }, [sectionInView]);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    lenisRef.current = new Lenis();

    const animate = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollLeft = containerRef.current.scrollLeft;
      const slideWidth = window.innerWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);

      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < projects.length) {
        setCurrentIndex(newIndex);
        setIsTypingComplete(false);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex]);

  useEffect(() => {
    // Disable vertical scrolling when in projects section and user hasn't seen all projects
    if (isSectionInView && currentIndex < projects.length - 1) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isSectionInView, currentIndex]);



  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      const slideWidth = window.innerWidth;
      containerRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth',
      });
    }
  };

 useEffect(() => {
     gsap.to(".horizontal-wrapper", {
      x: "-200vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top top",
        end: "bottom+=2000 top",
        scrub: true,
        pin: true,
      },
    });
  })
  
  return (
    <SmoothScroll>
    <section
      ref={sectionRef}
      id="projects"
      className="horizintal-wrapper relative min-h-screen h-screen overflow-hidden bg-black"
    >
      {/* Progress Bar - Only show when section is in view */}
      <AnimatePresence>
        {isSectionInView && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{ transform: `scaleX(${(currentIndex + 1) / projects.length})` }}
              initial={{ transform: 'scaleX(0)' }}
              animate={{ transform: `scaleX(${(currentIndex + 1) / projects.length})` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Dots - Only show when section is in view */}
      <AnimatePresence>
        {isSectionInView && (
          <motion.div
            className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {projects.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                onClick={() => scrollToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Previous Project Button - Only show when section is in view */}
      <AnimatePresence>
        {isSectionInView && (
          <motion.button
            className="fixed left-2 md:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToSlide(currentIndex - 1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg md:text-xl">←</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Next Project Button - Only show when section is in view */}
      <AnimatePresence>
        {isSectionInView && (
          <motion.button
            className="fixed right-2 md:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToSlide(currentIndex + 1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg md:text-xl">→</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <AnimatePresence>
        {isSectionInView && (
          <motion.div
            className="fixed top-4 md:top-8 left-4 md:left-8 z-50 text-white/80 font-mono text-xs md:text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex min-h-screen h-screen overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{
          scrollBehavior: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {projects.map((project, index) => {
          const animation = projectAnimations[index % projectAnimations.length];
          const transition = animation.transition ? { duration: 0.8, ...animation.transition } : { duration: 0.8 };
          return (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-screen h-screen relative flex items-center justify-center snap-center"
              initial={animation.initial}
              animate={index === currentIndex ? animation.animate : animation.exit}
              exit={animation.exit}
              transition={transition}
            >
              {/* Background Image with Parallax */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100
                }}
                transition={{ duration: 1.2 }}
              >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat brightness-75 blur-[1px]"
                style={{
                  backgroundImage: index !== 5 ? `url(${project.imageUrl})` : 'none'
                }}
              />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/30 to-black/80" />
              </motion.div>

              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Project Image */}
                <motion.div
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 shadow-2xl">
                    <motion.img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />

                    {/* Enhanced Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-pink-600/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="text-center text-white mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-90">Click to view live project</p>
                      </motion.div>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                  className="text-white space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Slide Number */}
                  <motion.div
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Project Title */}
                  <motion.h2
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h2>

                  {/* Typewriter Description */}
                  <div className="text-base sm:text-lg text-gray-300 leading-relaxed min-h-[100px] sm:min-h-[120px]">
                    <Typewriter
                      key={currentIndex}
                      options={{
                        strings: [project.description],
                        autoStart: false,
                        delay: 0.2,
                        deleteSpeed: 0,
                        loop: false,
                        cursor: '|',
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(project.description)
                          .callFunction(() => {
                            setTimeout(() => handleTypingComplete(), 20);
                          })
                          .start();
                      }}
                    />
                  </div>

                  {/* Technologies */}
                  <AnimatePresence>
                    {isTypingComplete && (
                      <motion.div
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>


    </section>
    </SmoothScroll>
  );
}
