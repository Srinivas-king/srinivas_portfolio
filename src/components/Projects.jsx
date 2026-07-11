import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

import chatVideo from '../assets/videos/chatgenius proj.mp4';
import bloodVideo from '../assets/videos/blood proj.mp4';
import hospitalVideo from '../assets/videos/online hos proj.mp4';
import leaveVideo from '../assets/videos/Leave MS proj.mp4';

const projects = [
  {
    title: "AI Real-Time Chat Application",
    description: "A real-time chatting application integrated with Gemini API for smart AI responses. Features live sockets, typing indicators, and seamless messaging.",
    tech: ["React.js", "Node.js", "Socket.io", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/Srinivas-king/chat-genius",
    live: "#",
    video: chatVideo
  },
  {
    title: "Blood Donation Registration System",
    description: "A comprehensive platform connecting blood donors with recipients and blood banks. Includes location-based searching, user authentication, and real-time inventory tracking.",
    tech: ["React.js", "Express.js", "MySQL", "Node.js"],
    github: "https://github.com/Srinivas-king/blood-donation-project",
    live: "#",
    video: bloodVideo
  },
  {
    title: "Hospital Appointment Management System",
    description: "An efficient management system for booking hospital appointments, managing doctor schedules, and handling patient records securely.",
    tech: ["React.js", "PostgreSQL", "Node.js"],
    github: "https://github.com/Srinivas-king/Online-hospital-appointment-management-system",
    live: "#",
    video: hospitalVideo
  },
  {
    title: "Leave Management System",
    description: "A digital solution for employees to apply for leaves, and for HR/managers to track, approve, and manage leave balances effortlessly.",
    tech: ["React.js", "Node.js", "MySQL", "Express.js"],
    github: "https://github.com/Srinivas-king/leave_MS",
    live: "#",
    video: leaveVideo
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">Featured <span className="text-cyan-400">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-12">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Navigation, Autoplay]}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            className="w-full h-[520px] sm:h-[550px] md:h-[500px]"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center rounded-3xl overflow-hidden glass border border-white/10 glow-border bg-[#0a0a1a]">
                <div className="flex flex-col md:flex-row w-full h-full">
                  
                  <div className="w-full md:w-[60%] h-2/5 md:h-full relative overflow-hidden bg-black/80 group">
                    <video 
                      src={project.video}
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-80 md:hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a1a] opacity-80 hidden md:block"></div>
                  </div>

                  <div className="w-full md:w-[40%] h-3/5 md:h-full p-6 md:p-10 flex flex-col justify-center relative bg-[#0a0a1a]/50">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{project.title}</h3>
                    
                    <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 md:mt-6 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 text-white border border-cyan-500/30 hover:border-cyan-400/50 transition-all font-medium text-sm w-fit hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-0.5"
                    >
                      <FaGithub className="text-lg" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
