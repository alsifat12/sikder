import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Layers, Building2, Zap, ArrowUpCircle } from 'lucide-react';

// Use same design assets from page
import imageElectricCompleted from '../assets/images/sikder_electric_completed_tower_1779388712742.png';
import imageBuildingCompleted from '../assets/images/sky_atrium_banani_1781207702488.jpg';
import imageElevatorPassenger from '../assets/images/passenger_lift_interior_1779390401344.png';

interface SliderProject {
  id: string;
  title: string;
  bnTitle: string;
  companyName: string;
  category: 'electric' | 'elevator' | 'building';
  image: string;
  metric: string;
  metricLabel: string;
  description: string;
  bnDescription: string;
  linkText: string;
}

const featuredProjects: SliderProject[] = [
  {
    id: 'slide-1',
    title: 'Pre-Engineered Steel Factory Complex',
    bnTitle: 'প্রি-ইঞ্জিনিয়ার্ড স্টিল মাল্টি-শেড ফ্যাক্টরি',
    companyName: 'SIKDER Building Tech',
    category: 'building',
    image: imageBuildingCompleted,
    metric: '85,000 SFT',
    metricLabel: 'Total Floor Area',
    description: 'Completed civil planning and steel erection of high-elevation double-span pre-engineered steel warehouses designed to withstand extreme wind velocities and massive machinery.',
    bnDescription: 'তামান্না সোয়েটার কারখানার জন্য ৮৫,০০০ বর্গফুটের ডাবল-স্প্যান প্রি-ইঞ্জিনিয়ার্ড টেকসই স্টিল মেটাল মাল্টি-শেড সফলভাবে নির্মাণ ও হস্তান্তর।',
    linkText: 'Building tech Portfolio'
  },
  {
    id: 'slide-2',
    title: 'High-Tension 33/11KV Substation Setup',
    bnTitle: '৩৩/১১ কেভি সাবস্টেশন গ্রিড সল্যুশন',
    companyName: 'SIKDER Electric & Eng.',
    category: 'electric',
    image: imageElectricCompleted,
    metric: '33/11 KV',
    metricLabel: 'Power Capacity',
    description: 'Turnkey engineering, supply, testing, and successful commissioning of a 33KV/11KV custom substation equipped with HT Vacuum Circuit Breakers (VCBs) and smart metering grids.',
    bnDescription: 'অত্যাধুনিক ভ্যাকুয়াম সার্কিট ব্রেকার, স্মার্ট মিটারিং সিস্টেম এবং ১৫০০ কেভিএ ট্রান্সফরমার সহ সম্পূর্ণ সাবস্টেশন গ্রিড স্থাপন।',
    linkText: 'Electrical Engineering'
  },
  {
    id: 'slide-3',
    title: '15-Passenger Luxury MRL Lift Setup',
    bnTitle: '১৫-জন ইউরোপীয় প্রিমিয়াম এমআরএল লিফট',
    companyName: 'SIKDER Elevator Solution',
    category: 'elevator',
    image: imageElevatorPassenger,
    metric: '1.75 m/s',
    metricLabel: 'High Speed Safety',
    description: 'Successfully installed premium European Machine Room-Less (MRL) gearless lifts integrated with luxury titanium-gold cabins, smart microchips, and automatic rescue mechanisms.',
    bnDescription: 'বিলাসবহুল টাইটানিয়াম-গোল্ড ক্যাবিন, উন্নত মেটাল ভিভিভিএফ কন্ট্রোল এবং বিদ্যুৎ বিভ্রাটে স্বয়ংক্রিয় এআরডি ফিচার যুক্ত আধুনিক এমআরএল লিফট।',
    linkText: 'Elevator Portfolio'
  }
];

interface FeaturedProjectsCarouselProps {
  onExploreProject: (category: string) => void;
}

