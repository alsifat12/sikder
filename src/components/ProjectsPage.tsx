import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Zap, ArrowUpCircle, Sprout, Search, MapPin, 
  Layers, BadgeAlert, Award, ArrowRight, ExternalLink, Calendar, Users
} from 'lucide-react';

// Import realistic assets for projects
import imageElectricCompleted from '../assets/images/sikder_electric_completed_tower_1779388712742.png';
import imageElectricOngoing from '../assets/images/sikder_electric_ongoing_grid_1779388691514.png';
import imageElectricUpcoming from '../assets/images/sikder_electric_upcoming_grid_1779388733006.png';
import imageBuildingCompleted from '../assets/images/sky_atrium_banani_1781207702488.jpg';
import imageBuildingOngoing from '../assets/images/sig_heights_dhaka_1781207685428.jpg';
import imageBuildingUpcoming from '../assets/images/green_solis_purbachal_1781207718731.jpg';
import imageElevatorPassenger from '../assets/images/passenger_lift_interior_1779390401344.png';
import imageElevatorFreight from '../assets/images/freight_cargo_elevator_1779390416596.png';
import imageElevatorEscalator from '../assets/images/modern_atrium_escalator_1779390436277.png';
import imageAgroMain from '../assets/images/sikder_agro_farm_main_1779479304904.png';
import imageAgroGreenhouse from '../assets/images/agro_crops_greenhouse_1779479324809.png';
import imageAgroDairy from '../assets/images/agro_dairy_automated_1779479343947.png';

interface Project {
  id: string;
  title: string;
  bnTitle: string;
  companyId: 'electric' | 'elevator' | 'building' | 'agro';
  companyName: string;
  client: string;
  location: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  bnStatus: string;
  year: string;
  image: string;
  highlightMetric: string;
  highlightLabel: string;
  description: string;
  bnDescription: string;
  specifications: string[];
}

