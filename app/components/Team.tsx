
import React from 'react';
import { TeamMember } from '../types';
import ScrollReveal from './ScrollReveal';

const Team: React.FC = () => {
  const members: TeamMember[] = [
    { name: "Mr Kwesi Adabo Boagye", role: "CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Sakoe Courage", role: "Senior Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Adusei Theophilus", role: "Senior Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Kudjo Ewusi Mensah", role: "Mobile App Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section id="team" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20 relative">
            <span className="outline-text text-8xl md:text-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 uppercase">EXPERTS</span>
            <h2 className="text-5xl font-black text-[#002147] uppercase tracking-tighter relative z-10 mb-6">OUR TEAM</h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto relative z-10">
              Meet the team of dedicated professionals who turn vision into reality and make all things possible.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, idx) => (
            <ScrollReveal key={idx}>
              <div className="group relative overflow-hidden bg-[#002147]">
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                </div>
                <div className="p-8 absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#002147] to-transparent">
                  <h3 className="text-white text-lg font-black uppercase tracking-tight mb-1 group-hover:text-[#ff5e14] transition-colors">{m.name}</h3>
                  <p className="text-[#ff5e14] text-[10px] font-black uppercase tracking-[0.2em]">{m.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
