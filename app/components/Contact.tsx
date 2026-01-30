"use client"
import React, { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  const resetForm = () => setStatus('idle');

  return (
    <section id="contact" className="py-32 bg-[#002147] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20">
        <span className="outline-text-white text-[150px] opacity-10 block pointer-events-none uppercase">CONNECT</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Start your<br />next project
            </h2>
            <p className="text-blue-100/60 text-lg mb-12 max-w-md">
              We're ready to engineer your digital success. Reach out to our team of experts today for usable software solutions.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-[#ff5e14] flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <span className="block text-[10px] font-black text-blue-100/40 uppercase tracking-[0.3em] mb-1">Email Us</span>
                  <a href="mailto:info@variablexsolutions.com" className="text-xl font-black text-white hover:text-[#ff5e14] transition-colors">info@variablexsolutions.com</a>
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 border-2 border-white/20 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                </div>
                <div>
                  <span className="block text-[10px] font-black text-blue-100/40 uppercase tracking-[0.3em] mb-1">Headquarters</span>
                  <span className="text-xl font-black text-white">Accra, Ghana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-16 relative min-h-[500px] flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-black text-[#002147] uppercase mb-4">Request Sent!</h3>
                <p className="text-gray-500 mb-8">Engineering team notified. We will get back to you within 24 hours.</p>
                <button onClick={resetForm} className="text-[#ff5e14] font-black text-xs uppercase tracking-widest hover:underline">Send another message</button>
              </div>
            ) : status === 'error' ? (
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <h3 className="text-2xl font-black text-[#002147] uppercase mb-4">Oops!</h3>
                <p className="text-gray-500 mb-8">Transmission failed. Please check your connection and try again.</p>
                <button onClick={resetForm} className="bg-[#ff5e14] text-white px-8 py-4 font-black text-xs uppercase tracking-[0.2em]">Try Again</button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Name</label>
                    <input required disabled={status === 'loading'} type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-[#ff5e14] focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</label>
                    <input required disabled={status === 'loading'} type="email" className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-[#ff5e14] focus:outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea required disabled={status === 'loading'} rows={4} className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-[#ff5e14] focus:outline-none transition-colors resize-none"></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#ff5e14] text-white w-full py-6 font-black text-xs uppercase tracking-[0.3em] hover:bg-[#e04d0d] transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
                >
                  {status === 'loading' ? "Sending..." : "Send Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
