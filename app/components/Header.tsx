"use client"
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#aboutus' },
    { name: 'Products', href: '/#products' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header className="fixed w-full z-50">
        {/* Top Bar */}
        <div className={`hidden lg:flex bg-white border-b border-gray-100 py-2 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            <div className="flex gap-6">
              <span className="flex items-center gap-2"><span className="text-[#ff5e14]">+</span>(123) 1234-567-8901</span>
              <span className="flex items-center gap-2 lowercase"><span className="text-[#ff5e14]">@</span>info@variablexsolutions.com</span>
              <span className="flex items-center gap-2"><span className="text-[#ff5e14]">⌚</span>Mon - Sat 8:00 - 17:30</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[#ff5e14] cursor-default tracking-[0.3em]">VXS</span>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className={`transition-all duration-300 shadow-sm ${isScrolled ? 'bg-white py-3' : 'bg-white py-0'}`}>
          <div className="max-w-7xl mx-auto flex items-stretch justify-between">
            <div className="flex items-center">
              {/* Logo Container - Responsive Sizing */}
              <div className="bg-[#ff5e14] px-6 py-4 md:px-10 md:py-6 flex flex-col items-center justify-center min-h-[60px] md:min-h-[80px]">
                <span className="text-white text-lg md:text-2xl font-black tracking-tighter leading-none">VARIABLE X</span>
                <span className="text-white text-[5px] md:text-[7px] font-black tracking-[0.5em] md:tracking-[0.6em] uppercase mt-1 -mr-[0.5em] md:-mr-[0.6em]">Solutions</span>
              </div>
              
              <div className="hidden lg:flex items-center h-full ml-8 gap-8">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-[13px] font-extrabold text-[#002147] uppercase tracking-widest hover:text-[#ff5e14] transition-colors h-full flex items-center"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center pr-4 gap-6">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="bg-[#002147] lg:hidden p-3 text-white hover:bg-[#ff5e14] transition-colors"
                aria-label="Open Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#002147] transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col items-start">
              <span className="text-white text-xl font-black tracking-tighter leading-none">VARIABLE X</span>
              <span className="text-white text-[6px] font-black tracking-[0.6em] uppercase mt-1 -mr-[0.6em]">Solutions</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white hover:text-[#ff5e14] transition-colors"
              aria-label="Close Menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-black text-white uppercase tracking-tighter hover:text-[#ff5e14] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="p-12 text-center border-t border-white/10">
            <p className="text-blue-100/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Engineering Digital Excellence</p>
            <div className="flex justify-center gap-6">
              <span className="w-10 h-10 border border-white/10 flex items-center justify-center text-white text-sm font-black uppercase">f</span>
              <span className="w-10 h-10 border border-white/10 flex items-center justify-center text-white text-sm font-black uppercase">t</span>
              <span className="w-10 h-10 border border-white/10 flex items-center justify-center text-white text-sm font-black uppercase">l</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
