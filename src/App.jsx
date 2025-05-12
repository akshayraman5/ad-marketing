
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import WhatWeDo from '@/components/WhatWeDo';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import OurProcess from '@/components/OurProcess';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import ForCreators from '@/components/ForCreators';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Clients />
        <WhatWeDo />
        <WhoWeWorkWith />
        <OurProcess />
        <AboutUs />
        <Services />
        <Team />
        <ForCreators />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
