'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="w-16 h-16 border-4 border-gray-600 border-t-indigo-500 rounded-full animate-spin"></div>
    </motion.div>
  );
}
