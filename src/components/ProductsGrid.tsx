import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  ArrowUpCircle, 
  Building2, 
  Sprout, 
  Layers, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Eye
} from 'lucide-react';

// Step 1: Electric & Engineering Imports
import electricPanelImg from '../assets/images/electrical_engineering_panel_1779211512318.png';
import electricTowerImg from '../assets/images/sikder_electric_completed_tower_1779388712742.png';
import electricGridImg from '../assets/images/sikder_electric_ongoing_grid_1779388691514.png';
import generatorCanopyImg from '../assets/images/sikder_generator_canopy_1779729681167.png';
import silentGeneratorImg from '../assets/images/regenerated_image_1780517238549.png';
import autoPoultryImg from '../assets/images/regenerated_image_1780517612842.png';
import coolingPadsImg from '../assets/images/regenerated_image_1781203402977.png';
import coolingFanImg from '../assets/images/regenerated_image_1781202992002.jpg';
import coolingPadsOriginalImg from '../assets/images/cooling_pads_1781199404889.jpg';

// Step 2: Elevator Solution Imports
import passengerLiftImg from '../assets/images/passenger_lift_interior_1779390401344.png';
import villaLiftImg from '../assets/images/villa_home_elevator_1779390382951.png';
import freightLiftImg from '../assets/images/freight_cargo_elevator_1779390416596.png';
import escalatorImg from '../assets/images/modern_atrium_escalator_1779390436277.png';
import baseElevatorImg from '../assets/images/elevator_modern_interior_1779211494040.png';

// Step 3: Building Technology Imports
import completedTowerImg from '../assets/images/sikder_completed_tower_1779389320091.png';
import steelTowerImg from '../assets/images/bangladesh_steel_structure_1781374174910.jpg';
import modernTechImg from '../assets/images/construction_modern_technology_1779211527663.png';
import gulshanAtriumImg from '../assets/images/gulshan_atrium_real_1781374191161.jpg';
import bananiHighriseImg from '../assets/images/banani_highrise_1779389714098.png';

// Step 4: Agro Farm Imports
import agroFarmMainImg from '../assets/images/regenerated_image_1781373854411.jpg';
import agroCropsImg from '../assets/images/agro_crops_greenhouse_1779479324809.png';
import agroDairyImg from '../assets/images/agro_dairy_automated_1779479343947.png';
import ecoAgriFishFarmImg from '../assets/images/eco_agri_fish_farm_1781212197827.jpg';

interface ProductItem {
  id: string;
  name: string;
  image: string;
  tag: string;
  details: string;
  spec: string;
}

interface WingStep {
  stepNum: string;
  id: string;
  title: string;
  bengaliTitle: string;
  description: string;
  accentClass: string;
  icon: React.ReactNode;
  products: ProductItem[];
}

