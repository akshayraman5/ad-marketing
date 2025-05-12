
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="section-glow-effect"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              About <span className="gradient-text-alt">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We’re a passionate team on a mission to simplify influencer marketing. We believe in building meaningful connections between brands and creators — not just for likes, but for lasting impact.
            </p>
            <p className="text-lg text-muted-foreground">
              With a growing network of content creators and a data-driven approach, we help your brand stand out in the noisy digital world.
            </p>
            <div className="mt-8 flex space-x-6">
              <div className="flex items-center text-foreground">
                <Heart className="w-6 h-6 text-primary mr-2" />
                <span>Passionate Team</span>
              </div>
              <div className="flex items-center text-foreground">
                <Users className="w-6 h-6 text-primary mr-2" />
                <span>Creator Network</span>
              </div>
              <div className="flex items-center text-foreground">
                <TrendingUp className="w-6 h-6 text-primary mr-2" />
                <span>Data-Driven</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-border/30 glassmorphic-card p-2"
          >
            <img  class="w-full h-full object-cover rounded-lg" alt="Team collaborating in a modern office" src="https://images.unsplash.com/photo-1538688554366-621d446302aa" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
