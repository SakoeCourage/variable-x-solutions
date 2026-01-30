
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';


interface SoftwareDetailsProps {
  onBack: () => void;
}

const Page: React.FC<SoftwareDetailsProps> = ({ onBack }) => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#002147] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Circuitry" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <span className="outline-text-white text-7xl md:text-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 uppercase whitespace-nowrap pointer-events-none">ARCHITECT</span>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Full Software<br />Architectures
            </h1>
            <div className="w-24 h-1 bg-[#ff5e14] mx-auto"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link 
          href={'/'}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#ff5e14] transition-colors"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Home
        </Link>
      </div>

      {/* Main Content: The Three Pillars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="text-[#ff5e14] text-5xl font-black">01</div>
                <h3 className="text-2xl font-black text-[#002147] uppercase tracking-tight">Enterprise Blueprinting</h3>
                <p className="text-gray-500 leading-relaxed">
                  We don't just write code; we engineer systems. Our process begins with a deep structural analysis of your business logic, ensuring that every line of code serves a strategic purpose. We build foundations that handle heavy loads and complex integrations seamlessly.
                </p>
                <ul className="space-y-3 text-sm font-bold text-[#002147]/70 uppercase tracking-widest">
                  <li>• System Integration</li>
                  <li>• Legacy Modernization</li>
                  <li>• Database Engineering</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-6">
                <div className="text-[#ff5e14] text-5xl font-black">02</div>
                <h3 className="text-2xl font-black text-[#002147] uppercase tracking-tight">Precision Construction</h3>
                <p className="text-gray-500 leading-relaxed">
                  Using a modular approach inspired by modern architecture, we build software components that are reusable, maintainable, and highly efficient. Our tech stack is selected for performance, ensuring your solution is fast today and ready for tomorrow.
                </p>
                <ul className="space-y-3 text-sm font-bold text-[#002147]/70 uppercase tracking-widest">
                  <li>• Microservices Architecture</li>
                  <li>• API-First Design</li>
                  <li>• Cloud-Native Engineering</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-6">
                <div className="text-[#ff5e14] text-5xl font-black">03</div>
                <h3 className="text-2xl font-black text-[#002147] uppercase tracking-tight">Human-Centric UX</h3>
                <p className="text-gray-500 leading-relaxed">
                  A powerful engine needs an intuitive cockpit. We design interfaces that prioritize usability and efficiency. Our UX engineers bridge the gap between complex backend capabilities and simple, productive user experiences.
                </p>
                <ul className="space-y-3 text-sm font-bold text-[#002147]/70 uppercase tracking-widest">
                  <li>• Interface Ergonomics</li>
                  <li>• Responsive Frameworks</li>
                  <li>• Accessibility Standards</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Build Process (Architectural Metaphor) */}
      <section className="py-32 bg-[#002147]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Our Engineering Workflow</h2>
              <p className="text-blue-100/40 font-bold text-xs uppercase tracking-[0.4em]">From Groundbreaking to Handover</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Site Survey", desc: "Discovery and requirement gathering." },
              { step: "02", title: "Blueprinting", desc: "Technical architecture and wireframing." },
              { step: "03", title: "Erection", desc: "Core development and iterative sprints." },
              { step: "04", title: "Finishings", desc: "QA, testing, and deployment." }
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="border border-white/10 p-10 h-full hover:bg-white/5 transition-colors group">
                  <div className="text-[#ff5e14] text-4xl font-black mb-6 group-hover:scale-110 transition-transform inline-block">{item.step}</div>
                  <h4 className="text-white text-lg font-black uppercase mb-4">{item.title}</h4>
                  <p className="text-blue-100/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-5xl font-black text-[#002147] uppercase tracking-tighter mb-8 leading-none">Ready to start building?</h2>
            <p className="text-gray-500 text-xl mb-12">
              Let's discuss the architectural requirements for your next software project. Our team is ready to deliver a solution that stands the test of time.
            </p>
            <Link 
              href="/#contact"
              className="bg-[#ff5e14] text-white px-16 py-6 font-black text-sm uppercase tracking-[0.3em] shadow-xl shadow-orange-500/20 hover:-translate-y-1 transition-all"
            >
              Contact Our Engineers
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Page;
