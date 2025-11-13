'use client';

import dynamic from 'next/dynamic';

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

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <IntroAnimation />
      <CodingBackground />
      <CustomCursor />
      <ScrollProgress />
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <FAB />
      <Footer />
    </main>
  );
}
