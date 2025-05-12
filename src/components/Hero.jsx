
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 gradient-bg-hero overflow-hidden">
      <div className="hero-glow-effect"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8">
            Where Brands Meet Creators.
            <br />
            <span className="gradient-text">Real Influence, Real Results.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We connect brands with the perfect content creators to launch impactful campaigns that drive engagement, awareness, and sales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="text-lg py-7 px-10 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
              <a href="#contact">
                <Mail className="mr-3 h-6 w-6" /> Let’s Collaborate
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-20 md:mt-28 max-w-5xl mx-auto"
        >
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-border/30 glassmorphic-card p-2">
            <img  class="w-full h-full object-cover rounded-lg" alt="Diverse group of content creators collaborating on a project" src="https://images.unsplash.com/photo-1678227547309-f25998d4fc86" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
