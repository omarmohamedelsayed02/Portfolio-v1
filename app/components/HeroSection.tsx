
'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import CountUp from '../features/Count';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const stats = [
    { label: 'Projects Completed', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Years Experience', value: 2, suffix: '+' },
    { label: 'Technologies', value: 15, suffix: '+' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-2 xs:px-3 sm:px-4"
    >
      {/* Background with GSAP/Three.js coding effect */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 xs:w-2 xs:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 xs:w-1 xs:h-1 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 xs:w-3 xs:h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 xs:w-1 xs:h-1 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 xs:w-2 xs:h-2 bg-pink-400 rounded-full animate-ping"></div>
        </div>
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 xs:grid-cols-16 gap-2 xs:gap-4 transform rotate-12">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className={`w-0.5 h-0.5 xs:w-1 xs:h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-${i}`}></div>
              ))}
            </div>
          </div>
      </div>

      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 py-8 xs:py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m{' '}
              <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Omar Mohamed
              </span>
            </motion.h1>

            <motion.div
              className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-4 xs:mb-6 sm:mb-8 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-cyan-400"></span>
              {displayText}
              <span className="animate-pulse text-cyan-400">|</span>
              <span className="text-cyan-400"></span>
            </motion.div>

            <motion.p
              className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-400 mb-4 xs:mb-6 sm:mb-8 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about creating innovative digital solutions with modern technologies.
              Specializing in full-stack development with a focus on user experience and performance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-xs xs:text-sm sm:text-base text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 border-2 border-cyan-400 rounded-full font-semibold text-xs xs:text-sm sm:text-base text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-500 p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <Image
                    src="/me.jpg"
                    alt="Omar Mohamed"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-8 xs:mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:grid-cols-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-2 xs:p-3 sm:p-4 md:p-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1 xs:mb-2">
                <CountUp to={stat.value} duration={2} delay={1.2 + index * 0.1} onStart={() => {}} onEnd={() => {}} />
                {stat.suffix}
              </div>
              <div className="text-gray-400 text-xs xs:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

