
import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000" 
          alt="Software Development IDE" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <div className="relative mb-6">
              <span className="outline-text text-[100px] md:text-[180px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 leading-none opacity-20 pointer-events-none whitespace-nowrap">
                SOFTWARE
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-[#002147] leading-[1.25] tracking-wider uppercase">
                WE BUILD USABLE<br />
                SOFTWARES SOLUTIONS
              </h1>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12">
              <div className="w-20 h-1 bg-[#ff5e14] mx-auto mb-8"></div>
              <p className="text-gray-700 font-semibold text-xl md:text-2xl leading-relaxed">
                Constructing modern solutions requires engineering precision. We turn complex business logic into powerful digital tools that scale with your ambitions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#portfolio" 
                className="bg-[#ff5e14] text-white px-12 py-6 font-black text-sm uppercase tracking-[0.2em] hover:bg-[#e04d0d] transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1 inline-block text-center"
              >
                See Our Portfolio
              </a>
              <a 
                href="#contact" 
                className="bg-[#002147] text-white px-12 py-6 font-black text-sm uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-navy/20 hover:-translate-y-1 inline-block text-center"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
