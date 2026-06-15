import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-24 md:pt-36 md:pb-28">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="src/assets/images/hero_corporate_building_1779211477651.png"
          alt="Modern Corporate Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/90 via-brand-purple/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-block px-4 py-1 bg-brand-green/20 backdrop-blur-sm border border-brand-green/30 text-brand-green text-[10px] font-bold uppercase tracking-[0.3em] rounded-full">
              Established 2004
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-bold font-sans">
              Building <br /><span className="text-white">Innovation</span> <br /><span className="text-brand-green">With Trust</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/70 mb-6 md:mb-8 leading-relaxed font-medium max-w-2xl font-sans">
              SIKDER delivers modern engineering, elevator, and construction solutions with advanced technology and professional excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <button 
                onClick={onExploreClick}
                className="bg-brand-purple text-white font-bold py-3.5 px-8 md:py-4 md:px-10 text-[11px] uppercase tracking-[0.2em] shadow-2xl hover:bg-brand-green hover:text-brand-purple transition-all flex items-center justify-center gap-3 group rounded-full border border-brand-green/30 cursor-pointer"
              >
                Explore Companies <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onContactClick}
                className="border-2 border-white/30 text-white font-bold py-3.5 px-8 md:py-4 md:px-10 text-[11px] uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-white hover:text-brand-purple transition-all text-center rounded-full cursor-pointer"
              >
                Contact Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative pulse line */}
      <div className="absolute left-0 bottom-12 w-full px-4 flex items-center gap-4 text-white/20 select-none pointer-events-none">
        <div className="h-px bg-white/20 flex-grow"></div>
        <span className="text-[10px] uppercase font-bold tracking-[0.5em]">Engineering Excellence</span>
        <div className="h-px bg-white/20 flex-grow"></div>
      </div>
    </section>
  );
};

export default Hero;
