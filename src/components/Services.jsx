
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Settings, Users2, BarChart2, Edit3 } from 'lucide-react';

const servicesList = [
  { 
    icon: <Settings size={24} className="text-primary" />, 
    title: "Influencer Campaign Strategy", 
    description: "Tailored strategies to meet your brand objectives and target audience." 
  },
  { 
    icon: <Users2 size={24} className="text-primary" />, 
    title: "Creator Discovery & Management", 
    description: "Access our network of vetted creators and let us handle all communications." 
  },
  { 
    icon: <CheckCircle2 size={24} className="text-primary" />, 
    title: "Campaign Execution & Monitoring", 
    description: "End-to-end management ensuring campaigns run smoothly and effectively." 
  },
  { 
    icon: <BarChart2 size={24} className="text-primary" />, 
    title: "Post-Campaign Reporting & Analytics", 
    description: "Detailed insights into campaign performance and ROI." 
  },
  { 
    icon: <Edit3 size={24} className="text-primary" />, 
    title: "UGC (User-Generated Content) Services", 
    description: "Leverage authentic content created by real users to build trust and engagement." 
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative">
      <div className="section-glow-effect opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions to elevate your brand through influencer marketing.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="gradient-border-card"
            >
              <div className="inner-card-content flex flex-col">
                <div className="mb-5 p-3 bg-primary/10 rounded-lg w-min">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