const stepsData: WingStep[] = [
  {
    stepNum: "01",
    id: "electric",
    title: "Sikder Electric & Engineering",
    bengaliTitle: "সিকদার ইলেক্ট্রিক এন্ড ইঞ্জিনিয়ারিং",
    description: "Premium automated poultry equipment and spare parts, automatic feeding/drinking systems, and computerized climate controls.",
    accentClass: "border-brand-purple text-brand-purple bg-purple-50",
    icon: <Zap size={22} className="text-brand-purple" />,
    products: [
      {
        id: "p1_gen",
        name: "Silent Diesel Generator Support (সাইলেন্ট ডিজেল জেনারেটর সাপোর্ট)",
        image: silentGeneratorImg,
        tag: "POWER GENERATOR",
        details: "আমরা খামারে শতভাগ বিদ্যুৎ নিরাপত্তা নিশ্চিত করতে ৩০ kVA থেকে ৫০০ kVA ক্ষমতার মডার্ন সাইলেন্ট জেনারেটর এবং ক্যানোপি সেটআপ ইনস্টল ও সরবরাহ করি।",
        spec: "30 kVA to 500 kVA Support"
      },
      {
        id: "p1_auto_poultry",
        name: "Fully Automated Poultry Setup (অটোমেটেড পোল্ট্রি খামার সেটআপ)",
        image: autoPoultryImg,
        tag: "POULTRY TURNKEY SETUP",
        details: "সম্পূর্ণ আধুনিক বাণিজ্যিক পোল্ট্রি খামার টার্নকি সলিউশন। এতে সেন্সর কন্ট্রোল ফিড অগার সিস্টেম, সাইলো স্টোরেজ, নিপল ড্রিংকার এবং ভেন্টিলেশন ক্লাইমেট প্যানেল অন্তর্ভুক্ত।",
        spec: "Fully Automated Turnkey Setup"
      },
      {
        id: "p1_1",
        name: "Cooling Pad (Imported from China)",
        image: coolingPadsImg,
        tag: "CLIMATE VENTILATION",
        details: "Sikder Electric & Engineering imports premium-quality Cooling Pads from China and supplies them across Bangladesh. Our Cooling Pads are ideal for poultry farms, greenhouses, dairy farms, and industrial cooling systems, providing efficient cooling, energy savings, and reliable performance. We are committed to delivering quality products and excellent customer service at competitive prices.",
        spec: "150mm High-Density Wet Pads"
      },
      {
        id: "p1_2",
        name: "Cooling Fan for Poultry Farm (Imported from China)",
        image: coolingFanImg,
        tag: "CLIMATE VENTILATION",
        details: "Sikder Electric & Engineering imports and supplies premium-quality Cooling Fans from China across Bangladesh. Our fans provide powerful airflow, efficient ventilation, and reliable temperature control for poultry farms, greenhouses, and industrial applications. We are committed to delivering quality products at competitive prices with dependable customer support.",
        spec: "Heavy Duty Exhaust & Airflow"
      },
      {
        id: "p1_3",
        name: "Tunnel Exhaust Fan & Cooler Set (টানেল এক্সহস্ট ফ্যান ও কুলিং প্যাড)",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
        tag: "CLIMATE VENTILATION",
        details: "৫০ ইঞ্চি স্ট্রং গ্যালভানাইজড এক্সহস্ট ফ্যান এবং অ্যামোনিয়া গ্যাস বের করার সুপরিকল্পিত নিগেটিভ প্রেশার কুলিং প্যাড ভেন্টিলেশন সিস্টেম।",
        spec: "44,000 m³/h air extraction"
      },
      {
        id: "p1_4",
        name: "French Dosatron Water Medicator (ডোসাস্ট্রন ওয়াটার মেডিকেশন পাম্প)",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
        tag: "MEDICATOR & SPARES",
        details: "বিদ্যুৎ ছাড়া শুধুমাত্র পানির চাপে খামারের পানির লাইনে নিখুঁত ঔষধ, ভ্যাকসিন এবং ভিটামিন সংমিশ্রনের অটোমেটিক ডোসাস্ট্রন পাম্প ও খুচরা যন্ত্রাংশ সরবরাহ।",
        spec: "DI16 0.2%-2% dilutes"
      },
      {
        id: "p1_5",
        name: "Plasson Automatic Bell Waterer (প্লাসন ড্রিংকার ও অটোমেটিক স্পেয়ার কিটস)",
        image: "https://images.unsplash.com/photo-1623945391583-e18dd719b33a?auto=format&fit=crop&w=600&q=80",
        tag: "BELL WATERERS",
        details: "লেয়ার ও ব্রিডার খামারের জন্য বিখ্যাত প্লাসন টাইপ বেল ড্রিংকার যা ওয়াটার লেভেল নিখুঁতভাবে সমন্বয়কারী ও ওজনে অত্যন্ত স্থিতিশীল।",
        spec: "380 mm wide drinking bell"
      },
      {
        id: "p1_6",
        name: "Water Pressure Regulator (ডাবল-আউটলেট প্রেসার রেগুলেটর)",
        image: "https://images.unsplash.com/photo-1581093588401-f5c32e68b441?auto=format&fit=crop&w=600&q=80",
        tag: "PRESSURE REGULATION",
        details: "খামারের ও পানির লাইনে সমহারে ওয়াটার প্রেসার বা পানির গতি নিয়ন্ত্রণ করার জন্য স্পেশাল ডাবল-আউটলেট প্রেসার রেগুলেটর গিয়ার।",
        spec: "0.1 to 0.4 bar precise flow"
      },
      {
        id: "p1_7",
        name: "Poultry Interlocking Plastic Slat Floor (প্লাস্টিক স্ল্যাট মেঝে)",
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80",
        tag: "POULTRY FLOORING",
        details: "ব্রিডার, ব্রয়লার ও লেয়ার শেডের জন্য অত্যন্ত টেকসই এবং সহজে পরিষ্কারযোগ্য ইন্টারলকিং পোল্ট্রি প্লাস্টিক স্ল্যাট মেঝের গ্রিড।",
        spec: "1200 x 500 mm flat blocks"
      },
      {
        id: "p1_8",
        name: "Microprocessor Environment Controller Panel (ডিজিটাল ক্লাইমেট প্যানেল)",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
        tag: "CLIMATE CONTROLLER",
        details: "খামারের তাপমাত্রা ও আর্দ্রতা রিডিং নিয়ে সংবেদনশীলভাবে ফ্যান, হিটার এবং কুলিং পাম্প স্বয়ংক্রিয়ভাবে অন/অফ করতে মাইক্রোপ্রসেসর প্যানেল।",
        spec: "8 to 12 configurable relays"
      }
    ]
  },
  {
    stepNum: "02",
    id: "elevator",
    title: "Sikder Elevator Solution",
    bengaliTitle: "সিকদার এলিভেটর সলিউশন",
    description: "Premium passenger lift cabins, quiet home elevators, robust freight lifts, and structural escalators.",
    accentClass: "border-brand-green text-brand-green bg-emerald-50",
    icon: <ArrowUpCircle size={22} className="text-brand-green" />,
    products: [
      {
        id: "p2_1",
        name: "Luxury Passenger Cabin Lift",
        image: passengerLiftImg,
        tag: "PASSENGER LIFT",
        details: "Ultra-quiet traction drive cabins configured with modern touch controls and luxurious panoramic glass views.",
        spec: "V3F Speed Control"
      },
      {
        id: "p2_2",
        name: "Luxury Villa & Mansion Lift",
        image: villaLiftImg,
        tag: "HOME LIFT",
        details: "Low-headroom hydraulic elevators designed to elegantly blend inside premium private homes.",
        spec: "Compact No-Pit Cabin"
      },
      {
        id: "p2_3",
        name: "Heavy Duty Freight Elevator",
        image: freightLiftImg,
        tag: "CARGO / FREIGHT",
        details: "Reinforced structural steel builds designed to lift bulk pallets safely inside industrial plants.",
        spec: "3 Tons to 10 Tons Load"
      },
      {
        id: "p2_4",
        name: "Modern Commercial Escalator",
        image: escalatorImg,
        tag: "ESCALATORS",
        details: "Heavy commercial step systems styled with illuminated tracks suited for large retail complexes.",
        spec: "35-degree slope layout"
      },
      {
        id: "p2_5",
        name: "Atrium Observation Lift",
        image: baseElevatorImg,
        tag: "OBSERVATION LIFT",
        details: "High-speed capsule lifts with shatterproof tempered walls delivering gorgeous aerial sightlines.",
        spec: "1.75m/s high-speed cabin"
      }
    ]
  },
  {
    stepNum: "03",
    id: "building",
    title: "Sikder Building Technology",
    bengaliTitle: "সিকদার বিল্ডিং টেকনোলজি",
    description: "Modern high-rise residential properties, pre-engineered steel structures, and energy-efficient building installations.",
    accentClass: "border-brand-purple text-brand-purple bg-purple-50",
    icon: <Building2 size={22} className="text-brand-purple" />,
    products: [
      {
        id: "p3_1",
        name: "Residential & Commercial Complexes",
        image: completedTowerImg,
        tag: "FINISHED REAL PROPERTY",
        details: "Iconic high-rise structures structured with green spaces, rainwater recycling, and thermal glass layouts.",
        spec: "BNBC Safety Compliant"
      },
      {
        id: "p3_2",
        name: "High-Rise Pre-Engineered Steel",
        image: steelTowerImg,
        tag: "STRUCTURAL FRAME",
        details: "Heavy steel-beam structural frameworks rendering flawless vertical distribution and seismic cushioning.",
        spec: "Earthquake Zone Resistant"
      },
      {
        id: "p3_3",
        name: "Smart Infrastructure Construction",
        image: modernTechImg,
        tag: "CONSTRUCTION SERVICES",
        details: "Advanced structural technology involving insulated panel units, smart utility corridors, and durable fiber foundations.",
        spec: "Eco-Friendly Composting"
      },
      {
        id: "p3_4",
        name: "Gulshan Atrium Corporate Plaza",
        image: gulshanAtriumImg,
        tag: "BUSINESS DISTRICT",
        details: "High-traffic commercial spaces boasting thermal glazed double shields and modern safety access control systems.",
        spec: "Premium Office Spaces"
      },
      {
        id: "p3_5",
        name: "Banani Highrise Luxury Landmark",
        image: bananiHighriseImg,
        tag: "ELITE RESIDENCE",
        details: "Bespoke high-rise development with architectural luxury finishes and panoramic window profiles.",
        spec: "Smart HVAC Integration"
      }
    ]
  },
  {
    stepNum: "04",
    id: "agro",
    title: "Sikder Agro Farm Limited",
    bengaliTitle: "সিকদার এগ্রো ফার্ম লিমিটেড",
    description: "Fully automated computer-controlled organic farming barns, smart crop greenhouses, and hygienic dairy setups.",
    accentClass: "border-brand-green text-brand-green bg-emerald-50",
    icon: <Sprout size={22} className="text-brand-green" />,
    products: [
      {
        id: "p4_1",
        name: "Sikder Agro Farm Limited – Trusted Cattle Farm in Bangladesh",
        image: agroFarmMainImg,
        tag: "CATTLE FARM",
        details: "Sikder Agro Farm Limited is a modern and reliable cattle farm dedicated to producing healthy, high-quality cows through proper nutrition, hygienic management, and professional care. We are committed to providing premium livestock and contributing to sustainable agriculture in Bangladesh.",
        spec: "Hygienic Organic Breed Care"
      },
      {
        id: "p4_2",
        name: "Modern Vegetable Production",
        image: agroCropsImg,
        tag: "CROPS & VEGETABLES",
        details: "At Sikder Agro Farm Limited, we use advanced agricultural technologies to produce fresh, healthy, and high-quality vegetables. Through greenhouse cultivation and controlled growing environments, we ensure year-round production of safe and nutritious vegetables. By utilizing modern irrigation systems, premium seeds, and scientific farming practices, we achieve higher yields while maintaining exceptional quality standards.",
        spec: "Modern Vegetable Production"
      },
      {
        id: "p4_3",
        name: "Fish Farming",
        image: ecoAgriFishFarmImg,
        tag: "FISH FARMING",
        details: "At Sikder Agro Farm Limited, we are committed to sustainable and modern fish farming practices. Using advanced aquaculture techniques, quality fish feed, and proper pond management, we produce healthy and nutritious fish throughout the year. Our focus on water quality, fish health, and environmentally friendly methods ensures high productivity and premium-quality fish for our customers.",
        spec: "Fish Farming"
      },
      {
        id: "p4_4",
        name: "Increased Milk & Meat Production",
        image: agroDairyImg,
        tag: "MILK & MEAT PRODUCTION",
        details: "At Sikder Agro Farm Limited, we focus on enhancing both milk and meat production through modern livestock farming techniques. By providing balanced nutrition, high-quality feed, proper healthcare, and scientific farm management, we ensure the healthy growth and productivity of our cattle. Our commitment is to deliver premium-quality milk and beef while maintaining the highest standards of animal welfare and sustainable farming practices.",
        spec: "Increased Milk & Meat Production"
      }
    ]
  }
];

