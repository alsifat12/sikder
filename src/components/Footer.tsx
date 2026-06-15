import React from 'react';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import SikderLogo from './SikderLogo';

const Footer = () => {
  return (
    <footer className="bg-brand-purple text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative pulse line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-green to-brand-purple"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4 transition-transform duration-300 hover:scale-[1.03] cursor-pointer">
                <SikderLogo variant="light" className="h-14" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/40 block mt-2">Established 2004</span>
            </div>
            <p className="text-white/50 mb-6 leading-relaxed text-sm font-medium">
              Leading group of companies providing engineering, elevator solutions, and construction excellence powered by modern technology and 20 years of trust.
            </p>
            <div className="space-y-3.5">
              <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-brand-green block">Follow Our Wings On Facebook</span>
              <div className="grid grid-cols-1 gap-2.5">
                <a 
                  href="https://web.facebook.com/SikderElecticEngineering" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-white/60 hover:text-brand-green transition-all group"
                  id="foot-fb-electric"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-purple transition-all shadow">
                    <Facebook size={14} />
                  </span>
                  <span className="text-[11px] font-semibold tracking-tight">Sikder Electric & Engineering</span>
                </a>
                <a 
                  href="https://web.facebook.com/sikderelevatorsolution" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-white/60 hover:text-brand-green transition-all group"
                  id="foot-fb-elevator"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-purple transition-all shadow">
                    <Facebook size={14} />
                  </span>
                  <span className="text-[11px] font-semibold tracking-tight">Sikder Elevator Solution</span>
                </a>
                <a 
                  href="https://web.facebook.com/sikderbuildingtechnology" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-white/60 hover:text-brand-green transition-all group"
                  id="foot-fb-building"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-purple transition-all shadow">
                    <Facebook size={14} />
                  </span>
                  <span className="text-[11px] font-semibold tracking-tight">Sikder Building Tech</span>
                </a>
                <a 
                  href="https://web.facebook.com/sikderagrofarmlimited" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-white/60 hover:text-brand-green transition-all group"
                  id="foot-fb-agro"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-purple transition-all shadow">
                    <Facebook size={14} />
                  </span>
                  <span className="text-[11px] font-semibold tracking-tight">Sikder Agro Farm Ltd.</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-10">Quick Links</h4>
            <ul className="space-y-4 text-white/50 font-bold uppercase text-[10px] tracking-widest">
              <li><a href="#" className="hover:text-brand-green transition-colors">Home Dashboard</a></li>
              <li><a href="#about" className="hover:text-brand-green transition-colors">Company Heritage</a></li>
              <li><a href="#products" className="hover:text-brand-green transition-colors">Premium Products</a></li>
              <li><a href="#services" className="hover:text-brand-green transition-colors">Expert Services</a></li>
              <li><a href="#projects" className="hover:text-brand-green transition-colors">Active Projects</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-10">Engineering Units</h4>
            <ul className="space-y-4 text-white/50 font-bold uppercase text-[10px] tracking-widest">
              <li><a href="#electric" className="hover:text-brand-green transition-colors">Electric & Eng.</a></li>
              <li><a href="#elevator" className="hover:text-brand-green transition-colors">Elevator Solutions</a></li>
              <li><a href="#building" className="hover:text-brand-green transition-colors">Building Tech & Const.</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Technical Consultancy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-10">Communications</h4>
            <ul className="space-y-6 text-white/50 font-medium text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-green flex-shrink-0 mt-1" />
                <span>House- 23, Road- 02, Sector-03, Uttara, Dhaka 1230, Bangladesh</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-brand-green flex-shrink-0" />
                <a href="tel:+8801317462251" className="hover:text-brand-green transition-colors text-white font-semibold">+880 1317-462251</a>
              </li>
              <li className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" className="text-brand-green flex-shrink-0 w-5 h-5 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.09-2.885-6.956C16.63 2.01 14.154.992 11.53.992c-5.412 0-9.819 4.358-9.822 9.774-.001 1.957.513 3.867 1.49 5.568l-.98 3.58 3.738-.971C5.64 18.73 6.13 18.9 6.647 19.154zm12.19-5.186c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.51-.16-.723.16-.214.32-.832 1.04-1.02 1.255-.188.21-.377.24-.697.08-.32-.16-1.352-.499-2.577-1.59-1.01-.9-1.692-2.01-1.89-2.34-.198-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.723-1.74-.99-2.39-.26-.63-.53-.54-.723-.55-.19-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.103 1.08-1.103 2.63s1.125 3.05 1.28 3.26c.155.22 2.214 3.38 5.36 4.74.75.32 1.33.52 1.79.66.75.24 1.43.2 1.97.12.6-.09 1.89-.77 2.155-1.48.26-.7.26-1.3.18-1.43z"/>
                </svg>
                <a href="https://wa.me/8801317462251" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors text-white font-semibold">880 1317-462251 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-brand-green flex-shrink-0" />
                <a href="mailto:sikderee1984@gmail.com" className="hover:text-brand-green transition-colors text-white">sikderee1984@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2026 SIKDER GROUP — ESTD 2004</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Identity</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
