import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1117] text-gray-400 py-8 px-6 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="text-white bold uppercase font-bold text-xl tracking-tight">
            jato daniel.
          </span>

          <p className="text-xs text-gray-500">
            © 2025 Pedro Machado. All rights reserved.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex items-center space-x-6 text-xs text-gray-400">
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-white transition-colors duration-200"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:text-white transition-colors duration-200"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-4 text-emerald-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition-colors duration-200 text-lg"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition-colors duration-200 text-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition-colors duration-200 text-lg"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

      </div>
    </footer>
  );
}
