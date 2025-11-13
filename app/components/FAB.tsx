'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FAB() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: '📧', label: 'Email', action: () => window.location.href = 'mailto:omar@example.com' },
    { icon: '💬', label: 'WhatsApp', action: () => window.open('https://wa.me/1234567890', '_blank') },
    { icon: '📱', label: 'Call', action: () => window.location.href = 'tel:+1234567890' },
    { icon: '💼', label: 'LinkedIn', action: () => window.open('https://linkedin.com/in/omar', '_blank') }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-end mb-4 space-y-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {actions.map((action, index) => (
              <motion.button
                key={index}
                className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white hover:bg-indigo-500/20 transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                onClick={() => {
                  action.action();
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg mr-2">{action.icon}</span>
                <span className="text-sm">{action.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-indigo-500/25"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-2xl">{isOpen ? '✕' : '+'}</span>
      </motion.button>
    </div>
  );
}
