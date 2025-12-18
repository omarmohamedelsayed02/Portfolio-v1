// src/utils/gsapSetup.ts (أو أي مسار مناسب)

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin'; // 👈 مهم جداً لـ scrollToSlide

// تسجيل الإضافات المطلوبة
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// يمكنك استدعاء هذه الوظيفة مرة واحدة في ملف الـ Root Layout
export const setupGSAP = () => {
  // لا توجد حاجة للينيس هنا، فقط تفعيل GSAP
  console.log("GSAP and ScrollTrigger are set up.");
};