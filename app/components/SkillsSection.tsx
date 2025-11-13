'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 85 },
        { name: 'HTML5/CSS3', level: 98 },
        { name: 'JavaScript', level: 95 }
      ]
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 85 },
        { name: 'VS Code', level: 98 },
        { name: 'Linux', level: 80 }
      ]
    }
  };

  const currentSkills = skillCategories[activeCategory as keyof typeof skillCategories].skills;

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6">
            Technical <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm p-2 rounded-2xl border border-white/10">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-cyan-500 text-black shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-white">{skill.name}</span>
                <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  className="bg-linear-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Skill Orb */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500 via-purple-600 to-pink-500 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-xl font-bold text-cyan-400">Always Learning</div>
                <div className="text-sm text-slate-400">New Tech Daily</div>
              </div>
            </div>
            {/* Floating particles around orb */}
            <div className="absolute -top-2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-2 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
