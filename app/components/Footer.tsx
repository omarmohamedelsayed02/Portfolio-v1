'use client';

import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <FloatingParticles />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              OMAR
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Full Stack Developer crafting digital experiences that push the boundaries of whats possible.
              Lets build the future together.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">💼</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">🐦</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">💻</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">📘</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting'].map((service) => (
                <li key={service}>
                  <span className="text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/10 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400">
            © {currentYear} Omar Mohamed. All rights reserved.
            <span className="text-indigo-400 ml-2">Built with ❤️ using Next.js</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
