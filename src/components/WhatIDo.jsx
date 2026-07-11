import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import workspaceImg from '../assets/images/hero/work mood.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive and interactive user interfaces using React.js, JavaScript, Tailwind CSS, GSAP, and Framer Motion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    color: 'from-cyan-400/20 to-blue-500/20',
    borderColor: 'group-hover:border-cyan-400/50',
    iconColor: 'text-cyan-400'
  },
  {
    title: 'Backend Development',
    desc: 'Developing REST APIs and backend applications using Node.js and Express.js with secure and efficient server-side logic.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    ),
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'group-hover:border-purple-500/50',
    iconColor: 'text-purple-400'
  },
  {
    title: 'Database Architecture',
    desc: 'Designing database schemas and managing application data using MySQL and PostgreSQL.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    ),
    color: 'from-green-400/20 to-emerald-500/20',
    borderColor: 'group-hover:border-green-400/50',
    iconColor: 'text-green-400'
  }
];

const WhatIDo = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.fromTo(cardsRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      }
    );
  }, []);

  return (
    <section id="whatido" className="relative min-h-screen py-24 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">What I <span className="text-purple-400">Do</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden glass p-2 glow-border">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 z-10 pointer-events-none mix-blend-overlay"></div>
              <img
                ref={imageRef}
                src={workspaceImg}
                alt="Coding Setup"
                className="w-full h-[120%] object-cover object-center transform -translate-y-[10%] rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                ref={el => cardsRef.current[idx] = el}
                className={`group glass p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] ${service.borderColor} cursor-default`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
