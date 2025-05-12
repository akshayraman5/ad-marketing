
import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'Oppo', alt: 'Oppo Logo', description: 'OPPO is a global brand delivering innovative smartphones and consumer electronics' },
  { name: 'Adivasi Hair Oil', alt: 'Adivasi Logo', description: 'Adivasi Hair Oil is a herbal formula known for promoting hair growth and reducing hair fall naturally' },
  { name: '1xBet', alt: '1xBet Logo', description: '1xBet India: Online Betting Company' },
  { name: '4Ra Bet', alt: '4Ra Bet Logo', description: '4rabet is widely-known for its reliable betting and casino platform' },
  { name: 'Binomo', alt: 'Binomo Logo', description: 'Binomo is a client-oriented company, creating new possibilities in the market of leading trading technologies' },
  { name: 'Melbet', alt: 'Melbet Logo', description: 'Melbet is an online betting platform offering sports betting, casino games, and various promotional offers for global users' },
  { name: 'Parimatch', alt: 'Parimatch Logo', description: 'Parimatch is a global sports betting and online gaming platform offering a wide range of betting options and live casino experiences' },
  { name: 'Probo', alt: 'Probo Logo', description: 'Probo is a prediction-based platform where users can bet on real-world events and outcomes, engaging in a unique and interactive betting experience' },
  { name: 'Winzo', alt: 'Winzo Logo', description: 'Winzo is a mobile gaming platform offering a variety of skill-based games and tournaments, allowing users to compete for real money rewards' }
];

const Clients = () => {
  return (
    <section id="clients" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-black mb-4"
        >
          Powering Campaigns for <span className="gradient-text">Leading Brands</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-lg text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          We partner with innovative brands to create impactful influencer marketing campaigns that deliver real results.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 md:gap-x-10 lg:gap-x-12 items-center"
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center text-center"
              title={client.description}
            >
              <div className="h-12 md:h-16 mb-2 flex items-center justify-center">
                <img  class="max-h-full w-auto object-contain client-logo" alt={client.alt} src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
