import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeadline = ({ text, subtext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center my-10"
    >
      <h1 className="text-4xl font-bold mb-2">{text}</h1>
      <p className="text-xl text-gray-600">{subtext}</p>
    </motion.div>
  );
};

export default AnimatedHeadline;