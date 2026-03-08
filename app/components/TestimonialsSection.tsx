'use client';

import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Omar delivered exceptional work on our e-commerce platform. His attention to detail and modern approach exceeded our expectations.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Ahmed Hassan",
    role: "Founder, Digital Solutions",
    content: "Working with Omar was a game-changer. His mobile app development skills and UI/UX expertise brought our vision to life perfectly.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Maria Rodriguez",
    role: "Marketing Director, Innovate Corp",
    content: "The website Omar created for us has significantly improved our conversion rates. His technical skills are matched only by his professionalism.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "David Chen",
    role: "CTO, FutureTech",
    content: "Omar's backend development work was outstanding. He built robust APIs that handle our complex business logic seamlessly.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager, StartupXYZ",
    content: "From concept to deployment, Omar managed our entire project flawlessly. His communication and technical expertise are top-notch.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Mohammed Al-Rashid",
    role: "Business Owner",
    content: "Omar transformed my business website into a modern, professional platform. The results speak for themselves - increased traffic and sales.",
    rating: 5,
    avatar: "👨‍💼"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 xs:py-16 sm:py-20 relative">
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
            Client <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
          </motion.h2>
          <motion.p
            className="text-xs xs:text-sm sm:text-xl text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What clients say about working with me
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-4 xs:p-6 sm:p-8 rounded-2xl xs:rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-start mb-4 xs:mb-6">
                <div className="text-3xl xs:text-4xl mr-3 xs:mr-4 flex-shrink-0">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-sm xs:text-base sm:text-lg">{testimonial.name}</h4>
                  <p className="text-xs xs:text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3 xs:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-sm xs:text-lg">⭐</span>
                ))}
              </div>

              <p className="text-xs xs:text-sm text-slate-400 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="absolute top-3 xs:top-4 right-3 xs:right-4 text-3xl xs:text-4xl opacity-10">
                &rdquo;
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-10 xs:mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-linear-to-r from-indigo-500/20 to-purple-600/20 backdrop-blur-sm p-6 xs:p-8 sm:p-12 rounded-2xl xs:rounded-3xl border border-indigo-500/30">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 xs:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xs xs:text-sm sm:text-xl text-slate-400 mb-6 xs:mb-8">
              Join the list of satisfied clients and let&apos;s build something amazing together
            </p>
            <motion.button
              className="px-6 xs:px-7 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full text-xs xs:text-sm sm:text-base hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