const FeaturedProjectsCarousel: React.FC<FeaturedProjectsCarouselProps> = ({ onExploreProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  // Icon and border helpers
  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'electric':
        return { bg: 'bg-yellow-500', text: 'text-yellow-500', hoverBg: 'hover:bg-yellow-500', icon: Zap };
      case 'elevator':
        return { bg: 'bg-[#6C8B3C]', text: 'text-[#6C8B3C]', hoverBg: 'hover:bg-[#6C8B3C]', icon: ArrowUpCircle };
      default:
        return { bg: 'bg-indigo-900', text: 'text-indigo-900', hoverBg: 'hover:bg-indigo-900', icon: Building2 };
    }
  };

  const activeProject = featuredProjects[currentIndex];
  const theme = getCategoryTheme(activeProject.category);
  const CategoryIcon = theme.icon;

  const slideVariants = {
    initial: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 300 : -300,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeIn' }
    })
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-black text-[#6C8B3C] tracking-[0.4em] uppercase block mb-3">
            FLAGSHIP ARCHITECTURAL SHOWCASE
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#3A1D4D] tracking-tight leading-none mb-4">
            Featured <span className="text-[#6C8B3C]">Projects</span>
          </h2>
          <p className="text-slate-500 font-semibold text-xs md:text-sm">
            Swipe or loop through our custom heavy construction and high-grade utility grids completed to immaculate safety standards.
          </p>
        </div>

        {/* Carousel Framework */}
        <div className="relative bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl aspect-[16/10] md:aspect-[16/7] w-full border border-slate-900 select-none">
          
          {/* Active Image Background with Smooth AnimatePresence */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.img
                key={activeProject.id}
                src={activeProject.image}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
          </div>

          {/* Interactive Card Details Overlaid */}
          <div className="absolute inset-y-0 left-0 z-20 flex flex-col justify-center px-8 md:px-20 max-w-2xl select-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 md:space-y-6"
              >
                {/* Metric Overlay Bubble */}
                <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/25">
                  <CategoryIcon size={12} className={theme.text} />
                  <span className="text-white text-[9px] font-black uppercase tracking-widest leading-none">
                    {activeProject.companyName}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-white font-extrabold text-2xl md:text-4xl tracking-tight leading-none leading-tight font-sans">
                    {activeProject.title}
                  </h3>
                  <h4 className="text-[#6C8B3C] font-extrabold text-xs md:text-sm">
                    {activeProject.bnTitle}
                  </h4>
                </div>

                <div className="space-y-2">
                  <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed">
                    {activeProject.description}
                  </p>
                  <p className="text-white/40 text-[11px] md:text-xs font-semibold italic border-l border-white/30 pl-3">
                    {activeProject.bnDescription}
                  </p>
                </div>

                {/* Big Metric Box */}
                <div className="inline-block bg-white/5 border border-white/15 px-5 py-3 rounded-2xl">
                  <div className="text-xl md:text-2xl font-black text-[#6C8B3C] leading-none mb-1">
                    {activeProject.metric}
                  </div>
                  <div className="text-[7px] font-black text-white/50 tracking-widest uppercase leading-none">
                    {activeProject.metricLabel}
                  </div>
                </div>

                {/* CTA Action */}
                <div>
                  <button
                    onClick={() => onExploreProject(activeProject.category)}
                    className="inline-flex items-center gap-2 bg-[#6C8B3C] text-white hover:bg-white hover:text-[#3A1D4D] text-[9px] font-black tracking-widest uppercase px-6 py-3.5 rounded-xl shadow-lg transition-all"
                  >
                    {activeProject.linkText} <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Arrow Controls */}
          <div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 z-30 flex gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md text-white hover:bg-[#6C8B3C] hover:border-[#6C8B3C] transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md text-white hover:bg-[#6C8B3C] hover:border-[#6C8B3C] transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {featuredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 'right' : 'left');
                  setCurrentIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-[#6C8B3C]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsCarousel;