const projectsData: Project[] = [
  {
    id: 'proj-electric-1',
    title: 'Fully Automated Layer Farm Feeding & Drinking System Setups',
    bnTitle: 'সম্পূর্ণ অটোমেটিক লেয়ার ফার্ম ফিডিং ও ওয়াটার সিস্টেম',
    companyId: 'electric',
    companyName: 'Sikder Electric & Engineering',
    client: 'Golden Egg Poultry Farms Ltd.',
    location: 'Gazipur Sadar, Gazipur',
    status: 'Completed',
    bnStatus: 'সম্পন্ন',
    year: '2023',
    image: imageElectricCompleted,
    highlightMetric: '150,000 birds',
    highlightLabel: 'Daily bird capacity',
    description: 'Turnkey engineering, supply, testing, and successful commissioning of high-flow 360-degree nipple water lines, auto-charging feed silo augers, and negative pressure climate pads.',
    bnDescription: 'গোল্ডেন এগ পোল্ট্রি ফার্মের জন্য ১.৫ লাখ পাখির সম্পূর্ণ স্বয়ংক্রিয় ফিডিং ও ৩৬০ ডিগ্রি নিপল ড্রিংকার পাইপলাইন সফলভাবে স্থাপন ও সচলকরণ।',
    specifications: ['High-flow 360° Nipple Drinkers', 'Autonomous Feed Silo Auger Charging', 'Multi-zone Climate Pad Systems']
  },
  {
    id: 'proj-electric-2',
    title: 'Environment-Controlled Broiler Shed Ventilation Grid',
    bnTitle: 'ক্লাইমেট কন্ট্রোলড ব্রয়লার শেড ভেন্টিলেশন সিস্টেম',
    companyId: 'electric',
    companyName: 'Sikder Electric & Engineering',
    client: 'Kazi Agri-Industrial Estates',
    location: 'Sreepur, Gazipur',
    status: 'Ongoing',
    bnStatus: 'চলমান',
    year: '2025',
    image: imageElectricOngoing,
    highlightMetric: '12 x 50" Fans',
    highlightLabel: 'Negative Pressure',
    description: 'Installing a high negative-pressure exhaust fan layout combined with smart temperature-humidity controllers to maintain precise environment limits for parent stock chickens.',
    bnDescription: 'কাজী এগ্রি-ইন্ডাস্ট্রিয়াল শেডের তাপমাত্রা হ্রাস ও আর্দ্রতা নিয়ন্ত্রণে ১২টি বড় আকারের ৫০" এক্সহস্ট ফ্যান এবং কুলিং প্যাড লুপের সমন্বয়ে ক্লাইমেট গ্রিড স্থাপনের কাজ চলমান।',
    specifications: ['IP55 Copper wound heavy motors', 'Thick Cellulose Evaporative Coolers', 'Micro-step Temperature Sensors']
  },
  {
    id: 'proj-electric-3',
    title: 'Proportional Medication & Purified Drinking Line Grid',
    bnTitle: 'নিখুঁত মেডিসিন ও স্বয়ংক্রিয় ওয়াটার ফিল্ট্রেশন গ্রিড',
    companyId: 'electric',
    companyName: 'Sikder Electric & Engineering',
    client: 'Sikder Agro Hatchery Hub',
    location: 'Trishal, Mymensingh',
    status: 'Upcoming',
    bnStatus: 'আসন্ন',
    year: '2026',
    image: imageElectricUpcoming,
    highlightMetric: 'Dosatron 2%',
    highlightLabel: 'Accurate Dosing',
    description: 'Upcoming engineering pipeline installing non-electric proportional medication dispensers and automated backwash water regulators to feed vaccine-secure inputs across new broiler buildings.',
    bnDescription: 'সিকদার এগ্রো হ্যাচারি প্রজেক্টে পানির লাইনে স্বয়ংক্রিয় টিকা ও পুষ্টির জন্য ডোসাস্ট্রন ওয়াটার মেডিসিনেটর ও অটোমেটিক ফিল্ট্রেশন যুক্ত করার কাজ আসন্ন।',
    specifications: ['Water pressure driven proportional pumps', 'Automatic backwash sand filters', 'Sanitary chemical-proof seals']
  },
  {
    id: 'proj-elevator-1',
    title: '15-Passenger Luxury MRL Lift Setup',
    bnTitle: '১৫-জন ধারণক্ষমতা সম্পন্ন ইউরোপীয় এমআরএল লিফট',
    companyId: 'elevator',
    companyName: 'Sikder Elevator Solution',
    client: 'Banani Commercial Plaza Atrium',
    location: 'Banani, Dhaka',
    status: 'Completed',
    bnStatus: 'সম্পন্ন',
    year: '2024',
    image: imageElevatorPassenger,
    highlightMetric: '1.75 m/s',
    highlightLabel: 'High Speed Safety',
    description: 'Successfully installed premium European Machine Room-Less (MRL) gearless lifts integrated with luxury titanium-gold cabins, VVVF driving control, and automatic rescue mechanisms.',
    bnDescription: 'বনানী কমার্শিয়াল প্লাজায় বিলাসবহুল টাইটানিয়াম-গোল্ড ক্যাবিন, উন্নত মেটাল ভিভিভিএফ কন্ট্রোল এবং বিদ্যুৎ বিভ্রাটে স্বয়ংক্রিয় এআরডি ফিচার যুক্ত আধুনিক এমআরএল লিফট সফলভাবে হস্তান্তর।',
    specifications: ['1050 Kg capacity', 'Sleek touch COP indicator', 'Regenerative environmental drive']
  },
  {
    id: 'proj-elevator-2',
    title: '5,000kg Heavy Duty Freight Elevator',
    bnTitle: '৫০০০ কেজি ক্ষমতাসম্পন্ন কার্গো লিফট',
    companyId: 'elevator',
    companyName: 'Sikder Elevator Solution',
    client: 'Style Wear Washing & Textiles',
    location: 'Uttar Khan Factory Zone, Dhaka',
    status: 'Completed',
    bnStatus: 'সম্পন্ন',
    year: '2023',
    image: imageElevatorFreight,
    highlightMetric: '5.0 Tons',
    highlightLabel: 'Heavy Duty Cargo',
    description: 'Heavy architectural-grade hydraulic passenger and cargo lift execution, designed with reinforced steel checkered floors and shock protective buffers to carry wet fabric loads safely.',
    bnDescription: 'স্টাইল ওয়্যার ওয়াশিং কারখানার জন্য ৫ টন হেভি-ডিউটি ফ্রেইট কার্গো লিফট স্থাপন। এতে রয়েছে শক্ত চেকার্ড প্লেট ফ্লোরিং এবং শক্তিশালী শক প্রটেক্টর।' ,
    specifications: ['Reinforced steel floor', 'Multi-Door loading paths', 'Special shock absorbing bumpers']
  },
  {
    id: 'proj-elevator-3',
    title: 'VVVF Variable Atrium Escalators',
    bnTitle: 'স্মার্ট ভিভিভিএফ এস্কেলেটর প্যাক',
    companyId: 'elevator',
    companyName: 'Sikder Elevator Solution',
    client: 'Grand Shopping Arcade complex',
    location: 'Sylhet Atrium Main, Sylhet',
    status: 'Ongoing',
    bnStatus: 'চলমান',
    year: '2025',
    image: imageElevatorEscalator,
    highlightMetric: '35 Degree',
    highlightLabel: 'Inclined Speed Track',
    description: 'Ongoing execution of smart speed-regulating escalators. These systems automatically slow down to 0.1 m/s when no walking passengers are detected, cutting idle electricity bills.',
    bnDescription: 'চলমান আধুনিক ভ্যালু-ড্রাইভ এস্কেলেটর প্রজেক্ট। এতে অপটিক্যাল প্যাসেঞ্জার সেন্সর রয়েছে যা যাত্রী শূন্য অবস্থায় গতি কমিয়ে ৪৫% বিদ্যুৎ সাশ্রয় করে।',
    specifications: ['Dynamic safety step guides', 'Yellow warning line glow', 'Automatic optical run sensors']
  },
  {
    id: 'proj-building-1',
    title: 'Pre-Engineered Steel Factory Complex',
    bnTitle: 'প্রি-ইঞ্জিনিয়ার্ড স্টিল মাল্টি-শেড ফ্যাক্টরি',
    companyId: 'building',
    companyName: 'Sikder Building Tech & Constructions',
    client: 'Tamanna Sweater Ltd. Complex',
    location: 'MC Bazar, Sreepur, Gazipur',
    status: 'Completed',
    bnStatus: 'সম্পন্ন',
    year: '2022',
    image: imageBuildingCompleted,
    highlightMetric: '85,000 SFT',
    highlightLabel: 'Total Floor Area',
    description: 'Completed civil planning and steel erection of high-elevation double-span pre-engineered steel warehouses designed to withstand extreme wind velocities and dead factory machinery loads.',
    bnDescription: 'গাজীপুরের শ্রীপুরে তামান্না সোয়েটার কারখানার জন্য ৮৫,০০০ বর্গফুটের ডাবল-স্প্যান প্রি-ইঞ্জিনিয়ার্ড টেকসই স্টিল মেটাল মাল্টি-শেড সফলভাবে নির্মাণ ও হস্তান্তর।',
    specifications: ['High Tensile ASTM A572 steel', 'Clear Span no-pillar room', 'Zinc AL-alloy roof cladding']
  },
  {
    id: 'proj-building-2',
    title: 'Reinforced Deep Foundation Boring',
    bnTitle: 'হেভি ক্রেন ও ডিপ পাইল পাইলিং প্রজেক্ট',
    companyId: 'building',
    companyName: 'Sikder Building Tech & Constructions',
    client: 'Radisson Apparels expansion Unit 3',
    location: 'Tongi Industrial Area, Gazipur',
    status: 'Ongoing',
    bnStatus: 'চলমান',
    year: '2025',
    image: imageBuildingOngoing,
    highlightMetric: '120 Feet',
    highlightLabel: 'Bored Deep Piles',
    description: 'Deep bored piling operations utilizing automated heavy cranes and hydraulic rigs. Providing reinforced safety factors in deep clay layers to fully accommodate a 12-story RMG building expansion.',
    bnDescription: 'র‌্যাডিসন অ্যাপারেলস এক্সপেনশন ইউনিটের জন্য ১২০ ফুট গভীর হেভি ডিপ বোরিং পাইলিং প্রজেক্টের কাজ সফলভাবে চলমান রয়েছে।',
    specifications: ['Hydraulic rotary drills', 'High strength concrete mix', 'Sonic logging test compliance']
  },
  {
    id: 'proj-building-3',
    title: 'Commercial HQ Structural Steel Atrium',
    bnTitle: 'কমার্শিয়াল হেডকোয়ার্টার স্টিল ফ্রেম টাওয়ার',
    companyId: 'building',
    companyName: 'Sikder Building Tech & Constructions',
    client: 'Sikder Majestic Center Corporate HUB',
    location: 'Uttara Elite Zone, Dhaka',
    status: 'Upcoming',
    bnStatus: 'আসন্ন',
    year: '2026',
    image: imageBuildingUpcoming,
    highlightMetric: '16 Floors',
    highlightLabel: 'Super Structure HQ',
    description: 'Masterplanned upcoming structure highlighting dual-core shear concrete walls interconnected with high elasticity structural steel trusses for perfect seismic damping resilience.',
    bnDescription: 'আসন্ন ১৬ তলা বিশিষ্ট বাণিজ্যিক সুপার-স্ট্রাকচার প্রজেক্ট। এতে রয়েছে সিসমিক ড্যাম্পিং প্রটেকশন এবং আধুনিক আর্কিটেকচারাল গ্লাস গ্লেজিং ফাসাদ।',
    specifications: ['BNBC 2020 Compliance', 'Seismic Zone 2 protective load factor', 'Full curtain glass perimeter']
  },
  {
    id: 'proj-agro-1',
    title: 'High-Density Oxygen Aquaculture Loop',
    bnTitle: 'উন্নত মৎস্য প্রক্রিয়াজাতকরণ হ্যাচারি প্রজেক্ট',
    companyId: 'agro',
    companyName: 'Sikder Agro Farm Limited',
    client: 'National Breeder Hatcheries Complex',
    location: 'Uttara Breeding Center, Dhaka',
    status: 'Completed',
    bnStatus: 'সম্পন্ন',
    year: '2024',
    image: imageAgroMain,
    highlightMetric: '2.5mn Fry/Yr',
    highlightLabel: 'Hatchery Yield',
    description: 'Constructed an ecological aquaculture system featuring advanced bio-filters, high-density oxygen diffuser pumps, and temperature regulators to breed high-yield sweet-water fry.',
    bnDescription: 'ন্যাশনাল হ্যাচারি প্রজেক্টের জন্য বছরে ২৫ লক্ষ রেণু মাছ উৎপাদনে সক্ষম ইন্টেলিজেন্ট অক্সিজেন রিসার্কুলেশন লুপ ও বায়ো-ফিল্ট্রেশন হ্যাচারি সিস্টেম সফল স্থাপন।',
    specifications: ['Automated DO sensor arrays', 'Dynamic UV sterilization lines', 'Intensive nursery backup pools']
  },
  {
    id: 'proj-agro-2',
    title: 'Automated Cow Care & Milking Parlor',
    bnTitle: 'অটোমেটেড ডেইরি ও মিল্কিং পার্লার সল্যুশন',
    companyId: 'agro',
    companyName: 'Sikder Agro Farm Limited',
    client: 'Sikder Dairy & Livestock Complex',
    location: 'Agro Farm Hub, Gazipur',
    status: 'Completed',
    bnStatus: 'সম্পন্ন',
    year: '2023',
    image: imageAgroDairy,
    highlightMetric: '12-Point Rotary',
    highlightLabel: 'Milking Parlor',
    description: 'Operational milking parlor highlighting dynamic food-grade vacuum pumps, active electronic health RFID scanners, and zero-contamination central milk storage storage chilling tanks.',
    bnDescription: 'গাজীপুর এগ্রো ফার্ম হাবে ১২-পয়েন্ট বিশিষ্ট ভ্যাকুয়াম চালিত হাইজেনিক ডেইরি মিল্কিং পার্লার এবং কুলিং স্টোরেজ ট্যাংক সফলভাবে রানিং রয়েছে।',
    specifications: ['RFID identification collars', 'Integrated chilling storage (4°C)', 'Pneumatic secure gate traps']
  },
  {
    id: 'proj-agro-3',
    title: 'Precision Micro-Irrigation Greenhouse',
    bnTitle: 'ড্রিপ ইরিগেশন ও গ্রিনহাউস টেক',
    companyId: 'agro',
    companyName: 'Sikder Agro Farm Limited',
    client: 'Sikder High-Yield Seed Lab',
    location: 'Agro Breeding Facility, Gazipur',
    status: 'Ongoing',
    bnStatus: 'চলমান',
    year: '2025',
    image: imageAgroGreenhouse,
    highlightMetric: '5.0 Acres',
    highlightLabel: 'Poly-Greenhouse Area',
    description: 'Ongoing commissioning of climate-controlled polyhouse highlighting computer-activated drip irrigation (fertigation) and mist blowers to produce chemical-free high-value ornamental crops.',
    bnDescription: 'প্রিসিশন এগ্রিটেক হাবে কম্পিউটারের সাহায্যে জল ও পুষ্টি নিয়ন্ত্রক ড্রিপ ইরিগেশন এবং তাপমাত্রা নিয়ন্ত্রক শেড যুক্ত পলি-গ্রিনহাউস প্রজেক্টের কাজ চলমান।',
    specifications: ['Automatic fertigation blender', 'High efficiency shading arrays', 'Woven UV-stabilized sheet cover']
  }
];

