
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MonitorSmartphone, 
  Cpu, 
  LineChart, 
  ShieldCheck, 
  Cloud, 
  Code,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import TestimonialCard from '../components/TestimonialCard';
import ClientLogo from '../components/ClientLogo';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const [servicesRef, servicesInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [clientsRef, clientsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [blogRef, blogInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <MonitorSmartphone />,
      title: 'Web & Mobile Development',
      description: 'Custom web and mobile applications tailored to your business needs.',
    },
    {
      icon: <Cpu />,
      title: 'Software Engineering',
      description: 'Scalable, robust software solutions built with cutting-edge technologies.',
    },
    {
      icon: <LineChart />,
      title: 'Digital Transformation',
      description: 'Strategic guidance to digitize and modernize your business processes.',
    },
    {
      icon: <ShieldCheck />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your valuable data.',
    },
    {
      icon: <Cloud />,
      title: 'Cloud Services',
      description: 'Flexible, scalable cloud solutions for your growing business needs.',
    },
    {
      icon: <Code />,
      title: 'DevOps & Infrastructure',
      description: 'Streamlined development operations and optimized infrastructure.',
    },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Overhaul',
      client: 'RetailGiant Inc.',
      description: 'Complete redesign and development of an e-commerce platform resulting in 40% increased conversion.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Web Development', 'UX Design', 'Backend']
    },
    {
      title: 'Healthcare Management System',
      client: 'MedLife Solutions',
      description: 'Custom healthcare platform that streamlined patient management and reduced administrative time by 60%.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoFLCB0WZM6EUcEYpQS3rtcrJKD9F0hnj0h0jptwU7Er9_ZBG5WDB9e99oIPqM2oMQzg&usqp=CAU',
      tags: ['Healthcare', 'Software Development', 'Cloud']
    },
    {
      title: 'FinTech Mobile Application',
      client: 'Global Finance Group',
      description: 'Secure, intuitive mobile banking application with advanced features and biometric authentication.',
      image: 'https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Mobile App', 'FinTech', 'Security']
    }
  ];

  const clientLogos = [
    { name: 'Tech Giant', industry: 'Technology' },
    { name: 'Finance Corp', industry: 'Finance' },
    { name: 'Health Plus', industry: 'Healthcare' },
    { name: 'Retail World', industry: 'Retail' },
    { name: 'Media Stream', industry: 'Media' },
    { name: 'Edu Connect', industry: 'Education' }
  ];

  const testimonials = [
    {
      quote: "GenXItSolution transformed our outdated systems into a streamlined digital ecosystem. Their expertise and dedication to our project was exceptional.",
      author: "Sarah Johnson",
      position: "CTO, RetailGiant Inc.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The team's technical proficiency and innovative approach helped us launch our mobile app ahead of schedule. Highly recommended for any tech project.",
      author: "Michael Chen",
      position: "Product Director, Global Finance Group",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Working with GenXItSolution has been a game-changer for our healthcare platform. Their attention to detail and security protocols exceeded our expectations.",
      author: "Dr. Emily Rodriguez",
      position: "CEO, MedLife Solutions",
      avatar: "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Software Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the software development lifecycle and what it means for businesses.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "June 15, 2025",
      author: "Alex Morgan",
      readTime: "5 min read"
    },
    {
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Learn essential cybersecurity measures to protect your business when managing distributed development teams.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "June 8, 2025",
      author: "Nina Patel",
      readTime: "4 min read"
    },
    {
      title: "Cloud Migration: Strategies for Success",
      excerpt: "A comprehensive guide to planning and executing a successful cloud migration for your business applications.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "May 30, 2025",
      author: "Ryan Cooper",
      readTime: "6 min read"
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Tech Experts' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our <span className="text-secondary-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We deliver comprehensive IT solutions tailored to meet your business objectives and 
              drive digital innovation.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <a href="/services" className="inline-flex items-center text-secondary-600 font-medium hover:text-secondary-700 transition-colors">
              <span>View all services</span>
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-primary-900 ">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeIn} className="group">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2 group-hover:text-secondary-500 transition-colors">
                  {stat.value}
                </div>
                <div className="text-black text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                  Why Choose <span className="text-secondary-500">GenXItSolution</span>?
                </h2>
                <p className="text-gray-600 mb-8">
                  At GenXItSolution, we combine technical expertise with business acumen to deliver solutions 
                  that drive real results. Our client-centric approach ensures that we understand your unique 
                  challenges and provide tailored solutions to overcome them.
                </p>

                <div className="space-y-4">
                  {[
                    'Expert team with industry experience',
                    'Custom solutions tailored to your needs',
                    'Agile methodology for faster delivery',
                    'Continuous support and maintenance',
                    'Cutting-edge technologies and best practices',
                    'Transparent communication throughout'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <a href="/about" className="inline-block bg-primary-800 hover:bg-primary-900 text-white py-3 px-6 rounded-md transition-colors shadow-md">
                    Learn More About Us
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-lg shadow-2xl overflow-hidden relative aspect-video">
                  <img 
                    src="https://blog.ipleaders.in/wp-content/uploads/2020/03/TrendsinLawFirms_KL_1024x680-1024x680.jpg" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20  rounded-full flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-secondary-500 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-secondary-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
                  <p className="text-xl md:text-2xl font-bold">15+ Years</p>
                  <p className="text-sm">Industry Experience</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={portfolioRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={portfolioInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Recent <span className="text-secondary-500">Success Stories</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our portfolio of successful projects where we've helped businesses transform
              and achieve their goals.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={portfolioInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} index={index} />
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <a href="/portfolio" className="inline-flex items-center text-secondary-600 font-medium hover:text-secondary-700 transition-colors">
              <span>View all case studies</span>
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              What Our <span className="text-secondary-500">Clients Say</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about their 
              experience working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section ref={clientsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our <span className="text-secondary-500">Trusted Clients</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're proud to work with forward-thinking organizations across various industries.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {clientLogos.map((client, index) => (
              <ClientLogo key={index} client={client} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section ref={blogRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={blogInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Latest <span className="text-secondary-500">Insights</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Stay updated with the latest industry trends, technology insights, and company news.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={blogInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <a href="/blog" className="inline-flex items-center text-secondary-600 font-medium hover:text-secondary-700 transition-colors">
              <span>Read more articles</span>
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;