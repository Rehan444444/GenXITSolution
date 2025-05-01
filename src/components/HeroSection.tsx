
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.shutterstock.com/image-photo/business-man-hands-typing-on-260nw-2226546829.jpg"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70"></div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-secondary-500 filter blur-[80px]"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-secondary-700 filter blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transforming Ideas Into 
              <span className="text-secondary-400"> Digital Reality</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              We are a premier IT solutions company dedicated to driving innovation and 
              delivering exceptional digital experiences that empower businesses to thrive in 
              the modern world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="/contact"
              className="inline-flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 text-white py-3 px-6 rounded-md transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
              <ChevronRight size={18} className="ml-2" />
            </a>
            <a 
              href="/services"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 py-3 px-6 rounded-md transition-all"
            >
              Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <p className="text-gray-300 text-sm mb-3">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center gap-8">
              {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
                <div 
                  key={index} 
                  className="text-white/70 font-semibold flex items-center"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white flex flex-col items-center"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span className="text-xs mt-2 text-white/70">Scroll down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;