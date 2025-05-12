
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Video } from 'lucide-react';

const WhoWeWorkWith = () => {
  return (
    <section id="who-we-work-with" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="section-glow-effect"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Who We Work <span className="gradient-text-alt">With</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glassmorphic-card p-8"
          >
            <div className="flex items-center mb-4">
              <ShoppingBag size={32} className="text-primary mr-4" />
              <h3 className="text-3xl font-bold text-foreground">For Brands</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Reach your ideal audience through trusted content creators on platforms like Instagram, YouTube, Facebook, and more. We help you build authentic connections and drive meaningful engagement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glassmorphic-card p-8"
          >
            <div className="flex items-center mb-4">
              <Video size={32} className="text-primary mr-4" />
              <h3 className="text-3xl font-bold text-foreground">For Creators</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Partner with top brands, get paid for your influence, and focus on creating amazing content — we handle the rest, from negotiations to campaign logistics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
