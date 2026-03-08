'use client';

import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for small projects",
    features: [
      "5-page website",
      "Responsive design",
      "Contact form",
      "Basic SEO",
      "1 month support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$599",
    description: "Most popular choice",
    features: [
      "10-page website",
      "Custom design",
      "Admin panel",
      "Database integration",
      "Advanced SEO",
      "3 months support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$999",
    description: "For large projects",
    features: [
      "Unlimited pages",
      "Free mobile app",
      "Complete CMS",
      "Custom APIs",
      "Training included",
      "1 year support"
    ],
    popular: false
  }
];

const specialServices = [
  {
    icon: "⚡",
    title: "Rush Delivery",
    description: "48-hour turnaround",
    detail: "Urgent project delivery with guaranteed quality and professional standards",
    price: "+50% of base price"
  },
  {
    icon: "🎯",
    title: "Free Consultation",
    description: "Comprehensive planning session",
    detail: "One-hour strategy session to discuss your project and determine the best solutions",
    price: "Completely Free"
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-12 xs:py-16 sm:py-20 relative">
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
            Pricing <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Plans</span>
          </motion.h2>
          <motion.p
            className="text-xs xs:text-sm sm:text-xl text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Choose the perfect plan for your project
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-10 xs:mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-4 xs:p-5 sm:p-8 rounded-2xl xs:rounded-3xl border backdrop-blur-sm transition-all duration-500 transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border-indigo-500/50 sm:scale-105'
                  : 'bg-white/5 border-white/10 hover:border-indigo-500/50'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 xs:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-4 xs:mb-6 sm:mb-8">
                <div className="text-3xl xs:text-4xl sm:text-5xl mb-2 xs:mb-4">{plan.popular ? '🚀' : plan.name === 'Starter' ? '🌟' : '💎'}</div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-4">{plan.name}</h3>
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-indigo-400 mb-1 xs:mb-2">{plan.price}</div>
                <div className="text-xs xs:text-sm text-slate-400">{plan.description}</div>
              </div>

              <ul className="space-y-2 xs:space-y-3 mb-4 xs:mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs xs:text-sm">
                    <span className="text-green-400 mr-2 xs:mr-3 flex-shrink-0">✓</span>
                    <span className="text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-2.5 xs:py-3 sm:py-4 px-4 xs:px-6 rounded-full font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25'
                    : 'border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-4">
              Exclusive <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h3>
            <p className="text-xs xs:text-sm sm:text-xl text-slate-400">Premium offerings for discerning clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-4 xs:p-6 sm:p-8 rounded-2xl xs:rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start mb-4 xs:mb-6">
                  <div className="text-3xl xs:text-4xl sm:text-5xl mr-3 xs:mr-4 flex-shrink-0">{service.icon}</div>
                  <div>
                    <h4 className="text-lg xs:text-xl sm:text-2xl font-bold">{service.title}</h4>
                    <p className="text-xs xs:text-sm text-slate-400">{service.description}</p>
                  </div>
                </div>
                <p className="text-xs xs:text-sm text-slate-400 mb-3 xs:mb-4 sm:mb-6">{service.detail}</p>
                <div className={`text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6 ${
                  service.price === 'Completely Free' ? 'text-green-400' : 'text-indigo-400'
                }`}>
                  {service.price}
                </div>
                <motion.button
                  className="w-full py-2.5 xs:py-3 sm:py-4 px-4 xs:px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-xs xs:text-sm sm:text-base hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service.title === 'Free Consultation' ? 'Book Session' : 'Request Now'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

