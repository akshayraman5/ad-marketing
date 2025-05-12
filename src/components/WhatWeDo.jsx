
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, BarChart2 } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-20 md:py-32 bg-background relative">
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
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We’re a promotional marketing company that helps brands grow by collaborating with digital content creators. Whether you're launching a product or boosting your brand, we manage everything from creator sourcing to campaign execution and performance tracking.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Briefcase size={40} className="text-primary" />, title: "Brand Growth", description: "Launch products and boost brand awareness effectively." },
            { icon: <Users size={40} className="text-primary" />, title: "Creator Collaboration", description: "Connect with authentic digital content creators." },
            { icon: <BarChart2 size={40} className="text-primary" />, title: "Full Campaign Management", description: "From sourcing and execution to performance tracking." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="glassmorphic-card p-8 text-center"
            >
              <div className="mb-6 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