interface ProjectsPageProps {
  onBack: () => void;
  onCompanyClick: (id: string) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack, onCompanyClick }) => {
  const [filter, setFilter] = useState<'all' | 'electric' | 'elevator' | 'building' | 'agro'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Completed' | 'Ongoing' | 'Upcoming'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filter === 'all' || project.companyId === filter;
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(searchLower) ||
      project.bnTitle.toLowerCase().includes(searchLower) ||
      project.client.toLowerCase().includes(searchLower) ||
      project.location.toLowerCase().includes(searchLower) ||
      project.companyName.toLowerCase().includes(searchLower);

    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-24 font-sans selection:bg-[#6C8B3C] selection:text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Superior Layout Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-8 mb-12">
          <div>
            <span className="text-[10px] font-black text-[#6C8B3C] tracking-[0.4em] uppercase block mb-3 font-sans">
              DELIVERED NATIONWIDE • PROVEN CAPABILITY
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-brand-purple tracking-tight">SIKDER Engineering Portfolios</h1>
            <p className="text-slate-500 font-bold mt-2 text-xs md:text-sm">
              Exploring structural masterpieces, heavy substations, luxury elevators, and agricultural automation benchmarks from our four major entities.
            </p>
          </div>
          <button
            onClick={onBack}
            className="mt-6 md:mt-0 px-6 py-3 bg-[#3A1D4D] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#6C8B3C] transition-all duration-300 shadow-md flex items-center gap-2 max-w-max"
          >
            ← Back to Home
          </button>
        </div>

        {/* Filters Panel - Modern layout grid */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xl mb-10 flex flex-col xl:flex-row gap-6 items-center justify-between">
          
          {/* Category Selector Tabs */}
          <div className="flex flex-wrap gap-2 w-full xl:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === 'all'
                  ? 'bg-[#3A1D4D] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              All Divisions
            </button>
            <button
              onClick={() => setFilter('electric')}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                filter === 'electric'
                  ? 'bg-yellow-500 text-slate-950 shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <Zap size={12} className="fill-current" />
              Electric
            </button>
            <button
              onClick={() => setFilter('elevator')}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                filter === 'elevator'
                  ? 'bg-[#6C8B3C] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <ArrowUpCircle size={12} />
              Elevator
            </button>
            <button
              onClick={() => setFilter('building')}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                filter === 'building'
                  ? 'bg-indigo-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <Building2 size={12} />
              Building Tech
            </button>
            <button
              onClick={() => setFilter('agro')}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                filter === 'agro'
                  ? 'bg-emerald-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <Sprout size={12} />
              Agro Farm
            </button>
          </div>

          {/* Right Filters Area */}
          <div className="flex flex-col md:flex-row gap-4 w-full xl:w-auto items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search Client & Project..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-[#6C8B3C] focus:bg-white transition-all"
              />
              <Search className="absolute left-3.5 top-3 text-slate-400" size={14} />
            </div>

            {/* Status Select Filter */}
            <div className="flex gap-2 items-center">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap hidden sm:inline">
                STATUS:
              </span>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                {(['all', 'Completed', 'Ongoing', 'Upcoming'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${
                      statusFilter === status
                        ? 'bg-white text-slate-800 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count Line */}
        <div className="mb-6 text-slate-400 text-xs font-bold flex items-center justify-between">
          <span>Found {filteredProjects.length} enterprise-grade projects</span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-[#6C8B3C] hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Color map matches branding
              let borderClass = 'border-l-[6px] border-l-[#3A1D4D]';
              let badgeColor = 'bg-slate-100 text-[#3A1D4D]';
              if (project.companyId === 'electric') {
                borderClass = 'border-l-[6px] border-l-yellow-500';
              } else if (project.companyId === 'elevator') {
                borderClass = 'border-l-[6px] border-l-[#6C8B3C]';
              } else if (project.companyId === 'building') {
                borderClass = 'border-l-[6px] border-l-indigo-900';
              } else if (project.companyId === 'agro') {
                borderClass = 'border-l-[6px] border-l-emerald-800';
              }

              // Status badge layout
              let statusBadge = 'bg-emerald-100 text-emerald-800 border-emerald-200';
              if (project.status === 'Ongoing') {
                statusBadge = 'bg-amber-100 text-amber-800 border-amber-200';
              } else if (project.status === 'Upcoming') {
                statusBadge = 'bg-blue-100 text-blue-800 border-blue-200';
              }

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-3xl border border-slate-200/70 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:translate-y-[-4px] ${borderClass}`}
                >
                  {/* Card Main Image Section */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900 shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient filter */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Highly descriptive overlay metric badge */}
                    <div className="absolute right-4 top-4 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/20 flex flex-col items-center">
                      <span className="text-white font-extrabold text-sm tracking-tight leading-none text-center">
                        {project.highlightMetric}
                      </span>
                      <span className="text-white/70 text-[7px] font-black uppercase tracking-widest text-center mt-1 leading-none">
                        {project.highlightLabel}
                      </span>
                    </div>

                    {/* Status badge */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 bg-white/95 px-3 py-1 rounded-xl shadow border border-slate-100">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'Completed' ? 'bg-emerald-500 animate-pulse' :
                        project.status === 'Ongoing' ? 'bg-amber-500 animate-pulse' : 'bg-blue-500'
                      }`} />
                      <span className="text-[8px] font-black text-slate-800 uppercase tracking-widest">
                        {project.bnStatus} • {project.status}
                      </span>
                    </div>

                    {/* Company division identifier */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="text-[8px] font-extrabold tracking-widest text-[#6C8B3C] uppercase block bg-[#3A1D4D] px-2.5 py-1 rounded-md">
                        {project.companyName.replace('Sikder ', '')}
                      </span>
                    </div>
                  </div>

                  {/* Card Content details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Client row */}
                      <div className="flex items-center gap-1 text-slate-400 mb-2">
                        <Users size={12} className="text-[#6C8B3C]" />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest line-clamp-1">
                          Client: {project.client}
                        </span>
                      </div>

                      {/* Main Titles */}
                      <h3 className="text-slate-900 font-extrabold text-base tracking-tight mb-1 group-hover:text-brand-purple">
                        {project.title}
                      </h3>
                      <h4 className="text-[#6C8B3C] font-extrabold text-xs mb-3">
                        {project.bnTitle}
                      </h4>

                      {/* Bullet Description */}
                      <p className="text-slate-500 text-[11px] leading-relaxed font-semibold mb-4 text-justify">
                        {project.description}
                      </p>
                      <p className="text-slate-400 text-[10px] leading-relaxed font-semibold mb-5 italic text-justify border-l-2 border-slate-200 pl-2">
                        {project.bnDescription}
                      </p>

                      {/* Technical Specs tag bullets */}
                      <div className="border-t border-slate-100 pt-4 mb-4">
                        <div className="flex flex-col gap-2">
                          {project.specifications.slice(0, 2).map((spec, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-slate-600">
                              <div className="w-1 h-1 rounded-full bg-[#6C8B3C]" />
                              <span className="text-[10px] font-extrabold uppercase tracking-wide">
                                {spec}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Location & Year footer block */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                      <div className="flex items-center gap-1 text-slate-400">
                        <MapPin size={11} className="text-[#6C8B3C]" />
                        <span className="text-[9px] font-extrabold uppercase tracking-widest line-clamp-1">
                          {project.location}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => onCompanyClick(project.companyId)}
                        className="text-[9px] font-black uppercase tracking-widest text-[#3A1D4D] hover:text-[#6C8B3C] transition-colors flex items-center gap-1"
                      >
                        Details Page
                        <ArrowRight size={10} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State when zero results found */}
        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-3xl p-16 text-center shadow-md border border-slate-200/50">
            <BadgeAlert className="mx-auto text-slate-300 mb-4" size={48} />
            <h3 className="text-slate-700 font-black text-lg">No Matching Projects Found</h3>
            <p className="text-slate-500 text-xs font-semibold max-w-sm mx-auto mt-2">
              Try modifying your search or switches to clear current results and see standard offerings.
            </p>
            <button
              onClick={() => {
                setFilter('all');
                setStatusFilter('all');
                setSearchQuery('');
              }}
              className="mt-6 px-6 py-2.5 bg-[#3A1D4D] text-white text-[10px] font-black uppercase tracking-wider rounded-xl hover:bg-[#6C8B3C] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dynamic Trust Association Section */}
        <div className="mt-16 bg-[#3A1D4D]/5 rounded-[2rem] p-8 border border-[#3A1D4D]/10 text-center">
          <Award className="mx-auto text-[#6C8B3C] mb-3" size={32} />
          <h3 className="text-[#3A1D4D] font-extrabold text-lg md:text-xl tracking-tight mb-2">
            Engineered Under Strict Quality Control Protocols
          </h3>
          <p className="text-slate-500 font-semibold text-xs md:text-sm max-w-2xl mx-auto">
            Each infrastructure, HT/LT substation, luxury passenger lift, or computerized dairy setup complies perfectly with Bangladesh National Building Code (BNBC), BPDB certifications, and ISO guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
