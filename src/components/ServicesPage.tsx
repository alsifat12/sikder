import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, ArrowUpCircle, Building2, Sprout, 
  CheckCircle2, ArrowRight, ShieldCheck, Cpu, 
  HelpCircle, Sparkles, Star, Factory, HardHat, FileText
} from 'lucide-react';

// Use assets of each company to maintain consistent brand imagery
import electricImg from '../assets/images/electrical_engineering_panel_1779211512318.png';
import elevatorImg from '../assets/images/elevator_modern_interior_1779211494040.png';
import constructionImg from '../assets/images/construction_modern_technology_1779211527663.png';
import agroImg from '../assets/images/sikder_agro_farm_main_1779479304904.png';

interface ServiceDetail {
  title: string;
  bnTitle: string;
  description: string;
}

interface CompanyService {
  id: string;
  companyName: string;
  tagline: string;
  bnTagline: string;
  category: string;
  icon: React.ReactNode;
  bgImage: string;
  themeColor: string;
  accentColor: string;
  summary: string;
  coreServices: ServiceDetail[];
  standards: string[];
}

const servicesData: CompanyService[] = [
  {
    id: 'electric',
    companyName: 'Sikder Electric & Engineering',
    tagline: 'Automated Poultry Equipment Systems & Spares Services',
    bnTagline: 'অটোমেটিক পোল্ট্রি ফার্ম মেশিনারি ও স্পেয়ারস সার্ভিসেস',
    category: 'AUTOMATED POULTRY SYSTEMS',
    icon: <Zap className="text-yellow-400" size={24} />,
    bgImage: electricImg,
    themeColor: 'bg-[#3A1D4D]',
    accentColor: '#3A1D4D',
    summary: 'Since 2004, providing high-efficiency automatic poultry feeding pan lines, climate ventilation controls, non-electric medication dosing, and high-performance drinker spares for farms.',
    coreServices: [
      {
        title: 'Automatic Feeding Pan Line Setups',
        bnTitle: 'অটোমেটিক ফিডিং প্যান ও মোটর লাইন',
        description: 'Precision engineered auger feeders and smart level sensors feeding uniform ratios across multi-row poultry farm house structures.'
      },
      {
        title: 'High-Flow Nipple Drinking Systems',
        bnTitle: 'অটোমেটিক নিপল ড্রিংকার ও ড্রিপ কাপ',
        description: 'Double sealed 360-degree stainless steel nipple drinker feeds paired with dual-arm ABS drip cups avoiding water spill-out and moldy litter.'
      },
      {
        title: 'Smart Climate & Negative Pressure Fans',
        bnTitle: 'স্মার্ট ক্লাইমেট ও টানেল ভেন্টিলেশন',
        description: 'Galvanized negative pressure exhaust fans alongside customized cellulose cooling pad setups maintaining ideal temperature-humidity layers.'
      }
    ],
    standards: [
      'ISO 9001 Poultry Equipment Certification',
      'Strict biosecurity-compliant system designs',
      '24/7 technical parts and emergency lines support'
    ]
  },
  {
    id: 'elevator',
    companyName: 'Sikder Elevator Solution',
    tagline: 'European Standard Lifts & Vertical Mobility Integration',
    bnTagline: 'ইউরোপীয় স্ট্যান্ডার্ড লিফট ও স্মার্ট ক্যাব সল্যুশন্স',
    category: 'SMART MOBILITY & ESCALATORS',
    icon: <ArrowUpCircle className="text-green-400" size={24} />,
    bgImage: elevatorImg,
    themeColor: 'bg-[#6C8B3C]',
    accentColor: '#6C8B3C',
    summary: 'Importing and engineering premium European passenger lifts, state-of-the-art heavy duty cargo lifts, hospital stretchers, and sleek villa-home elevators with safety redundancies.',
    coreServices: [
      {
        title: 'Premium Passenger & Villa Lifts',
        bnTitle: 'প্যাসেঞ্জার ও ভিলা হোম লিফট',
        description: 'Advanced gearless PMSM motor systems reducing energy footprints by 45%, integrated with luxurious noise-insulated custom cabins.'
      },
      {
        title: 'Heavy Capacity Cargo & Stretcher Lifts',
        bnTitle: 'কার্গো ও হাসপাতাল স্ট্রেচার লিফট',
        description: 'Industrial-grade hydraulic and traction loading configurations engineered for manufacturing plants, RMG factories, and diagnostic super-centers.'
      },
      {
        title: 'Smart Speed Escalators & Walkways',
        bnTitle: 'এসকেলেটর ও মুভিং ওয়াকওয়ে',
        description: 'Micro-step control with automatic speed governors, standard safety skirts, and energy-saving optical sensors for shopping malls and airports.'
      }
    ],
    standards: [
      'EU Lift Directive EN 81-20/50 certified',
      'VVVF Intelligent Vector Driving controls',
      'ARDS (Automatic Rescue Device) safety standards'
    ]
  },
  {
    id: 'building',
    companyName: 'Sikder Building Tech & Constructions',
    tagline: 'Landmark Steel Infrastructures & Reinforced Civil Engineering',
    bnTagline: 'আধুনিক স্টিল স্ট্রাকচার ও সুপরিকল্পিত সিভিল টেক',
    category: 'HEAVY CIVIL & INFRASTRUCTURE',
    icon: <Building2 className="text-blue-400" size={24} />,
    bgImage: constructionImg,
    themeColor: 'bg-[#2D1B36]',
    accentColor: '#2D1B36',
    summary: 'Executing master planning, pre-engineered steel designs, modern pile foundation grids, and civil engineering benchmarks for heavy manufacturing enterprises across Bangladesh.',
    coreServices: [
      {
        title: 'Industrial Factory Layouts & Girders',
        bnTitle: 'শিল্প কারখানা ও মেটাল কাটিং শেড',
        description: 'High tensile strength pre-engineered steel frames (PEB) customized for heavy composite textiles, industrial warehouses, and RMG units.'
      },
      {
        title: 'Reinforced Deep Foundation Systems',
        bnTitle: 'হেভি স্ল্যাব ও ডিপ পাইল পাইলিং',
        description: 'High pressure concrete casting and boring operations yielding robust geological safety profiles even in soft riverside and tidal plains.'
      },
      {
        title: 'Architectural Project Supervisions',
        bnTitle: 'আর্কিটেকচারাল তত্ত্বাবধান ও কনসালটেন্সি',
        description: 'End-to-end project management from soil testing, digital structural load modeling, RAJUK clearance assistance to turnkey key handovers.'
      }
    ],
    standards: [
      'BNBC (Bangladesh National Building Code) fully aligned',
      'ASTM structural steel grade certification',
      'AISC (American Institute of Steel Construction) designs'
    ]
  },
  {
    id: 'agro',
    companyName: 'Sikder Agro Farm Limited',
    tagline: 'Precision AgriTech Integration & High-Yield Aquaculture',
    bnTagline: 'হাই-টেক মডার্ন এগ্রিকালচার ও ডেইরি ফার্মিং',
    category: 'AGRICULTURAL AUTOMATION',
    icon: <Sprout className="text-emerald-400" size={24} />,
    bgImage: agroImg,
    themeColor: 'bg-emerald-950',
    accentColor: '#064e3b',
    summary: 'Transforming biological and livestock layouts via intelligent milking parlors, continuous aqua-filtration networks, high-density greenhouses, and premium breed distribution.',
    coreServices: [
      {
        title: 'Automated Dairy Parlor Controls',
        bnTitle: 'অটোমেটেড মিল্কিং ডেইরি সিস্টেম',
        description: 'Herringbone & rotary vacuum-pulsed extraction arrays that maximize yield hygiene, integrated with smart digital health-collar tracking.'
      },
      {
        title: 'Precision Micro-Irrigated Greenhouses',
        bnTitle: 'ড্রিপ ইরিগেশন ও গ্রিনহাউস টেক',
        description: 'Computer-controlled liquid nutrition injection (fertigation) and automated shade canopies for high-value seed multiplication and crops.'
      },
      {
        title: 'Advanced Eco-Aquaculture & Hatcheries',
        bnTitle: 'উন্নত মৎস্য প্রক্রিয়াজাতকরণ হ্যাচারি',
        description: 'High-density oxygen recirculation loops and premium bio-security filters designed for high-yield shrimp and fresh-water fish breeding.'
      }
    ],
    standards: [
      'ISO 22000 Food Safety standards oriented',
      'Organic GAP (Good Agricultural Practices) certified',
      'Highly hygienic zero-waste dairy configurations'
    ]
  }
];

