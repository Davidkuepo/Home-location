import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ icon: Icon, text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      <Icon className="text-4xl text-primary mb-2" />
      <p className="text-center">{text}</p>
    </motion.div>
  );
};

export default AnimatedIcon;    