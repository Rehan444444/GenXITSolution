import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface ClientProps {
  client: {
    name: string;
    industry: string;
  };
  index: number;
}

const ClientLogo: React.FC<ClientProps> = ({ client, index }) => {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.05 }
    }
  };

  return (
    <motion.div 
      variants={logoVariants}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center aspect-square"
    >
      <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-full flex items-center justify-center mb-3">
        <Briefcase size={24} />
      </div>
      <p className="text-sm font-medium text-primary-900 text-center">{client.name}</p>
      <p className="text-xs text-gray-500 text-center">{client.industry}</p>
    </motion.div>
  );
};

export default ClientLogo;