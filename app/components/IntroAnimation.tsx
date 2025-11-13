'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [particles] = useState<{ id: number; initialX: number; initialY: number; animateX: number; animateY: number; delay: number }[]>(() =>
    [...Array(50)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 1920,
      initialY: Math.random() * 1080,
      animateX: Math.random() * 1920,
      animateY: Math.random() * 1080,
      delay: Math.random() * 2
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Background particles */}
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                  x: particle.initialX,
                  y: particle.initialY,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: particle.animateX,
                  y: particle.animateY,
                }}
                transition={{
                  duration: 4,
                  delay: particle.delay,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Logo/Name animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.4
              }}
              className="mb-8"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-black bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                OMAR
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-4xl font-bold text-white mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Full Stack Developer
              </motion.h2>
            </motion.div>

            {/* Skills animation */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {['React', 'Next.js', 'TypeScript', 'Node.js'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 1.8 + index * 0.1,
                    type: "spring",
                    bounce: 0.6
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-linear-to-r from-cyan-400 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Welcome message */}
            <motion.p
              className="text-white/80 mt-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              Welcome to my digital universe
            </motion.p>
          </div>

          {/* Geometric shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400/30 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-purple-400/30 rotate-45"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.3, 1]
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
