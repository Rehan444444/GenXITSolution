import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MonitorSmartphone,
  Cpu,
  LineChart,
  ShieldCheck,
  Cloud,
  Code,
  Users,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import CTASection from '../components/CTASection';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <MonitorSmartphone size={32} />,
      title: 'Web & Mobile Development',
      description: 'Custom web and mobile applications tailored to your business needs.',
      features: [
        'Responsive Web Applications',
        'Native Mobile Apps',
        'Progressive Web Apps',
        'Cross-platform Solutions',
        'UI/UX Design',
        'API Development'
      ]
    },
    {
      icon: <Cpu size={32} />,
      title: 'Software Engineering',
      description: 'Scalable, robust software solutions built with cutting-edge technologies.',
      features: [
        'Custom Software Development',
        'Enterprise Solutions',
        'Legacy System Modernization',
        'Software Architecture',
        'Quality Assurance',
        'Maintenance & Support'
      ]
    },
    {
      icon: <LineChart size={32} />,
      title: 'Digital Transformation',
      description: 'Strategic guidance to digitize and modernize your business processes.',
      features: [
        'Digital Strategy Consulting',
        'Process Automation',
        'Data Analytics',
        'Digital Integration',
        'Change Management',
        'Innovation Workshops'
      ]
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your valuable data.',
      features: [
        'Security Assessments',
        'Penetration Testing',
        'Compliance Solutions',
        'Security Architecture',
        'Incident Response',
        'Security Training'
      ]
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Services',
      description: 'Flexible, scalable cloud solutions for your growing business needs.',
      features: [
        'Cloud Migration',
        'Cloud Architecture',
        'Multi-cloud Management',
        'Cloud Security',
        'Performance Optimization',
        'Cost Management'
      ]
    },
    {
      icon: <Code size={32} />,
      title: 'DevOps & Infrastructure',
      description: 'Streamlined development operations and optimized infrastructure.',
      features: [
        'CI/CD Implementation',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Performance Tuning',
        'Automation'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-secondary-400">Services</span>
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive IT solutions tailored to transform your business and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-50 text-primary-700 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ArrowRight size={18} className="text-secondary-500 mr-2 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Service <span className="text-secondary-500">Process</span>
            </h2>
            <p className="text-gray-600">
              We follow a systematic approach to ensure the successful delivery of every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={32} />,
                title: 'Discovery',
                description: 'We start by understanding your business needs and objectives.'
              },
              {
                icon: <Lightbulb size={32} />,
                title: 'Planning',
                description: 'Develop a comprehensive strategy and project roadmap.'
              },
              {
                icon: <Code size={32} />,
                title: 'Implementation',
                description: 'Execute the solution using best practices and methodologies.'
              },
              {
                icon: <LineChart size={32} />,
                title: 'Support',
                description: 'Provide ongoing maintenance and optimization services.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 bg-primary-50 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Services;