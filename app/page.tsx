'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatYouLearn from '@/components/WhatYouLearn';
import ProgramLogic from '@/components/ProgramLogic';
import PriceBreakdown from '@/components/PriceBreakdown';
import Pricing from '@/components/Pricing';
import Guarantee from '@/components/Guarantee';
import Summary from '@/components/Summary';
import ThreePaths from '@/components/ThreePaths';
import FAQ from '@/components/FAQ';
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
      <ProgramLogic />
      <PriceBreakdown />
      <Guarantee />
      <Summary />
      <Pricing />
      <ThreePaths />
      <FAQ />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
