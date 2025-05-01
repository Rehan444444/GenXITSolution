
import { motion } from 'framer-motion';
import { MailOpen, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-95 z-0"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-black"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Let's discuss how our tailored IT solutions can help you achieve your business goals and stay ahead in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-primary-900 py-3 px-8 rounded-md transition-colors shadow-lg flex items-center font-medium"
            >
              <MailOpen size={18} className="mr-2" />
              Contact Us
            </a>
            <a
              href="/services"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 py-3 px-8 rounded-md transition-colors flex items-center font-medium"
            >
              <span>Explore Services</span>
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;