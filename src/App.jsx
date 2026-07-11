import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Footer from "./components/footer";
import heroImage from './assets/images/hero/portimg.jpeg';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const sharedImageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
      if (lenisRef.current) {
        lenisRef.current.start();

        // Auto-scroll to URL hash on load
        if (window.location.hash) {
          const targetEl = document.querySelector(window.location.hash);
          if (targetEl) {
            setTimeout(() => {
              if (lenisRef.current) {
                lenisRef.current.scrollTo(targetEl, {
                  duration: 1.5,
                  immediate: false,
                });
              }
            }, 150);
          }
        }
      }
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    lenis.stop();

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0, 0);

    // Helper to calculate page-relative coordinates
    const getPageRect = (el) => {
      if (!el) return { top: 0, left: 0, width: 0, height: 0 };
      const rect = el.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY,
        left: rect.left,
        width: rect.width,
        height: rect.height
      };
    };

    // Wait for a frame to ensure DOM layout is complete
    requestAnimationFrame(() => {
      const heroPlaceholder = document.getElementById('hero-image-placeholder');
      const aboutPlaceholder = document.getElementById('about-image-placeholder');

      if (heroPlaceholder && aboutPlaceholder && sharedImageRef.current) {
        // Ensure shared overlay is displayed on all screen sizes
        gsap.set(sharedImageRef.current, { display: 'block' });

        const rect = getPageRect(heroPlaceholder);
        gsap.set(sharedImageRef.current, {
          position: 'absolute',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          scale: 0.8,
          opacity: 0,
          visibility: 'visible'
        });

        // Fade in and scale up
        gsap.to(sharedImageRef.current, {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 2.6,
          ease: 'power3.out',
          onComplete: () => {
            gsap.set(sharedImageRef.current, { opacity: 1, visibility: 'visible' });
            // Refresh ScrollTrigger once load animations are done
            ScrollTrigger.refresh();
          }
        });

        // Mouse move 3D tilt tracking (Only on devices matching pointer: fine)
        let handleMouseMove;
        const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
        if (hasFinePointer) {
          handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPos = (clientX / innerWidth - 0.5) * 20;
            const yPos = (clientY / innerHeight - 0.5) * -20;

            gsap.to(sharedImageRef.current, {
              rotationY: xPos,
              rotationX: yPos,
              transformPerspective: 1000,
              transformOrigin: "center center",
              duration: 0.5,
              ease: 'power2.out',
            });
          };
          window.addEventListener('mousemove', handleMouseMove);
        }

        // Subtle floating animation
        const floatAnim = gsap.to(sharedImageRef.current, {
          y: "-=15",
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });

        // Responsive ScrollTrigger translation (scrubs smoothly on all viewports)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#about',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
            invalidateOnRefresh: true,
            onEnter: () => floatAnim.pause(),
            onLeaveBack: () => floatAnim.play(),
          }
        });

        tl.fromTo(sharedImageRef.current,
          {
            left: () => {
              const el = document.getElementById('hero-image-placeholder');
              return el ? getPageRect(el).left : 0;
            },
            top: () => {
              const el = document.getElementById('hero-image-placeholder');
              return el ? getPageRect(el).top : 0;
            },
            width: () => {
              const el = document.getElementById('hero-image-placeholder');
              return el ? getPageRect(el).width : 0;
            },
            height: () => {
              const el = document.getElementById('hero-image-placeholder');
              return el ? getPageRect(el).height : 0;
            }
          },
          {
            left: () => {
              const el = document.getElementById('about-image-placeholder');
              return el ? getPageRect(el).left : 0;
            },
            top: () => {
              const el = document.getElementById('about-image-placeholder');
              return el ? getPageRect(el).top : 0;
            },
            width: () => {
              const el = document.getElementById('about-image-placeholder');
              return el ? getPageRect(el).width : 0;
            },
            height: () => {
              const el = document.getElementById('about-image-placeholder');
              return el ? getPageRect(el).height : 0;
            },
            ease: 'none'
          }
        );

        // Resize / Orientation change listeners to recalculate measurements immediately
        const handleResize = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        window.addEventListener('load', handleResize);

        // Safety fallback to guarantee opacity: 1 and visibility: visible after loader closes
        const fallbackTimeout = setTimeout(() => {
          if (sharedImageRef.current) {
            gsap.set(sharedImageRef.current, { opacity: 1, visibility: 'visible' });
            ScrollTrigger.refresh();
          }
        }, 4000);

        // Store cleanup handles
        sharedImageRef.current._cleanup = () => {
          if (handleMouseMove) {
            window.removeEventListener('mousemove', handleMouseMove);
          }
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('orientationchange', handleResize);
          window.removeEventListener('load', handleResize);
          floatAnim.kill();
          tl.kill();
          clearTimeout(fallbackTimeout);
        };
      }
    });

    // Intercept navbar and other anchor links for smooth scrolling via Lenis
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        const targetEl = document.querySelector(target.hash);
        if (targetEl) {
          e.preventDefault();
          if (lenisRef.current) {
            lenisRef.current.scrollTo(targetEl, {
              duration: 1.5,
            });
            window.history.pushState(null, null, target.hash);
          }
        }
      }
    };
    window.addEventListener('click', handleAnchorClick);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      window.removeEventListener('click', handleAnchorClick);
      if (sharedImageRef.current && sharedImageRef.current._cleanup) {
        sharedImageRef.current._cleanup();
      }
    };
  }, []);

  return (
    <div ref={appRef} className="relative w-full min-h-screen bg-[#030014] text-white selection:bg-purple-500 selection:text-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      <Cursor />

      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Shared Animated Hero Image */}
      <div
        ref={sharedImageRef}
        className="z-30 pointer-events-none p-2 rounded-2xl md:rounded-[3rem] glow-border bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md"
        style={{ position: 'absolute', opacity: 0, visibility: 'hidden' }}
      >
        <div className="w-full h-full rounded-xl md:rounded-[2.5rem] overflow-hidden relative border border-white/10 bg-black/50">
          <img
            src={heroImage}
            alt="Likki Thirumala Srinivas Babu"
            className="w-full h-full object-cover object-top mix-blend-lighten"
          />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhatIDo />
          <Projects />
          <TechStack />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
