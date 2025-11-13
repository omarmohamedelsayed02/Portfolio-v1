'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Creating responsive, modern web applications with cutting-edge technologies and best practices.',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['React Native', 'iOS/Android', 'App Store Deployment', 'Push Notifications']
    },
    {
      icon: '🚀',
      title: 'Backend Development',
      description: 'Developing robust, scalable server-side solutions with modern architectures.',
      features: ['Node.js', 'Python', 'Databases', 'API Design', 'Microservices']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Designing intuitive, beautiful interfaces that users love to interact with.',
      features: ['Figma', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms for scalability and reliability.',
      features: ['AWS', 'Docker', 'CI/CD', 'Monitoring', 'Security']
    },
    {
      icon: '🔧',
      title: 'Consulting',
      description: 'Providing technical guidance and strategic advice for your development projects.',
      features: ['Code Review', 'Architecture', 'Best Practices', 'Team Training']
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6">
            What I <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-6 group-hover:animate-bounce">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-slate-400 mb-8">
            Ready to start your next project? Let&apos;s discuss how we can work together.
          </p>
          <motion.button
            className="px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
