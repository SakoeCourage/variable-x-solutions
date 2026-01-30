
import React from 'react';
import ScrollReveal from './ScrollReveal';

const Products: React.FC = () => {
  const products = [
    { title: "HR Planning", subtitle: "INTELLIGENT FORECASTING" },
    { title: "Payroll Management", subtitle: "FINANCIAL AUTOMATION" },
    { title: "Attendance Tracking", subtitle: "REAL-TIME MONITORING" },
    { title: "Leave Solutions", subtitle: "SEAMLESS WORKFLOWS" }
  ];

  return (
    <section id="products" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="relative inline-block mb-6">
            <span className="outline-text text-8xl md:text-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30 uppercase">SOLUTIONS</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#002147] uppercase tracking-tighter">OUR PRODUCTS</h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              While we engineer a wide range of custom software solutions tailored to specific business needs, we believe you may be particularly interested in our specialized HR ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#ff5e14] border-y border-[#ff5e14]">
          {products.map((p, idx) => (
            <ScrollReveal key={idx}>
              <div className="bg-white p-12 hover:bg-gray-50 transition-all duration-300 group cursor-pointer relative overflow-hidden h-full">
                {/* Top Accent Hover Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ff5e14] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                
                <span className="block text-[10px] font-black text-gray-400 tracking-[0.2em] mb-4 group-hover:text-[#ff5e14] transition-colors uppercase">
                  {p.subtitle}
                </span>
                <h3 className="text-xl font-black text-[#002147] mb-8 uppercase tracking-tight">
                  {p.title}
                </h3>
                <div className="text-[#ff5e14] text-3xl font-light group-hover:scale-125 transition-transform inline-block">
                  +
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
