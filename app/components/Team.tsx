
import React from 'react';
import { TeamMember } from '../types';
import ScrollReveal from './ScrollReveal';

const Team: React.FC = () => {
  const members: TeamMember[] = [
    { name: "Mr Kwesi Adabo Boagye", role: "CEO", image: "/thumbnails/team/1.png" },
    { name: "Sakoe Courage", role: "Senior Developer", image: "/thumbnails/team/2.png" },
    { name: "Adusei Theophilus", role: "Senior Developer", image: "/thumbnails/team/3.png" },
    { name: "Kudjo Ewusi Mensah", role: "Mobile App Developer", image: "https://images.unsplash.com/vector-1742875355318-00d715aec3e8?q=50&w=680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
                <div className="aspect-[3/4] overflow-hidden transition-all duration-700">
                  <img src={m.image} alt={m.name} className="w-full bg-white h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
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
