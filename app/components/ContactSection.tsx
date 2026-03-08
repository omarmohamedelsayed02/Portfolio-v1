'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FloatingParticles from './FloatingParticles';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 xs:py-16 sm:py-20 relative">
      <FloatingParticles />
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 xs:mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-4 xs:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p
            className="text-xs xs:text-sm sm:text-xl text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Lets discuss your next project
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6 xs:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6">Lets Build Something Amazing</h3>
              <p className="text-xs xs:text-sm sm:text-base text-slate-400 mb-4 xs:mb-8 leading-relaxed">
                Im always excited to work on new projects and collaborate with innovative minds.
                Whether you have a clear vision or just an idea, Id love to hear from you.
              </p>
            </div>

            <div className="space-y-4 xs:space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mr-3 xs:mr-4 flex-shrink-0">
                  <span className="text-lg xs:text-2xl">📧</span>
                </div>
                <div>
                  <div className="font-semibold text-sm xs:text-base">Email</div>
                  <div className="text-xs xs:text-sm text-slate-400 break-all">omarmohamedelsayed02@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 xs:mr-4 flex-shrink-0">
                  <span className="text-lg xs:text-2xl">📱</span>
                </div>
                <div>
                  <div className="font-semibold text-sm xs:text-base">Phone</div>
                  <div className="text-xs xs:text-sm text-slate-400">+201025866342</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mr-3 xs:mr-4 flex-shrink-0">
                  <span className="text-lg xs:text-2xl">📍</span>
                </div>
                <div>
                  <div className="font-semibold text-sm xs:text-base">Location</div>
                  <div className="text-xs xs:text-sm text-slate-400">Egypt, Giza</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 xs:space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 xs:w-12 xs:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">💼</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 xs:w-12 xs:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">🐦</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 xs:w-12 xs:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">💻</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 xs:w-12 xs:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">📘</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm p-4 xs:p-6 sm:p-8 rounded-2xl xs:rounded-3xl border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white/10 border border-white/20 rounded-lg xs:rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-300 text-sm xs:text-base"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white/10 border border-white/20 rounded-lg xs:rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-300 text-sm xs:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white/10 border border-white/20 rounded-lg xs:rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-300 text-sm xs:text-base"
                  placeholder="Project discussion"
                  required
                />
              </div>

              <div>
                <label className="block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white/10 border border-white/20 rounded-lg xs:rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-300 resize-none text-sm xs:text-base"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 xs:py-4 bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg xs:rounded-xl text-sm xs:text-base hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

