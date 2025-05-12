
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Apna Digital Marketing completely revamped our online strategy. Our leads have increased by 150% in just six months! Their team is knowledgeable and truly cares about client success.",
    author: "Rohan Mehta",
    role: "Founder, CraftyGoods Co.",
    rating: 5,
    image: "indian-male-entrepreneur-testimonial"
  },
  {
    quote: "The ROI we've seen since partnering with Apna Digital Marketing is phenomenal. Their data-driven approach to PPC and SEO is top-notch. Highly recommended!",
    author: "Sunita Iyer",
    role: "Marketing Director, TechSolutions Ltd.",
    rating: 5,
    image: "indian-female-marketing-director-testimonial"
  },
  {
    quote: "Working with Apna Digital Marketing has been a game-changer. They are creative, responsive, and consistently deliver results that exceed expectations.",
    author: "Vikram Singh",
    role: "CEO, FitLife Wellness",
    rating: 5,
    image: "indian-male-ceo-testimonial"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30 relative">
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
            What Our <span className="gradient-text-alt">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from businesses thriving with our digital marketing expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="glassmorphic-card p-8 flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/70 mb-4" />
              <p className="text-muted-foreground mb-6 italic text-base leading-relaxed flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/50">
                  <img  class="w-full h-full object-cover" alt={`${testimonial.author} - ${testimonial.role}`} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
