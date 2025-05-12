
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactUs = () => {
  const socialLinks = [
    { icon: <Facebook size={24} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={24} />, href: '#', label: 'Instagram' },
    { icon: <Youtube size={24} />, href: 'https://www.youtube.com/@apnadigitalrecords', label: 'Youtube' },
    { icon: <Twitter size={24} />, href: 'https://x.com/apnadigitalmktg', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative">
      <div className="section-glow-effect opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a campaign in mind or want to join our creator network? Let’s talk!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto glassmorphic-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                  <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-border bg-secondary/50 py-3 px-4 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-border bg-secondary/50 py-3 px-4 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-border bg-secondary/50 py-3 px-4 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm"></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3">
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay:0.1, ease: "easeOut" }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Info</h3>
              <div className="flex items-start">
                <Mail className="flex-shrink-0 h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Email</h4>
                  <a href="mailto:hello@apnadigitalmarketing.com" className="text-muted-foreground hover:text-primary">hello@apnadigitalmarketing.com</a>
                </div>
              </div>
               <div className="flex items-start">
                <MapPin className="flex-shrink-0 h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">India</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map(link => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
