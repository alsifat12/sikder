import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Search, Filter, PhoneCall, Mail, MapPin, 
  CheckCircle, ArrowLeft, ArrowRight, Sparkles, Send,
  Zap, Settings, ShieldAlert, Award
} from 'lucide-react';
import { ProductItem, PRODUCTS_DATA } from './ElectricEngineeringProductsData';
import generatorImg from '../assets/images/regenerated_image_1780517238549.png';
import poultrySetupImg from '../assets/images/regenerated_image_1780517612842.png';

const CAROUSEL_SLIDES = [
  {
    id: "generator",
    tagline: "COMMERCIAL POULTRY FARM INSTALLATION",
    title: "1. Silent Diesel Generator Support",
    badgeLabel: "30 kVA to 500 kVA Support",
    image: generatorImg,
    description: "Ensure 100% continuous power safety for your auto-climate ventilation fan systems, automatic feeding layers, and digital systems. We install premium silent power generators from 30 kVA to 500 kVA to secure your commercial poultry operations against any electrical blackouts or climate hazards."
  },
  {
    id: "poultry-setup",
    tagline: "COMMERCIAL POULTRY FARM INSTALLATION",
    title: "2. Fully Automated Poultry Setup",
    badgeLabel: "Fully Automated Turnkey Setup",
    image: poultrySetupImg,
    description: "Complete modern commercial poultry farm setup. Our turnkey solutions integrate high-payload automated feed auger systems, precision silo storage, hygienic nipple drinkers, roof exhaust climate modules, and unified electric control boards."
  }
];

const SIKDER_OFFICE_COORDINATES = {
  address: "House 12, Road 5, Sector 4, Airport Road, Uttara, Dhaka-1230",
  phone: "+880 1711-456789, +880 1977-987654",
  email: "engineering@sikdercorp.com",
};

const getProductFallbackImage = (category: string, name: string): string => {
  const normName = name.toLowerCase();
  
  if (category === 'poultry_equipment') {
    if (normName.includes('feeder') || normName.includes('pan') || normName.includes('tray') || normName.includes('auger') || normName.includes('hopper')) {
      return 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=600&q=80';
    }
    if (normName.includes('silo')) {
      return 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80';
    }
    if (normName.includes('fan') || normName.includes('ventilation') || normName.includes('cooling') || normName.includes('inlet') || normName.includes('climate')) {
      return 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80';
    }
    if (normName.includes('egg') || normName.includes('hatch') || normName.includes('incubator')) {
      return 'https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=600&q=80';
    }
    if (normName.includes('medic') || normName.includes('pump') || normName.includes('water') || normName.includes('drink') || normName.includes('nipple')) {
      return 'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=600&q=80';
    }
    return 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80';
  } else if (category === 'electrical_equipment') {
    if (normName.includes('breaker') || normName.includes('contactor') || normName.includes('power supply') || normName.includes('smps')) {
      return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80';
    }
    return 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80';
  } else {
    // industrial_spares / default
    return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80';
  }
};

interface ElectricEngineeringPageProps {
  onBack: () => void;
}

