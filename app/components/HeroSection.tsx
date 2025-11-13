'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with GSAP/Three.js coding effect */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
        </div>
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-20 gap-4 transform rotate-12">
              {Array.from({ length: 200 }).map((_, i) => (
                <div key={i} className={`w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-${i}`}></div>
              ))}
            </div>
          </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
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
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-mono"
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
              className="text-lg text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about creating innovative digital solutions with modern technologies.
              Specializing in full-stack development with a focus on user experience and performance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
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
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-500 p-1"
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

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💻
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
