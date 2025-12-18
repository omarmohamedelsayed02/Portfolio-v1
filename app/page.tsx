'use client';

import dynamic from 'next/dynamic';

const IntroAnimation = dynamic(() => import('./components/IntroAnimation'), {
  ssr: false,
});
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import { useEffect } from 'react';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CodingBackground from './components/CodingBackground';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FAB from './components/FAB';
import ScrollTrigger from "gsap/ScrollTrigger";
import SmoothScroll from "./gsap/SmoothScroll";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
     gsap.to(".horizontal-wrapper", {
      x: "-200vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top top",
        end: "bottom+=2000 top",
        scrub: true,
        pin: true,
      },
    });
  })
  return (
    <SmoothScroll>
    <main className="min-h-screen relative overflow-hidden">
      
      <IntroAnimation />
      <CodingBackground />
      <CustomCursor />
      <ScrollProgress />
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection/>
      <ContactSection />
      <FAB />
      <Footer />
    </main>
          </SmoothScroll>

  );
}