const ElectricEngineeringPage: React.FC<ElectricEngineeringPageProps> = ({ onBack }) => {
  const [productSearch, setProductSearch] = useState<string>('');
  const [productFilter, setProductFilter] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  
  // Quick Inquiry / Quote State for selected product
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Auto-rotating timer for slideshow
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Filter 66 products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(p => {
      const query = productSearch.toLowerCase().trim();
      if (!query) {
        return productFilter === 'all' || p.category === productFilter;
      }
      const matchesSearch = 
        p.name.toLowerCase().includes(query) || 
        p.banglaName.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.details.toLowerCase().includes(query);
      
      const matchesCategory = productFilter === 'all' || p.category === productFilter;
      return matchesSearch && matchesCategory;
    });
  }, [productSearch, productFilter]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryEmail('');
      setInquiryMsg('');
      setSelectedProduct(null);
    }, 2800);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-24 pb-32 selection:bg-brand-green selection:text-white">
      {/* Top Banner and Navigation */}
      <div className="container mx-auto px-4 max-w-7xl mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/60 pb-6">
          <button 
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-slate-700 hover:text-brand-purple font-semibold text-xs bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 transition-all hover:scale-103 cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to All Companies
          </button>
        </div>
      </div>

      {/* Prominent Generator and Commercial Poultry Farm Setup Promo Banner */}
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="bg-gradient-to-br from-[#12071A] via-[#1E0B2B] to-[#2E1242] text-white rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/5">
          {/* Visual grid overlay to emphasize technical blueprint layout */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Interactive info for active slide */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="bg-brand-green/15 text-brand-green border border-brand-green/30 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase font-mono">
                  {CAROUSEL_SLIDES[activeSlide].tagline}
                </span>
                <span className="text-[10px] text-purple-300/80 font-mono font-bold">
                  SYSTEM {activeSlide + 1} OF 2
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                    {CAROUSEL_SLIDES[activeSlide].title}
                  </h2>
                  <p className="text-purple-200/95 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-2xl">
                    {CAROUSEL_SLIDES[activeSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controllers */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveSlide(0)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                      activeSlide === 0
                        ? 'bg-brand-green text-[#1E0B2B] font-black scale-103 shadow-md'
                        : 'bg-white/5 text-purple-200 hover:bg-white/10'
                    }`}
                  >
                    1. Silent Generator
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSlide(1)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                      activeSlide === 1
                        ? 'bg-brand-green text-[#1E0B2B] font-black scale-103 shadow-md'
                        : 'bg-white/5 text-purple-200 hover:bg-white/10'
                    }`}
                  >
                    2. Poultry Setup
                  </button>
                </div>

                <div className="flex items-center gap-1.5 ml-auto">
                  <button
                    type="button"
                    onClick={() => setActiveSlide(prev => (prev === 0 ? 1 : 0))}
                    className="p-2 sm:p-2.5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/5 cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSlide(prev => (prev === 0 ? 1 : 0))}
                    className="p-2 sm:p-2.5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/5 cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Slider Photo with Overlay Badge Design */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full aspect-4/3 bg-slate-950/40 border border-white/10 rounded-[2rem] overflow-hidden p-3 flex items-center justify-center shadow-2xl group">
                
                {/* 30 kVA to 500 kVA Prominent Badge on Generator Photo / Commercial tag on Poultry setup */}
                <div className="absolute inset-x-0 bottom-4 px-4 z-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="bg-black/85 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-xl flex items-center gap-3"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse shrink-0" />
                      <div className="space-y-0.5">
                        <span className="text-[10px] md:text-xs font-mono font-black text-brand-green tracking-wider uppercase block">
                          CAPACITY SPECIFICATION
                        </span>
                        <p className="text-sm md:text-base font-black text-white font-mono tracking-tight">
                          {CAROUSEL_SLIDES[activeSlide].badgeLabel}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Main animated Slide Image container */}
                <div className="w-full h-full relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 pointer-events-none" />
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeSlide}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      src={CAROUSEL_SLIDES[activeSlide].image} 
                      alt={CAROUSEL_SLIDES[activeSlide].title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>

              </div>
              
              {/* Slide Pagination Indicator Dots */}
              <div className="flex gap-2.5 mt-4">
                <span 
                  onClick={() => setActiveSlide(0)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-350 cursor-pointer ${
                    activeSlide === 0 ? 'bg-brand-green w-7' : 'bg-white/20 hover:bg-white/40'
                  }`} 
                />
                <span 
                  onClick={() => setActiveSlide(1)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-350 cursor-pointer ${
                    activeSlide === 1 ? 'bg-brand-green w-7' : 'bg-white/20 hover:bg-white/40'
                  }`} 
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Hero Category Title Section */}
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-black text-brand-green uppercase tracking-widest mb-2 block font-mono">
            Sikder Electric &amp; Engineering • Products Index
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
            Modern Poultry Farm <span className="text-brand-purple">Technology &amp; Equipment</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our state-of-the-art and fully automated poultry farming solutions and scientific equipment make dairy and poultry farm management simple, safe, productive, and highly profitable. By integrating automatic feeding, precise hydration drinking, automated lighting controls, and advanced environmental regulation (ventilation and cooling) systems, our ultimate goal is to ensure the absolute best biosecurity and optimal environment for farm livestock.
          </p>
        </div>
      </div>

      {/* Main Layout containing Filters & Product Grid */}
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* 66 Products Grid styled EXACTLY like the user request image */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200">
            <Search size={36} className="text-slate-300 mx-auto mb-4" />
            <h4 className="text-base font-bold text-slate-600 mb-1">No products found</h4>
            <p className="text-slate-400 text-xs font-sans">Adjust your search keywords or choose another category category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((p) => (
              <div 
                key={p.id}
                role="button"
                onClick={() => {
                  setSelectedProduct(p);
                  setInquirySuccess(false);
                }}
                className="group flex flex-col cursor-pointer transition-all duration-300 transform"
              >
                {/* 1. Square Image Container */}
                <div className="relative aspect-square w-full bg-white border border-slate-200 rounded-[1.25rem] overflow-hidden flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-shadow">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-contain rounded-xl p-0.5 group-hover:scale-[1.03] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getProductFallbackImage(p.category, p.name);
                    }}
                  />
                  {/* Category Tag overlay in corner */}
                  <span className="absolute top-2.5 right-2.5 bg-slate-900/10 text-slate-700 text-[8px] font-black uppercase tracking-wider px-2 py-1 rounded">
                    {p.category === 'poultry_equipment' ? 'Poultry' : p.category === 'electrical_equipment' ? 'Electrical' : 'Spares'}
                  </span>
                </div>

                {/* 2. Product Name underneath */}
                <h3 className="text-slate-800 text-[15px] font-bold tracking-tight mt-4 leading-snug group-hover:text-brand-purple transition-colors font-sans min-h-[22px] line-clamp-2">
                  {p.name}
                </h3>
              </div>
            ))}
          </div>
        )}

        {/* Corporate Support / Contact info section at base */}
        <div className="mt-28 bg-[#3A1D4D] rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-12 -translate-y-12 blur-2xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="text-brand-green text-[10px] font-black uppercase tracking-wider font-mono block mb-2">
                Sikder Corporate Liaison Office
              </span>
              <h2 className="text-2xl md:text-3xl font-black leading-tight mb-4">
                Facing Farm Automation or Electrical Complexities?<br />
                Contact Our Corporate Liaison Team Directly
              </h2>
              <p className="text-purple-200 text-sm leading-relaxed mb-6 font-sans">
                Our modern technical support specialists are available 24/7 for urgent delivery of replacement poultry parts, spare items, and substation maintenance.
              </p>
              
              <div className="space-y-3 pt-2 text-xs md:text-sm font-semibold text-purple-100">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-brand-green shrink-0" />
                  <span>{SIKDER_OFFICE_COORDINATES.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall size={16} className="text-brand-green shrink-0" />
                  <span>{SIKDER_OFFICE_COORDINATES.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-green shrink-0" />
                  <span>{SIKDER_OFFICE_COORDINATES.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 md:p-8 rounded-[1.75rem] border border-white/20">
              <h3 className="text-base font-bold mb-4 font-sans text-brand-green uppercase tracking-wider">
                Emergency Callback Request
              </h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Your callback request has been registered. Our technician or commercial executive will call you back shortly.');
              }} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full bg-white/15 border border-white/25 rounded-xl px-4 py-3 text-xs font-semibold text-white placeholder:text-purple-200/65 focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
                <input 
                  type="tel" 
                  placeholder="Active Phone Number" 
                  required
                  className="w-full bg-white/15 border border-white/25 rounded-xl px-4 py-3 text-xs font-semibold text-white placeholder:text-purple-200/65 focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
                <button 
                  type="submit"
                  className="w-full bg-brand-green text-[#3A1D4D] hover:bg-white font-black uppercase text-xs tracking-wider py-3.5 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Submit Callback Request
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>

      {/* DETAILED SPECS MODAL OVERLAY: Shows specs, banglaNames, parameters and descriptions */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 0.99, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            >
              {/* Modal Top Lock Bar */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3A1D4D] font-mono bg-[#3A1D4D]/10 px-3 py-1 rounded">
                  {selectedProduct.categoryLabel}
                </span>
                <button 
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="p-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 rounded-full font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
                >
                  Close <X size={14} />
                </button>
              </div>

              {/* Modal Core Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  
                  {/* Photo Area */}
                  <div className="bg-[#FAF9F6] border border-slate-200 rounded-[1.5rem] p-4 flex items-center justify-center max-h-[360px]">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="max-h-[300px] w-auto object-contain rounded-xl shadow-xs"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = getProductFallbackImage(selectedProduct.category, selectedProduct.name);
                      }}
                    />
                  </div>

                  {/* High level Data block */}
                  <div className="space-y-4">
                    <span className="text-[9px] font-black bg-brand-green/10 text-brand-purple border border-brand-green/20 uppercase tracking-widest px-3 py-1.5 rounded-lg inline-block">
                      {selectedProduct.tag}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight leading-tight">
                      {selectedProduct.name}
                    </h2>
                    {selectedProduct.banglaName && (
                      <p className="text-[#3A1D4D] text-xs font-bold font-sans">
                        Local Reference: {selectedProduct.banglaName}
                      </p>
                    )}
                    <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed font-sans pb-3 border-b border-slate-100">
                      {selectedProduct.shortDescription}
                    </p>
                    
                    {/* Basic specs line */}
                    {selectedProduct.spec && (
                      <div>
                        <span className="text-[10px] font-black uppercase text-slate-400 block mb-1 font-mono">
                          Base Specification Class:
                        </span>
                        <span className="text-slate-700 text-xs md:text-sm font-bold font-sans">
                          {selectedProduct.spec}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Grid breakdown specs features */}
                {((selectedProduct.features && selectedProduct.features.length > 0) || 
                  (selectedProduct.parameters && selectedProduct.parameters.length > 0)) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100 mb-8">
                    
                    {/* Features Bullets List */}
                    {selectedProduct.features && selectedProduct.features.length > 0 && (
                      <div>
                        <h4 className="text-[11px] font-black text-slate-700 uppercase tracking-widest mb-3 font-mono">
                          Key Functional Features:
                        </h4>
                        <ul className="space-y-2.5">
                          {selectedProduct.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-600 leading-relaxed font-semibold">
                              <CheckCircle size={14} className="text-brand-green shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Quantitative Parameters Data Table */}
                    {selectedProduct.parameters && selectedProduct.parameters.length > 0 && (
                      <div>
                        <h4 className="text-[11px] font-black text-slate-700 uppercase tracking-widest mb-3 font-mono">
                          Technical Parameter Matrix:
                        </h4>
                        <div className="border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
                          <table className="w-full text-left text-xs border-collapse">
                            <tbody>
                              {selectedProduct.parameters.map((param, idx) => (
                                <tr key={idx} className="odd:bg-slate-50 border-b border-slate-150 last:border-b-0">
                                  <td className="p-3 font-bold text-slate-600 border-r border-slate-150 w-2/5">
                                    {param.label}
                                  </td>
                                  <td className="p-3 text-slate-700 font-semibold font-sans">
                                    {param.value}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* Full Descriptive Copy */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 mb-8">
                  <h4 className="text-[11px] font-black text-slate-700 uppercase tracking-widest mb-2 font-mono">
                    Product Specifications &amp; Overview:
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {selectedProduct.details}
                  </p>
                </div>

                {/* Instant Quote Form Integration */}
                <div className="border-t border-slate-150 pt-6">
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider mb-4 font-mono">
                    Request Pricing Details &amp; Technical Consultation:
                  </h3>
                  
                  {inquirySuccess ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3">
                      <CheckCircle className="text-emerald-500 shrink-0" size={18} />
                      <div className="text-xs font-bold font-sans">
                        Your inquiry request has been successfully submitted! Our mechanical engineer will email you a quote soon.
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <input 
                        type="text" 
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Your Name *"
                        className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-purple/40 focus:bg-white"
                      />
                      <input 
                        type="tel" 
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="Mobile Phone *"
                        className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-purple/40 focus:bg-white"
                      />
                      <button 
                        type="submit"
                        className="bg-[#3A1D4D] text-white hover:bg-brand-green hover:text-slate-900 font-bold uppercase text-[10px] tracking-wider py-3 rounded-xl transition-all cursor-pointer shadow-md"
                      >
                        Send Technical Inquiry
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ElectricEngineeringPage;
