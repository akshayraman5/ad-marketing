
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mukul Rana',
    role: 'CEO & Lead Strategist',
    bio: 'Mukul drives our vision, connecting brands with influential creators for impactful campaigns.',
    image: 'male-ceo-indian-professional-portrait',
    socials: { instagram: '#', twitter: '#' }
  },
  {
    name: 'Abhishek Rana',
    role: 'Co-founder & Operations Head',
    bio: 'Abhishek ensures seamless campaign execution and fosters strong creator relationships.',
    image: 'male-cofounder-indian-professional-headshot',
    socials: { instagram: '#', twitter: '#' }
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-secondary/30 relative">
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
            Meet Our <span className="gradient-text-alt">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The passionate minds behind Apna Digital Marketing, dedicated to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="glassmorphic-card p-6 text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/50 shadow-lg">
                <img  class="w-full h-full object-cover" alt={`${member.name} - ${member.role}`} src="https://images.unsplash.com/photo-1649015931204-15a3c789e6ea" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{member.bio}</p>
              <div className="flex space-x-4">
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
