'use client';

import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 xs:py-16 sm:py-20 relative">
      <FloatingParticles />
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 mx-auto relative">
              <div className="absolute inset-0 bg-linea-to-br from-indigo-500 via-purple-600 to-cyan-500 rounded-2xl xs:rounded-3xl animate-pulse"></div>
              <div className="absolute inset-3 xs:inset-4 bg-slate-900 rounded-xl xs:rounded-2xl flex items-center justify-center text-4xl xs:text-5xl sm:text-6xl">
                👨‍💻
              </div>
              {/* Floating Elements */}
              <div className="absolute -bottom-3 xs:-bottom-4 -left-3 xs:-left-4 w-4 h-4 xs:w-6 xs:h-6 bg-purple-400 rounded-full animate-bounce animation-delay-500"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-4 xs:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              About <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </motion.h2>

            <motion.p
              className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-400 mb-4 xs:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I&apos;m Omar Mohamed, a 20-year-old Full Stack Developer and Computer Science student passionate about creating digital experiences that push the boundaries of what&apos;s possible.
            </motion.p>

            <motion.p
              className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-400 mb-6 xs:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              With 2+ years of experience, I specialize in transforming ideas into reality through clean code, stunning interfaces, and innovative solutions that make a difference.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-2 xs:gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm p-3 xs:p-4 sm:p-6 rounded-xl xs:rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl xs:text-3xl mb-2 xs:mb-3">🎓</div>
                <div className="font-bold mb-1 xs:mb-2 text-sm xs:text-base">Education</div>
                <div className="text-xs xs:text-sm text-slate-400">Computer Science Student</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 xs:p-4 sm:p-6 rounded-xl xs:rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl xs:text-3xl mb-2 xs:mb-3">💼</div>
                <div className="font-bold mb-1 xs:mb-2 text-sm xs:text-base">Experience</div>
                <div className="text-xs xs:text-sm text-slate-400">2+ Years</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 xs:p-4 sm:p-6 rounded-xl xs:rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl xs:text-3xl mb-2 xs:mb-3">🚀</div>
                <div className="font-bold mb-1 xs:mb-2 text-sm xs:text-base">Projects</div>
                <div className="text-xs xs:text-sm text-slate-400">10+ Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 xs:p-4 sm:p-6 rounded-xl xs:rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl xs:text-3xl mb-2 xs:mb-3">🌟</div>
                <div className="font-bold mb-1 xs:mb-2 text-sm xs:text-base">Specialty</div>
                <div className="text-xs xs:text-sm text-slate-400">Full Stack</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

