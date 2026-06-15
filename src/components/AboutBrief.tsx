import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, History, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutBriefProps {
  onExplore?: () => void;
}

const AboutBrief: React.FC<AboutBriefProps> = ({ onExplore }) => {
  return (
    <section id="about" className="py-32 bg-brand-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-brand-purple/5 text-brand-purple text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-6">
                ESTD 2004 • Trusted Excellence
              </div>
              <h2 className="text-5xl md:text-6xl mb-8 text-brand-purple font-bold tracking-tight leading-tight">About <span className="text-brand-green">SIKDER</span></h2>
              
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  SIKDER is a trusted and innovative business group established in 2004, providing professional services in engineering, elevator solutions, and modern construction technology.
                </p>
                <p>
                  With years of experience, SIKDER has built a strong reputation for quality work, advanced technology, safety, and customer satisfaction. We believe in creating modern solutions for residential, commercial, and industrial projects through skilled teamwork, smart engineering, and reliable service.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-brand-purple/5 border-l-4 border-brand-green rounded-r-2xl">
                  <h4 className="text-brand-purple font-bold text-xs uppercase tracking-widest mb-3">Our Mission</h4>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    Deliver high-quality services using modern technology while maintaining safety and building long-term relationships.
                  </p>
                </div>
                <div className="p-6 bg-brand-green/5 border-l-4 border-brand-purple rounded-r-2xl">
                  <h4 className="text-brand-purple font-bold text-xs uppercase tracking-widest mb-3">Our Vision</h4>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    To become a leading engineering and construction company through innovation, integrity, and professional excellence.
                  </p>
                </div>
              </div>

              {onExplore && (
                <div className="mt-10">
                  <button
                    onClick={onExplore}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-purple text-white hover:bg-brand-green hover:text-brand-purple tracking-widest uppercase text-[10px] font-bold rounded-2xl shadow-xl hover:shadow-brand-green/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer group"
                  >
                    Read Full Corporate Profile
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Visual Grid */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 relative"
            >
              <div className="bg-brand-purple p-12 flex flex-col items-center justify-center text-center shadow-3xl rounded-[3rem] rounded-bl-none transform hover:-translate-y-2 transition-transform duration-500">
                <span className="text-6xl font-bold text-brand-green block mb-2">20+</span>
                <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Years Experience</span>
              </div>
              <div className="bg-brand-green p-12 flex flex-col items-center justify-center text-center shadow-3xl rounded-[3rem] rounded-tr-none transform translate-y-8 hover:-translate-y-2 transition-transform duration-500">
                <span className="text-6xl font-bold text-brand-purple block mb-2">1k+</span>
                <span className="text-[10px] text-brand-purple/60 uppercase tracking-[0.2em] font-bold">Projects Done</span>
              </div>
              <div className="bg-white border border-slate-100 p-12 flex flex-col items-center justify-center text-center shadow-2xl rounded-[3rem] rounded-br-none transform -translate-y-8 hover:-translate-y-2 transition-transform duration-500">
                <span className="text-6xl font-bold text-brand-green block mb-2">100%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">Safety Score</span>
              </div>
              <div className="bg-brand-purple p-12 flex flex-col items-center justify-center text-center shadow-3xl rounded-[3rem] rounded-tl-none transform hover:-translate-y-2 transition-transform duration-500">
                <span className="text-6xl font-bold text-brand-green block mb-2">50+</span>
                <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Expert Engineers</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrief;
