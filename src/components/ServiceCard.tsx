import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
    >
      <div className="w-14 h-14 bg-primary-50 text-primary-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-500 group-hover:text-white transition-colors">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-secondary-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6">
        {service.description}
      </p>
      <a 
        href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
        className="inline-flex items-center text-sm font-medium text-primary-700 hover:text-secondary-600 transition-colors"
      >
        <span>Learn more</span>
        <ArrowUpRight size={16} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
    </motion.div>
  );
};

export default ServiceCard;