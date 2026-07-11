import React from 'react';

const technologies = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'hover:shadow-[0_0_20px_#61dafb]' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'hover:shadow-[0_0_20px_#339933]' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'hover:shadow-[0_0_20px_#ffffff]' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'hover:shadow-[0_0_20px_#f7df1e]' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'hover:shadow-[0_0_20px_#3178c6]' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'hover:shadow-[0_0_20px_#3776AB]' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'hover:shadow-[0_0_20px_#4479A1]' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'hover:shadow-[0_0_20px_#336791]' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'hover:shadow-[0_0_20px_#ffffff]' },
];

const TechStack = () => {
  const marqueeTech = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <section id="techstack" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold glow-text mb-4">Technical <span className="text-purple-400">Stack</span></h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#030014] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#030014] to-transparent z-10"></div>
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {marqueeTech.map((tech, idx) => (
            <div 
              key={idx} 
              className={`flex-shrink-0 mx-6 glass p-4 md:p-6 rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${tech.color} border border-white/5 bg-black/40`}
            >
              <img src={tech.icon} alt={tech.name} className={`w-12 h-12 md:w-16 md:h-16 ${tech.name === 'Express.js' || tech.name === 'GitHub' ? 'filter invert' : ''}`} />
              <span className="text-white font-semibold text-lg hidden md:block">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-100% / 4)); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}} />
    </section>
  );
};

export default TechStack;
