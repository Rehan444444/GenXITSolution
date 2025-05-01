import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    quote: string;
    author: string;
    position: string;
    avatar: string;
  };
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative"
    >
      <Quote 
        size={32} 
        className="text-secondary-100 absolute top-6 left-6 opacity-30" 
      />
      <div className="relative z-10">
        <p className="text-gray-700 mb-6 pt-4 pl-6">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-primary-900 font-bold">{testimonial.author}</h4>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;