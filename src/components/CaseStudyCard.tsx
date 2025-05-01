import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  study: {
    title: string;
    client: string;
    description: string;
    image: string;
    tags: string[];
  };
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ study, index }) => {
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
      className="bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <p className="text-white text-sm font-medium">Client: {study.client}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors">
          {study.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {study.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={`/portfolio/${study.title.toLowerCase().replace(/\s+/g, '-')}`} 
          className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium transition-colors"
        >
          <span>View Case Study</span>
          <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
        </a>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;