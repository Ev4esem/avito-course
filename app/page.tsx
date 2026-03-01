'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatYouLearn from '@/components/WhatYouLearn';
import Pricing from '@/components/Pricing';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <WhatYouLearn />
      <Pricing />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
