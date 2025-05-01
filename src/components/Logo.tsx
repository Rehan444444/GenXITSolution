import React from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 24, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-secondary-500 rounded-full blur-[2px] opacity-50"></div>
      <div className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white p-2 rounded-full">
        <Globe size={size} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default Logo;