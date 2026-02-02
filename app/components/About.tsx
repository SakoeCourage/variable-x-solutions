
import Link from 'next/link';
import React from 'react';

const About: React.FC = () => {

  return (
    <section id="aboutus" className="py-32 bg-[#f4f7f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="w-full h-[500px] object-cover shadow-2xl" 
              alt="Engineering" 
            />
            <div className="absolute -bottom-10 -right-10 bg-[#ff5e14] p-10 hidden md:block">
              <span className="text-white text-5xl font-black leading-none">4+</span>
              <span className="block text-white font-bold text-xs uppercase tracking-widest mt-2">Years of Tech</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <span className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mb-4 block">CORE CAPABILITIES</span>
          <h2 className="text-5xl font-black text-[#002147] leading-[1.1] uppercase mb-8 tracking-tighter">
            Full software<br />Solution
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Variable X Solutions offers a streamlined experience for your custom software needs. From complex enterprise architectures to innovative digital products, we manage every detail with the precision of master engineers. 
          </p>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Our approach is built on the foundations of consistency, scalability, and modern architectural principles applied to the digital world.
          </p>

          <Link href={'/software-architecture'} className="bg-[#ff5e14] text-white px-12 py-5 font-black text-xs uppercase tracking-[0.2em] hover:bg-[#e04d0d] transition-all">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;