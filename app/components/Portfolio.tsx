
"use client";
import React, { useState } from 'react';
import { Project } from '../types';
import ScrollReveal from './ScrollReveal';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      title: "Leave Management System",
      category: "HR",
      image: "https://images.unsplash.com/vector-1738323940227-d06e040032c4?q=80&w=1074?auto=format&fit=crop&q=80&w=800",
      description: "A centralized leave management system for tracking requests, approvals, and balances across organizations.",
      tech: ["Svelte", "ASP.NET Core", "SQL Server"]
    },
    {
      title: "HR Planning System",
      category: "HR",
      image: "https://images.unsplash.com/vector-1738323940293-4991bd5229c3?auto=format&fit=crop&q=80&w=800",
      description: "Workforce planning and forecasting platform to support hiring, promotions, and organizational growth.",
      tech: ["Svelte", "ASP.NET Core", "SQL Server"]
    },
    {
      title: "Attendance Management System",
      category: "HR",
      image: "https://images.unsplash.com/vector-1746131656873-212124783782?auto=format&fit=crop&q=80&w=800",
      description: "Real-time attendance tracking system with reporting, shift management, and audit trails.",
      tech: ["Svelte", "ASP.NET Core", "SQL Server"]
    },
    {
      title: "Payroll Management System",
      category: "Finance",
      image: "https://images.unsplash.com/vector-1740027867842-a63038cb9429?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Automated payroll system handling salaries, deductions, taxes, and compliance for organizations.",
      tech: ["Svelte", "ASP.NET Core", "SQL Server"]
    },
    {
      title: "Item Inventory & POS System",
      category: "E-commerce",
      image: "https://images.unsplash.com/vector-1756774242835-7c6e78b223db?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Inventory and POS platform integrated with Shopify Markets for multi-store and multi-currency sales.",
      tech: ["Laravel", "Shopify API", "Tailwind", "Stripe"]
    },
    {
      title: "Poultry Farm House Management System",
      category: "Agriculture",
      image: "https://images.unsplash.com/vector-1753854003835-75dcb12b7776?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Farm management system that helps poultry farmers track feeding, mortality, egg production, and sales.",
      tech: ["React", "Laravel", "MongoDB"]
    }
  ];





  const filters = ['All', 'Web App', 'Mobile', 'HR',];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-[#f4f7f9] relative overflow-hidden">
      <div className="absolute top-20 left-0 w-full opacity-5 pointer-events-none">
        <span className="outline-text text-[200px] block text-center uppercase whitespace-nowrap">SHOWCASE</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mb-4 block">SUCCESS STORIES</span>
              <h2 className="text-5xl font-black text-[#002147] uppercase tracking-tighter leading-none">
                Featured<br />Portfolio
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all border-b-2 ${activeFilter === filter
                      ? 'border-[#ff5e14] text-[#ff5e14]'
                      : 'border-transparent text-gray-400 hover:text-[#002147]'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={idx}>
              <div className="group relative bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-black text-[#ff5e14] uppercase tracking-widest">{project.category}</span>
                    <div className="flex gap-2">
                      {project.tech.slice(0, 2).map(t => (
                        <span key={t} className="text-[8px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded uppercase tracking-tighter">{t}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-[#002147] uppercase mb-4 group-hover:text-[#ff5e14] transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center opacity-0 gap-2 text-[10px] font-black uppercase tracking-widest text-[#002147] group-hover:translate-x-2 transition-transform cursor-pointer">
                    View Project <span className="text-[#ff5e14] text-lg leading-none">→</span>
                  </div>
                </div>

                {/* Decorative side accent */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff5e14] group-hover:h-full transition-all duration-500"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">Ready to be our next success story?</p>
            <a href="#contact" className="inline-block border-2 border-[#002147] text-[#002147] px-12 py-5 font-black text-xs uppercase tracking-[0.3em] hover:bg-[#002147] hover:text-white transition-all">
              Get Started Now
            </a>
          </div>
          
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portfolio;
