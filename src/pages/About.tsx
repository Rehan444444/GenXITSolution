import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  Lightbulb, 
  Users, 
  ShieldCheck, 
  Award,
  Clock
} from 'lucide-react';
import CTASection from '../components/CTASection';

const About = () => {
  const [missionRef, missionInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.2
  });

  const [teamRef, teamInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.2
  });

  const teamMembers = [
    {
      name: 'Robert Chen',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Former tech executive with 15+ years experience in enterprise software.',
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Expert in scalable architecture and emerging technologies.',
    },
    {
      name: 'Michael Rodriguez',
      position: 'Design Director',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Award-winning designer with focus on user experience.',
    },
    {
      name: 'Emily Wang',
      position: 'Head of Engineering',
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Leads our development teams with expertise in enterprise applications.',
    }
  ];

  const values = [
    {
      icon: <Users />,
      title: 'Client-Centric',
      description: "We prioritize our clients' needs and build lasting partnerships based on trust and transparency."
    },
    {
      icon: <Lightbulb />,
      title: 'Innovation',
      description: 'We embrace emerging technologies and innovative approaches to solve complex business challenges.'
    },
    {
      icon: <ShieldCheck />,
      title: 'Quality & Security',
      description: 'We maintain the highest standards of quality and security in everything we deliver.'
    },
    {
      icon: <BarChart3 />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that drive business growth and success.'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'GenXItSolution was established with a vision to provide innovative IT solutions.'
    },
    {
      year: '2013',
      title: 'Expansion',
      description: 'Expanded service offerings and opened a second office location.'
    },
    {
      year: '2016',
      title: 'Innovation Award',
      description: 'Received industry recognition for our innovative approach to digital transformation.'
    },
    {
      year: '2019',
      title: 'Global Presence',
      description: 'Expanded operations to serve clients globally with teams across multiple countries.'
    },
    {
      year: '2022',
      title: 'New Headquarters',
      description: 'Moved to a larger headquarters to accommodate our growing team.'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as an industry leader in IT solutions and digital innovation.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-secondary-400">GenXItSolution</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We're a team of passionate technologists dedicated to helping businesses 
              harness the power of technology to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses through innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in an increasingly digital world.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary-800 mb-4">Vision</h3>
                <p className="text-gray-600">
                  To be a global leader in digital innovation, recognized for our expertise, 
                  client-centric approach, and commitment to delivering exceptional value through 
                  technology.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={missionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Award size={36} className="text-secondary-500 mr-4" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium">Recognized as</p>
                    <p className="text-lg font-bold text-primary-900">Top IT Solutions Provider</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              These principles guide everything we do and define our approach to client relationships, 
              product development, and business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-50 text-primary-700 rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              From humble beginnings to industry leadership, our growth story reflects our 
              commitment to innovation and excellence.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center relative`}
                >
                  <div className="w-1/2"></div>
                  
                  {/* Timeline marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center shadow-md relative z-10">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div className="text-xl font-bold text-primary-900 mt-2">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md inline-block max-w-md ${index % 2 === 0 ? 'mr-0 ml-auto' : ''}`}>
                      <h3 className="text-xl font-bold text-primary-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Meet Our Leadership
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our diverse team of experts combines deep technical knowledge with industry expertise 
              to deliver innovative solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm">{member.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-900">{member.name}</h3>
                  <p className="text-gray-500">{member.position}</p>
                </div>
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

export default About;