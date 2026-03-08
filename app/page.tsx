
'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const IntroAnimation = dynamic(() => import('./components/IntroAnimation'), {
  ssr: false,
});

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CodingBackground from './components/CodingBackground';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FAB from './components/FAB';
import Navigation from './components/Navigation';
import SmoothScroll from './gsap/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative overflow-hidden">
        <IntroAnimation />
        <CodingBackground />
        <CustomCursor />
        <ScrollProgress />
        <ThemeToggle />
        <Navigation />
        
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <ProjectsSection />
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="pricing">
          <PricingSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
        
        <Footer />
        <FAB />
      </main>
    </SmoothScroll>
  );
}

