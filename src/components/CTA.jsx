
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden gradient-bg-cta">
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <Rocket className="h-16 w-16 text-white mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Launch Your Digital Success?
          </h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
            Let Apna Digital Marketing be your trusted partner. Get a personalized strategy and see real growth.
          </p>
          
          <Button 
            size="lg" 
            className="text-lg py-7 px-10 bg-white text-purple-700 hover:bg-gray-100 font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            Request Your Free Consultation
          </Button>
          
          <p className="mt-8 text-sm text-indigo-300">
            No obligations. Just expert advice to get you started.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
