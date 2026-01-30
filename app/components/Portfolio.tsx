
"use client"
import React, { useState } from 'react';
import { Project } from '../types';


const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      title: "Nexus HR Enterprise",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "A comprehensive payroll and attendance system for multi-national firms.",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "SwiftPay Wallet",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      description: "High-security digital wallet for peer-to-peer transfers and utility payments.",
      tech: ["React Native", "Firebase", "Stripe"]
    },
    {
      title: "LogiTrack AI",
      category: "Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      description: "AI-driven supply chain management dashboard with real-time tracking.",
      tech: ["Python", "AWS", "Vue.js"]
    },
    {
      title: "EcoStore Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      description: "Headless commerce solution optimized for core web vitals and conversions.",
      tech: ["Next.js", "Shopify API", "Tailwind"]
    },
    {
      title: "MediLink Connect",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      description: "Telemedicine platform connecting patients with specialized healthcare providers.",
      tech: ["WebRTC", "Express", "MongoDB"]
    },
    {
      title: "Skyline Analytics",
      category: "Big Data",
      image: "https://images.unsplash.com/photo-1551288049-bbda64626744?auto=format&fit=crop&q=80&w=800",
      description: "Data visualization tool for real-estate market trends and predictions.",
      tech: ["D3.js", "TypeScript", "Go"]
    }
  ];

  const filters = ['All', 'Web App', 'Mobile', 'Logistics', 'Healthcare'];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-[#f4f7f9] relative overflow-hidden">
      <div className="absolute top-20 left-0 w-full opacity-5 pointer-events-none">
        <span className="outline-text text-[200px] block text-center uppercase whitespace-nowrap">SHOWCASE</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all border-b-2 ${
                  activeFilter === filter 
                    ? 'border-[#ff5e14] text-[#ff5e14]' 
                    : 'border-transparent text-gray-400 hover:text-[#002147]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group relative bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
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
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#002147] group-hover:translate-x-2 transition-transform cursor-pointer">
                  View Project <span className="text-[#ff5e14] text-lg leading-none">→</span>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff5e14] group-hover:h-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">Ready to be our next success story?</p>
          <a href="#contact" className="inline-block border-2 border-[#002147] text-[#002147] px-12 py-5 font-black text-xs uppercase tracking-[0.3em] hover:bg-[#002147] hover:text-white transition-all">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
