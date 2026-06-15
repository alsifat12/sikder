import React from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowUpCircle, Building2, Sprout, ExternalLink } from 'lucide-react';
import electricImg from '../assets/images/electrical_engineering_panel_1779211512318.png';
import elevatorImg from '../assets/images/elevator_modern_interior_1779211494040.png';
import constructionImg from '../assets/images/construction_modern_technology_1779211527663.png';
import agroImg from '../assets/images/sikder_agro_farm_main_1779479304904.png';

const companies = [
  {
    id: 'electric',
    name: 'Sikder Electric & Engineering',
    icon: <Zap size={28} className="text-[#3A1D4D]" />,
    image: electricImg,
    description: 'Premium automated poultry equipment, automatic feeding pan lines, nipple drinking systems, and environmental controller spares.',
    theme: 'bg-[#3A1D4D]',
    category: 'POULTRY MACHINERY & SPARES',
  },
  {
    id: 'elevator',
    name: 'Sikder Elevator Solution',
    icon: <ArrowUpCircle size={28} className="text-[#6C8B3C]" />,
    image: elevatorImg,
    description: 'Modern European standard passenger lifts, premium villa home elevators, and smart escalators.',
    theme: 'bg-[#6C8B3C]',
    category: 'VERTICAL MOBILITY Solutions',
  },
  {
    id: 'building',
    name: 'Sikder Building Tech & Constructions',
    icon: <Building2 size={28} className="text-[#2D1B36]" />,
    image: constructionImg,
    description: 'High-quality infrastructure, architectural landmarks, structural designs, and raw materials.',
    theme: 'bg-[#2D1B36]',
    category: 'INFRASTRUCTURE & BUILDING',
  },
  {
    id: 'agro',
    name: 'Sikder Agro Farm Limited',
    icon: <Sprout size={28} className="text-emerald-700" />,
    image: agroImg,
    description: 'Automated dairy parlor systems, precision micro-irrigated greenhouses, and eco-aquaculture.',
    theme: 'bg-emerald-950',
    category: 'INTEGRATED PRECISION AGRI',
  }
];

interface CompaniesGridProps {
  onCompanyClick?: (companyId: string) => void;
}

const CompaniesGrid: React.FC<CompaniesGridProps> = ({ onCompanyClick }) => {
  return (
    <section id="companies" className="py-24 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-brand-green font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            Substations • Smart Elevator Solutions • Modern Civil Tech • Precision Agriculture
          </div>
          <h3 className="text-3xl md:text-5xl mb-6 text-slate-800 tracking-tight font-black">Our Premium Divisions</h3>
          
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm inline-block">
            <p className="text-slate-600 text-base leading-relaxed font-semibold italic">
              "Building Innovation With Trust"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => onCompanyClick?.(company.id)}
              className={`${company.theme} rounded-[2.5rem] shadow-xl flex flex-col min-h-[480px] relative overflow-hidden group cursor-pointer active:scale-97 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="w-full h-full object-cover opacity-25 group-hover:scale-108 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              <div className="relative z-10 p-8 flex-grow flex flex-col justify-end">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-6 transform group-hover:scale-105 transition-transform">
                  {company.icon}
                </div>
                
                <h3 className="text-xl lg:text-2xl font-black mb-3 leading-tight text-white group-hover:text-brand-green transition-colors">
                  {company.name}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                  {company.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/45">
                    {company.category}
                  </div>
                  <div className="bg-white/10 text-white p-3 rounded-full hover:bg-white hover:text-slate-900 transition-colors">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesGrid;
