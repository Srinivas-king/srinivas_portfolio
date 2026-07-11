import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative border-t border-white/10 bg-[#050514] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold tracking-wider">
                        <span className="text-purple-400">LT</span>
                        <span className="text-cyan-400">SB</span>
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                        Full Stack Developer
                    </p>
                </div>

                <p className="text-gray-500 text-sm text-center">
                    © {new Date().getFullYear()} Likki Thirumala Srinivas Babu.
                    <span className="text-gray-400"> All rights reserved.</span>
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/Srinivas-king"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-110"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                    >
                        <FaLinkedin size={18} />
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                    >
                        <FaInstagram size={18} />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;