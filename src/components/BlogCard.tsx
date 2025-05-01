import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface BlogPostProps {
  post: {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    readTime: string;
  };
  index: number;
}

const BlogCard: React.FC<BlogPostProps> = ({ post, index }) => {
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
      className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">By {post.author}</div>
          <a 
            href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} 
            className="inline-flex items-center text-secondary-600 font-medium hover:text-secondary-700 transition-colors"
          >
            <span>Read more</span>
            <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;