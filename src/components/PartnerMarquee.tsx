import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Building } from 'lucide-react';

interface Partner {
  sl: number;
  name: string;
  headOffice: string;
  projectLocation: string;
  category: string;
}

const partners: Partner[] = [
  { sl: 5, name: 'TEX TAILOR EXPORT (BD) LTD.', headOffice: 'Uttara, Dhaka', projectLocation: 'Kowla, Uttara, Dhaka', category: 'Apparel & Fashion' },
  { sl: 6, name: 'NATIONAL HATCHERY (PVT) LTD. (NATIONAL GROUP)', headOffice: 'Uttara, Dhaka', projectLocation: 'Uttara, Dhaka', category: 'Poultry & Agro' },
  { sl: 10, name: 'NIPA PACKAGING IND. LTD. (NIPA GROUP)', headOffice: 'Dhakhinkhan, Uttara', projectLocation: 'Dobadia Bazar, Uttarkhan, Dhaka', category: 'Allied & Packaging' },
  { sl: 18, name: 'M. H. FASHION', headOffice: 'Uttara, Dhaka', projectLocation: 'Uttara, Dhaka', category: 'Apparel & Fashion' },
  { sl: 25, name: 'PANWIN FASHIONS & DESIGN (PANWIN GROUP)', headOffice: 'Uttara, Dhaka', projectLocation: 'Bagerbazar, Gazipur', category: 'Apparel & Fashion' },
  { sl: 27, name: 'S. S ACCESSORIES LTD.', headOffice: 'Uttara, Dhaka', projectLocation: 'Uttara, Dhaka', category: 'Allied & Packaging' },
  { sl: 28, name: 'RADISSON APPARELS LTD.', headOffice: 'Uttara, Dhaka', projectLocation: 'Tongi, Gazipur', category: 'Apparel & Fashion' },
  { sl: 35, name: 'DOLPHIN WASHING LTD.', headOffice: 'Uttar Khan, Uttara', projectLocation: 'Uttar Khan, Uttara, Dhaka', category: 'Apparel & Fashion' },
  { sl: 36, name: 'UNIPAIL PACKAGING LTD.', headOffice: 'Uttar Khan, Uttara', projectLocation: 'Uttar Khan, Uttara, Dhaka', category: 'Allied & Packaging' },
  { sl: 38, name: 'STYLE WEAR WASHING LTD.', headOffice: 'Uttar Khan, Uttara', projectLocation: 'Uttar Khan, Uttara, Dhaka', category: 'Allied & Packaging' },
  { sl: 41, name: 'FANTASY FOODS LTD.', headOffice: 'Uttara, Dhaka', projectLocation: 'Uttara, Dhaka', category: 'Poultry & Agro' },
  { sl: 55, name: 'TAMANNA SWEATER LTD.', headOffice: 'Uttara, Dhaka', projectLocation: 'MC Bazar, Sreepur, Gazipur', category: 'Apparel & Fashion' }
];

const PartnerMarquee: React.FC = () => {
  // Triple the list to ensure there is enough content to stretch across any viewport size seamlessly
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-slate-50 border-b border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <span className="text-[10px] font-extrabold text-[#6C8B3C] tracking-[0.4em] uppercase block mb-3 font-sans">
          TRUSTED ASSOCIATIONS • NATIONWIDE NETWORK
        </span>
        <h3 className="text-2xl md:text-4xl font-black text-[#3A1D4D] tracking-tight mb-2">
          Corporate Client List
        </h3>
        <p className="text-slate-500 font-semibold max-w-2xl mx-auto text-xs md:text-sm">
          Meticulously serving industrial factories, RMG plants, premium hatcheries, and conglomerates across Bangladesh since 2004.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-4 bg-transparent select-none">
        {/* Left & Right gradient shadows to give soft editorial fade entrance & exit */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-36 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        
        {/* Infinite Sliding Lane Container (Left to Right / Right to Left) */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          {marqueeItems.map((partner, index) => (
            <div
              key={`partner-${partner.sl}-${index}`}
              className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md hover:border-[#6C8B3C]/40 transition-all duration-300 shrink-0 select-none min-w-[280px]"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                <Briefcase size={16} className="text-[#6C8B3C]" />
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#3A1D4D] tracking-wide uppercase line-clamp-1">
                  {partner.name}
                </span>
                <span className="text-[8.5px] font-bold text-slate-400 mt-0.5 uppercase tracking-wider flex items-center gap-1">
                  <Building size={10} className="text-[#6C8B3C]" />
                  {partner.projectLocation}
                </span>
                <span className="text-[8px] font-bold text-emerald-600/90 mt-0.5 uppercase tracking-widest leading-none">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-36 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default PartnerMarquee;
