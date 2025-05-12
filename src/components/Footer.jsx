
import React from 'react';
import { Zap, Twitter, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: 'Our Focus', items: ['Brand Collaborations', 'Creator Partnerships', 'Campaign Management', 'Influencer Marketing'] },
    { title: 'Company', items: ['About Us', 'Our Team', 'Join as Creator', 'Contact Us'] },
    { title: 'Connect', items: ['hello@apnadigitalmarketing.com', 'collab@apnadigitalmarketing.com'] },
  ];

  const socialIcons = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/manishapnadigitalmarketing', label: 'Instagram' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@apnadigitalrecords', label: 'Youtube' },
    { icon: <Twitter size={20} />, href: 'https://x.com/apnadigitalmktg', label: 'Twitter' }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center mb-4">
              <Zap className="h-7 w-7 mr-2 text-primary" />
              <span className="text-xl font-bold gradient-text-alt">Apna Digital Marketing</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Connecting brands with creators for real influence and measurable results.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(social => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map(section => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map(item => (
                  <li key={item}>
                    {section.title === 'Connect' ? (
                      <a href={`mailto:${item}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                        {item}
                      </a>
                    ) : (
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
           <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Location</h3>
              <p className="text-sm text-muted-foreground">India</p>
            </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Apna Digital Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