interface ServicesPageProps {
  onBack: () => void;
  onCompanyClick: (id: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack, onCompanyClick }) => {
  const [activeTab, setActiveTab] = useState<string>('electric');

  const selectedCompany = servicesData.find(c => c.id === activeTab) || servicesData[0];

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-24 font-sans selection:bg-[#6C8B3C] selection:text-white">
      {/* Header Container */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-8 mb-12">
          <div>
            <span className="text-[10px] font-black text-[#6C8B3C] tracking-[0.4em] uppercase block mb-3">
              INDUSTRIAL CAPACITY & ENGINEERING BLUEPRINTS
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple tracking-tight">Our Premium Divisions</h1>
            <p className="text-slate-500 font-bold mt-2 text-xs md:text-sm">
              Meticulously serving industrial factories, RMG plants, premium hatcheries, and conglomerates across Bangladesh since 2004.
            </p>
          </div>
          <button
            onClick={onBack}
            className="mt-6 md:mt-0 px-6 py-3 bg-[#3A1D4D] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#6C8B3C] transition-all duration-300 shadow-md flex items-center gap-2 max-w-max"
          >
            ← Back to Home
          </button>
        </div>

        {/* Dynamic Distinct Selector Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {servicesData.map((company) => {
            const isActive = activeTab === company.id;
            return (
              <button
                key={company.id}
                onClick={() => setActiveTab(company.id)}
                className={`relative flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-left select-none overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#3A1D4D] to-[#20102b] text-white border-transparent shadow-xl translate-y-[-4px]' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#6C8B3C]/50 hover:bg-slate-50/50 hover:shadow-md'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeSub-glow"
                    className="absolute inset-x-0 bottom-0 h-1 bg-[#6C8B3C]" 
                  />
                )}
                
                <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'bg-slate-100 text-[#3A1D4D]'
                }`}>
                  {company.icon}
                </div>

                <div className="flex flex-col">
                  <span className={`text-[9px] font-black tracking-wider uppercase mb-0.5 ${
                    isActive ? 'text-brand-green' : 'text-slate-400'
                  }`}>
                    {company.category.split(' ')[0]} DIVISION
                  </span>
                  <span className="text-xs md:text-sm font-black tracking-tight leading-tight line-clamp-1">
                    {company.companyName.replace('Sikder ', '')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Box - Highly Distinct, Layout structured layout */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden min-h-[500px] flex flex-col lg:flex-row">
          {/* Left panel: Background Image with Content Overlay */}
          <div className="lg:w-2/5 relative shrink-0 min-h-[300px] lg:min-h-auto flex flex-col justify-end p-8 lg:p-12 text-white">
            <div className="absolute inset-0 z-0">
              <img 
                src={selectedCompany.bgImage} 
                alt={selectedCompany.companyName} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/35" />
            </div>

            <div className="relative z-10">
              <span className="px-3 py-1 bg-[#6C8B3C] text-[8px] font-extrabold tracking-widest uppercase rounded-full inline-block mb-4">
                {selectedCompany.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2 leading-tight">
                {selectedCompany.companyName}
              </h2>
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wide mb-4">
                {selectedCompany.bnTagline}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium">
                {selectedCompany.summary}
              </p>

              <button
                onClick={() => onCompanyClick(selectedCompany.id)}
                className="px-6 py-3 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-slate-900 border border-white/25 transition-all duration-300 flex items-center gap-2 "
              >
                In-Depth Technical Profile
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right panel: Bullet point details of the Services */}
          <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-[#6C8B3C]" size={20} />
                <h3 className="text-lg md:text-xl font-extrabold text-[#3A1D4D] tracking-tight">
                  Premium Solutions & Active Scope
                </h3>
              </div>

              {/* Core Services grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {selectedCompany.coreServices.map((service, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80 hover:border-[#6C8B3C]/30 transition-all hover:bg-slate-50/80 duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-[#3A1D4D]/5 p-2 rounded-xl text-[#3A1D4D] flex-shrink-0 mt-1">
                        <CheckCircle2 size={16} className="text-[#3A1D4D]" />
                      </div>
                      <div>
                        <h4 className="text-[#3A1D4D] font-extrabold text-sm tracking-tight mb-1">
                          {service.title}
                        </h4>
                        <div className="text-[#6C8B3C] font-extrabold text-[10px] uppercase mb-2">
                          {service.bnTitle}
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Info Card Box */}
                <div className="p-5 rounded-2xl bg-[#6C8B3C]/5 border border-[#6C8B3C]/10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2 text-[#3A1D4D]">
                    <ShieldCheck size={20} className="text-[#6C8B3C]" />
                    <span className="font-extrabold text-xs uppercase tracking-wider">
                      Turnkey Supervision
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed font-semibold">
                    We manage engineering, structural clearances, load validations, real-time testing, and lifetime SLA provisions globally.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Standards checklist line */}
            <div className="border-t border-slate-100 pt-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                Strict Quality Standards & Accreditations
              </span>
              <div className="flex flex-wrap gap-3">
                {selectedCompany.standards.map((std, index) => (
                  <span 
                    key={index} 
                    className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full text-slate-600 text-[10px] font-black tracking-wider uppercase"
                  >
                    <Star size={10} className="text-amber-500 fill-amber-500" />
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Liaison segment - Beautiful custom badge section */}
        <div className="mt-16 bg-gradient-to-r from-[#3A1D4D] to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-black mb-3">
              Need custom modifications or a structural site analysis?
            </h3>
            <p className="text-white/70 text-sm font-semibold">
              Our engineering team serves corporate liaisons and project developers directly. Reach out through our main hotline to coordinate dynamic single-line designs.
            </p>
          </div>
          <a
            href="https://wa.me/8801317462251"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#6C8B3C] hover:bg-white hover:text-[#3A1D4D] text-white text-xs font-black uppercase tracking-widest rounded-2xl transition-all duration-300 shadow-lg text-center whitespace-nowrap"
          >
            Connect With Project Director
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
