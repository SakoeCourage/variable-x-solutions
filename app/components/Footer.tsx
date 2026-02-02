
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001936] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="bg-[#ff5e14] inline-flex flex-col items-center px-8 py-4 mb-8">
              <span className="text-xl font-black tracking-tighter leading-none">VARIABLE X</span>
              <span className="text-white text-[6px] font-black tracking-[0.5em] uppercase mt-1.5 -mr-[0.5em]">Solutions</span>
            </div>
            <p className="text-blue-100/40 leading-relaxed max-w-xs">
              Building usable software solutions with modern consistency and high-performance engineering.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#ff5e14] mb-8">Navigation</h4>
            <div className="grid grid-cols-2 gap-4">
              {['Home', 'About Us', 'Products', 'Portfolio', 'Team', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="text-sm font-bold text-white hover:text-[#ff5e14] transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#ff5e14] mb-8">Social Media</h4>
            <div className="flex gap-4">
              {['f', 't', 'i', 'p', 'l'].map(s => (
                <span key={s} className="w-10 h-10 border border-white/10 flex items-center justify-center text-sm font-black hover:bg-[#ff5e14] hover:border-[#ff5e14] transition-all cursor-pointer uppercase">{s}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center text-[11px] font-black text-blue-100/20 uppercase tracking-[0.2em]">
          <span>&copy; 2024 Variable X Solutions.</span>
          <span>Designed with Tech Excellence</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
