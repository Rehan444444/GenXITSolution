import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ArrowRight 
} from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Logo size={32} />
              <div className="ml-2">
                <h3 className="font-bold text-lg text-white">
                  GenX<span className="text-secondary-500">IT</span>Solution
                </h3>
                <p className="text-xs">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Empowering businesses through innovative technology solutions. We transform ideas into 
              powerful digital experiences that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Case Studies', 'Blog', 'Careers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm group flex items-center hover:text-secondary-500 transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development', 
                'Mobile App Development', 
                'UI/UX Design', 
                'Cloud Solutions', 
                'IT Consulting', 
                'DevOps Services'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/services/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm group flex items-center hover:text-secondary-500 transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-secondary-500" />
                <span className="text-sm">
                  123 Tech Park, Innovation Street,
                  <br />
                  Silicon Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-secondary-500" />
                <a href="tel:+1234567890" className="text-sm hover:text-secondary-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-secondary-500" />
                <a href="mailto:info@genxitsolution.com" className="text-sm hover:text-secondary-500 transition-colors">
                  info@genxitsolution.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} GenXItSolution Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-secondary-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-secondary-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-secondary-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;