const ProductsGrid = () => {
  const [activeStepTab, setActiveStepTab] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Filter our steps based on active selected tab
  const displayedSteps = useMemo(() => {
    if (activeStepTab === "all") return stepsData;
    return stepsData.filter(step => step.id === activeStepTab);
  }, [activeStepTab]);

  return (
    <section id="products" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-45 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Editorial Heading */}
        <div className="mb-14 text-center">
          <span className="text-[10px] font-extrabold text-[#6C8B3C] tracking-[0.4em] uppercase block mb-3 font-sans">
            ESTABLISHED 2004 • INDUSTRIAL PRODUCTS SHOWCASE
          </span>
          <h2 className="text-3.5xl md:text-5xl font-black text-[#3A1D4D] tracking-tight leading-none mb-4">
            Our Enterprise Products
          </h2>
          <p className="text-slate-500 font-semibold max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Discover our high-performance equipment and structures crafted across our four industrial wings.
          </p>
          <div className="w-16 h-1.5 bg-[#6C8B3C] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Dynamic 4-Step Navigator Control Panel */}
        <div className="max-w-4xl mx-auto bg-slate-50 p-2.5 rounded-3xl border border-slate-200/40 shadow-sm mb-16 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveStepTab("all")}
            className={`px-5 py-3.5 rounded-2xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeStepTab === "all"
                ? "bg-[#3A1D4D] text-white shadow-xl-purple"
                : "text-slate-500 hover:bg-slate-100 hover:text-[#3A1D4D]"
            }`}
          >
            <Layers size={13} />
            <span>Show All (সবগুলো)</span>
          </button>

          {stepsData.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStepTab(step.id)}
              className={`px-4 py-3.5 rounded-2xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border-2 ${
                activeStepTab === step.id
                  ? "bg-[#3A1D4D] text-white border-transparent shadow-xl-purple"
                  : "bg-white text-slate-600 border-slate-200/60 hover:border-[#3A1D4D] hover:text-[#3A1D4D]"
              }`}
            >
              <span className="text-emerald-600 font-mono text-[9px] mr-1">Step {step.stepNum}</span>
              {step.title.split('Sikder ')[1]}
            </button>
          ))}
        </div>

        {/* Step-by-Step Modern 4-Item Grids */}
        <div className="space-y-16">
          {displayedSteps.map((step) => {
            const firstFourProducts = step.products.slice(0, 4);
            
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-slate-50/50 rounded-[2.5rem] border border-slate-100 p-8 shadow-sm relative overflow-hidden"
              >
                {/* Lane Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-200/50 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-brand-green font-mono text-[9px] font-extrabold uppercase tracking-widest border border-emerald-100">
                          Step {step.stepNum} (ধাপ {step.stepNum})
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-brand-purple tracking-tight mt-1">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-brand-green/80 tracking-wide mt-0.5 Bengali-Text-Font">
                        {step.bengaliTitle}
                      </p>
                    </div>
                  </div>
                  <div className="max-w-md bg-white border border-slate-200/50 rounded-2xl p-4 shadow-sm">
                    <span className="text-[8px] font-black tracking-widest uppercase text-[#6C8B3C] block mb-1">
                      Brief Overview (সংক্ষিপ্ত বিবরণ):
                    </span>
                    <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Static Grid Layout displaying exactly 4 photos/products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {firstFourProducts.map((product) => (
                    <div
                      key={`${step.id}-product-${product.id}`}
                      onClick={() => setSelectedProduct(product)}
                      className="flex flex-col bg-white overflow-hidden rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-xl hover:border-brand-green/40 transition-all duration-300 group cursor-pointer"
                    >
                      {/* Image Viewer Frame */}
                      <div className="h-44 overflow-hidden relative bg-slate-100">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Top Tag */}
                        <div className="absolute top-4 left-4 bg-brand-purple/95 border border-brand-green/30 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                          <Sparkles size={10} className="text-[#6C8B3C]" />
                          <span className="text-[7.5px] font-extrabold tracking-widest uppercase text-white">
                            {product.tag}
                          </span>
                        </div>

                        {/* Hover Zoom Overlay */}
                        <div className="absolute inset-0 bg-brand-purple/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="p-3 bg-white text-brand-purple rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-all duration-300 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                            <Eye size={14} />
                            <span>View Specs</span>
                          </span>
                        </div>
                      </div>

                      {/* Text / Stats */}
                      <div className="p-5 flex flex-col justify-between h-[130px] border-t border-slate-100">
                        <div>
                          <h4 className="text-xs font-black text-brand-purple uppercase tracking-wider line-clamp-1 group-hover:text-[#6C8B3C] transition-colors font-sans">
                            {product.name}
                          </h4>
                          <p className="text-[9.5px] text-slate-500 font-medium mt-1.5 line-clamp-2 leading-relaxed">
                            {product.details}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between border-t border-slate-100 pt-2 bg-slate-50 -mx-5 -mb-5 px-5 py-2.5 mt-auto">
                          <span className="text-[9px] font-bold text-[#6C8B3C] uppercase tracking-wider font-mono">
                            Specs: {product.spec}
                          </span>
                          <ChevronRight size={14} className="text-[#3A1D4D] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Elegant Detail Overlay Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-brand-purple/60 backdrop-blur-md z-[100] flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 bg-slate-100">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-purple text-white hover:bg-brand-green hover:rotate-90 transition-all flex items-center justify-center text-sm font-bold shadow-xl border border-white/20"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 bg-brand-purple/95 px-4 py-1.5 rounded-full shadow-lg border border-brand-green/30 text-white text-[9px] font-black uppercase tracking-widest">
                {selectedProduct.tag}
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-black text-brand-purple uppercase tracking-tight mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                {selectedProduct.details}
              </p>
              
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/50 mb-6 flex justify-between items-center">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Technical Spec</span>
                <span className="text-brand-purple font-black uppercase tracking-wide text-xs">
                  {selectedProduct.spec}
                </span>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://wa.me/8801317462251" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-brand-purple text-white hover:bg-brand-green transition-all duration-300 text-center font-bold uppercase tracking-wider text-[10px] rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Request Inquiry</span>
                  <ExternalLink size={14} />
                </a>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-4 border border-slate-200 hover:bg-slate-50 transition-colors text-slate-500 font-bold uppercase tracking-wider text-[10px] rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProductsGrid;
