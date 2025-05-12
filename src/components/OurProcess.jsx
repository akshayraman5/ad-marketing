
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, PlayCircle, BarChart } from 'lucide-react';

const processSteps = [
  { 
    icon: <Target size={32} className="text-primary" />, 
    title: "Understand Your Goals", 
    description: "We work with you to identify campaign objectives, target audience, and key performance indicators." 
  },
  { 
    icon: <Users size={32} className="text-primary" />, 
    title: "Find the Right Creators", 
    description: "We shortlist creators based on audience demographics, niche relevance, engagement rates, and authenticity." 
  },
  { 
    icon: <PlayCircle size={32} className="text-primary" />, 
    title: "Campaign Goes Live", 
    description: "We manage the entire process, including briefing creators, setting deadlines, content approvals, and ensuring smooth execution." 
  },
  { 
    icon: <BarChart size={32} className="text-primary" />, 
    title: "Get Measurable Results", 
    description: "Receive detailed reports on campaign performance, including reach, engagement, conversions, and ROI." 
  },
];

const OurProcess = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-background relative">
      <div className="section-glow-effect opacity-40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A streamlined approach to deliver impactful influencer marketing campaigns.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="glassmorphic-card p-6 flex flex-col items-start"
            >
              <div className="mb-5 p-3 bg-primary/10 rounded-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
