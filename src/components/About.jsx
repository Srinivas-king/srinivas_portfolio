import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroImage from '../assets/images/hero/portimg.jpeg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;

    gsap.fromTo(el.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="about" className="relative min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <div
              id="about-image-placeholder"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl md:rounded-[2rem] opacity-0 overflow-hidden"
            />
          </div>

          <div className="w-full lg:w-7/12" ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 glow-text">About <span className="text-cyan-400">Me</span></h2>

            <div className="glass p-8 rounded-3xl mb-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                I am a passionate <span className="text-white font-semibold glow-text">Full Stack Developer</span> with hands-on experience in building responsive web applications and REST APIs. I work with React.js, Node.js, Express.js, MySQL, and PostgreSQL to develop user-friendly and efficient applications. I enjoy learning new technologies, solving real-world problems, and continuously improving my development skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-purple-500/30">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <p className="text-gray-400">Information Technology</p>
              </div>

              <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-cyan-500/30">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                <p className="text-gray-400 text-sm mb-1">Full Stack Developer Intern</p>
                <p className="text-cyan-400 text-xs">Edu Bot Software & Services</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
