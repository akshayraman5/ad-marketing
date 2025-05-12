
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeartHandshake as Handshake, Mail, Star } from 'lucide-react';

const ForCreators = () => {
  return (
    <section id="for-creators" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="section-glow-effect"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Star className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            For <span className="gradient-text-alt">Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our network and work with amazing brands that match your vibe. We’ll help you focus on creating while we take care of partnerships, payments, and promotion.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg text-foreground font-medium">Want to Join?</p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg py-4 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <a href="mailto:collab@apnadigitalmarketing.com">
                <Mail className="mr-2 h-5 w-5" /> Email us: collab@apnadigitalmarketing.com
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Let's create something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForCreators;
