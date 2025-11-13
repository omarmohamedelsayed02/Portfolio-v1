'use client';

import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

const projects = [
  {
    title: "O'Clock Watch Store",
    description: "Premium watch e-commerce platform with elegant design and smooth animations",
    tech: ["HTML/CSS", "JavaScript", "E-commerce"],
    demo: "https://o-oclock-store.vercel.app/",
    emoji: "⌚"
  },
  {
    title: "Modern Cafe Experience",
    description: "Interactive cafe website with digital menu and online ordering system",
    tech: ["React", "CSS3", "Menu System"],
    demo: "https://cafe-iota-cyan.vercel.app/#menu",
    emoji: "☕"
  },
  {
    title: "Roshta Medical Platform",
    description: "Healthcare management system with appointment booking and patient records",
    tech: ["PHP", "MySQL", "Healthcare"],
    demo: "https://roshta.vercel.app/index.html",
    emoji: "🏥"
  },
  {
    title: "Car Agency Platform",
    description: "Automotive marketplace with advanced search and virtual showroom features",
    tech: ["JavaScript", "CSS3", "Automotive"],
    demo: "https://car-agency-phi.vercel.app/",
    emoji: "🚗"
  },
  {
    title: "Cinema Streaming Platform",
    description: "Modern movie streaming website with advanced search and recommendations",
    tech: ["HTML5", "CSS3", "Entertainment"],
    demo: "https://tv-sigma-orpin.vercel.app/",
    emoji: "🎬"
  },
  {
    title: "Koshk E-commerce",
    description: "Full-featured online marketplace with shopping cart and payment integration",
    tech: ["PHP", "MySQL", "E-commerce"],
    demo: "https://koshk.vercel.app/",
    emoji: "🛒"
  },
  {
    title: "Quantum Div Tech",
    description: "Modern software company website with portfolio showcase and service offerings",
    tech: ["React", "CSS3", "Corporate"],
    demo: "https://quantum-div.vercel.app/",
    emoji: "💻"
  },
  {
    title: "CC Cleaning Services",
    description: "Professional cleaning service website with booking system and service packages",
    tech: ["HTML5", "JavaScript", "Services"],
    demo: "https://cc-mu-eosin.vercel.app/",
    emoji: "🧹"
  },
  {
    title: "3omra Pilgrimage",
    description: "Complete Hajj and Umrah booking platform with travel packages and guides",
    tech: ["PHP", "MySQL", "Travel"],
    demo: "https://3omra-fawn.vercel.app/",
    emoji: "🕌"
  },
  {
    title: "Previous Portfolio",
    description: "My previous portfolio design showcasing earlier projects and skills",
    tech: ["HTML5", "CSS3", "Portfolio"],
    demo: "https://omar-xi.vercel.app/",
    emoji: "👨‍💻"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <FloatingParticles />
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real projects with live demos and source code
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -20, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="h-48 bg-linear-to-br from-gray-500 to-slate-600 flex items-center justify-center text-6xl relative overflow-hidden rounded-t-3xl">
                {project.emoji}
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-3xl">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-indigo-600/20 text-indigo-400 text-xs rounded-full border border-indigo-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/90 via-purple-600/90 to-cyan-500/90 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl flex items-center justify-center flex-col backdrop-blur-sm">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  Live Demo
                </a>
                <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
