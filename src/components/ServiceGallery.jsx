import React from 'react';
import { motion } from 'framer-motion';
import services from '../utils/data';

const ServiceGallery = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-areas-layout">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg md:${service.gridArea}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGallery;
