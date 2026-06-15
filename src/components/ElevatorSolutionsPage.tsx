import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, CheckCircle, ArrowRight, Shield, Settings, Zap, 
  Wrench, Activity, Sparkles, ChevronRight, PhoneCall, Award, Eye,
  Camera, Plus, Trash2, Image as ImageIcon, Search, Filter, Globe,
  MessageSquare, Maximize2, ShieldAlert
} from 'lucide-react';

// Import newly generated premium high-quality elevator images
import passengerImg from '../assets/images/passenger_lift_interior_1779390401344.png';
import villaImg from '../assets/images/villa_home_elevator_1779390382951.png';
import freightImg from '../assets/images/freight_cargo_elevator_1779390416596.png';
import escalatorImg from '../assets/images/modern_atrium_escalator_1779390436277.png';
import baseElevatorImg from '../assets/images/elevator_modern_interior_1779211494040.png';
import sigmaPassengerImg from '../assets/images/regenerated_image_1780080606359.jpg';
import mitsubishiPanoramicImg from '../assets/images/regenerated_image_1780081722625.png';
import fujiMrlImg from '../assets/images/regenerated_image_1780081741244.png';

interface ElevatorCategory {
  id: string;
  title: string;
  banglaTitle: string;
  tagline: string;
  image: string;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  brand?: string;
  origin?: string;
  type?: string; // 'passenger' | 'villa' | 'panoramic' | 'freight' | 'escalator' | 'hospital' | 'car-lift' | 'dumbwaiter'
  capacity?: string;
  speed?: string;
  controlSystem?: string;
  driveMachine?: string;
  doorType?: string;
}

interface ServiceAdvantage {
  id: string;
  title: string;
  banglaTitle: string;
  icon: React.ReactNode;
  description: string;
  points: string[];
  bannerBg: string;
}

const initialElevatorCategories: ElevatorCategory[] = [
  {
    id: 'fuji-passenger',
    title: 'Fuji Intelligent Passenger Elevator',
    banglaTitle: 'ফুজি প্রিমিয়াম প্যাসেঞ্জার লিফট',
    tagline: 'Sleek, High-Speed Vertical Mobility Crafted for Premium Skyscrapers',
    image: passengerImg,
    brand: 'Fuji',
    origin: 'Japan (Tech) / China (JV)',
    type: 'passenger',
    capacity: '450 kg - 1,600 kg (6 to 21 Passengers)',
    speed: '1.0 m/s - 2.5 m/s',
    controlSystem: 'Monarch Integrated Controlling Loop',
    driveMachine: 'Permanent Magnet (PM) Gearless Traction Machine',
    doorType: 'Center-Opening Automatic Sliding Door',
    description: 'Fully optimized with a quiet permanent magnet synchronous gearless traction machine (PM Traction) and custom VVVF variable frequency drives. Delivers a zero-jerk, noise-free ride up to 2.5m/s speed.',
    features: [
      'Dual active group control dispatch (coordinating up to 8 elevators together)',
      'Intelligent fire escape sensor links with RAJUK standard safety triggers',
      'Automatic Rescue Device (ARD) which brings the lift to the nearest floor during power failures'
    ],
    specifications: [
      { label: 'Brand Name', value: 'Fuji' },
      { label: 'Origin Country', value: 'Japan Tech / China Factory' },
      { label: 'Capacity Range', value: '450 kg - 1,600 kg (6 to 21 Passengers)' },
      { label: 'Rated Speed', value: '1.0 m/s - 2.5 m/s' },
      { label: 'Controller System', value: 'Monarch NICE Integrated Controller' },
      { label: 'Drive Type', value: 'VVVF Energy-Saving Energy-Regen Control' },
      { label: 'Cabin Decor', value: 'Mirror Etching Stainless Steel, LED Skylights' }
    ]
  },
  {
    id: 'sigma-passenger',
    title: 'Sigma High-Speed Corporate Lift',
    banglaTitle: 'সিগমা কর্পোরেট প্যাসেঞ্জার লিফট',
    tagline: 'Elite Korean engineering standards geared for heavy corporate traffic',
    image: sigmaPassengerImg,
    brand: 'Sigma',
    origin: 'Korea (Otis Family)',
    type: 'passenger',
    capacity: '630 kg - 1,350 kg (8 to 18 Passengers)',
    speed: '1.5 m/s - 2.5 m/s',
    controlSystem: 'STEP System Integrated Board',
    driveMachine: 'PMS Gearless Traction Drive',
    doorType: 'Center-Opening Automatic Sliding Doors',
    description: 'Constructed by matching Korea’s signature Otis family mechanical parameters. Offers premium travel comfort, intelligent group monitoring, and vibration-isolated structural acoustics.',
    features: [
      'Pre-installed active group dispatch which minimizes hallway waiting times',
      'Advanced load auto-correction prevents over-limit startups smoothly',
      'Double brake safety caliper redundancy certified by EU lift directives'
    ],
    specifications: [
      { label: 'Brand Name', value: 'Sigma' },
      { label: 'Origin Country', value: 'Korea (Otis Brand Quality)' },
      { label: 'Capacity Standard', value: '630 kg - 1,350 kg (8 to 18 Patients / Guests)' },
      { label: 'Max Speed', value: '1.5 m/s - 2.5 m/s high performance' },
      { label: 'Controller Board', value: 'STEP / Monarch Intelligent Controller' },
      { label: 'Machine Spec', value: 'Synchronous PM Gearless' }
    ]
  },
  {
    id: 'otis-villa',
    title: 'Otis Luxury Villa Home Lift',
    banglaTitle: 'ওটিস লাক্সারি ভিলা ও হোম লিফট',
    tagline: 'No-Pit, Minimal Footprint Elevators Curated for Personal Duplexes',
    image: villaImg,
    brand: 'Otis',
    origin: 'USA / Europe',
    type: 'villa',
    capacity: '250 kg - 400 kg (3 to 5 Passengers)',
    speed: '0.4 m/s',
    controlSystem: 'Otis Gen2 Customized controller',
    driveMachine: 'Flat Polyurethane-Coated Steel Belt Drive',
    doorType: 'Automatic Telescopic / Manual Collapsible',
    description: 'A spectacular blend of American/European minimalist design and robust safety. Tailor-made for luxury homes, private duplexes, and existing low-rise structures without deep excavation boundaries.',
    features: [
      'No deep foundation pit required (just 50-100mm or zero pit with ramp)',
      'Runs on standard domestic single-phase power supply (220V)',
      'Extremely silent belt drive which does not transfer vibration to walls'
    ],
    specifications: [
      { label: 'Brand Name', value: 'Otis' },
      { label: 'Origin Country', value: 'USA / Spain (Otis Gen2 Standard)' },
      { label: 'Capacity Range', value: '250 kg - 400 kg (3 to 5 Passengers)' },
      { label: 'Required Overhead', value: 'Only 2,600mm - 3,000mm clear space' },
      { label: 'Standard Power', value: '220V Single-Phase Domestic Supply' },
      { label: 'Cable Drive', value: 'Innovative Polyurethane Coated Steel Belts' }
    ]
  },
  {
    id: 'mitsubishi-panoramic',
    title: 'Mitsubishi Panoramic Glass Capsule Elevator',
    banglaTitle: 'মিৎসুবিশি ক্যাপসুল অবজারভেশন লিফট',
    tagline: 'Visual Masterpieces offering an Immersive 180° Visual Skyview',
    image: mitsubishiPanoramicImg,
    brand: 'Mitsubishi',
    origin: 'Japan',
    type: 'panoramic',
    capacity: '630 kg - 1,000 kg (8 to 13 Passengers)',
    speed: '1.0 m/s - 1.75 m/s',
    controlSystem: 'Mitsubishi Integrated VVVF Controller',
    driveMachine: 'Gearless PM Traction Machine',
    doorType: 'Glass Frame Center-Opening Automatic Door',
    description: 'Designed as a centerpiece of premium corporate lobbies and luxurious hotels. Featuring dynamic customized rounded or flat high-transparency structural safety glass layers framing your architectural views.',
    features: [
      '12mm laminated safety double glass structural framing preventing high-pressure breaks',
      'Exquisite multi-angle exterior accent styling LED layouts active on rotation',
      'Low friction air-guide deflectors inside capsule shielding wind sounds'
    ],
    specifications: [
      { label: 'Brand Name', value: 'Mitsubishi' },
      { label: 'Origin Country', value: 'Japan Core Components' },
      { label: 'Layout Shapes', value: 'Circular, Semi-Circular, Hexagonal, Flat-Face' },
      { label: 'Structural Safety', value: 'High seismic resistance (BNBC Zone-2 approved)' },
      { label: 'Glass Specification', value: 'Shatterproof 12mm Dual Laminated Safety Glass' }
    ]
  },
  {
    id: 'schindler-escalator',
    title: 'Schindler Commercial Escalator Line',
    banglaTitle: 'শিন্ডলার হেভি-ডিউটি এস্কেলেটর',
    tagline: 'Continuous, Low-Power Transit for High-Traffic Public Spaces',
    image: escalatorImg,
    brand: 'Schindler',
    origin: 'Switzerland / Germany',
    type: 'escalator',
    capacity: '9,000 Passengers/Hour',
    speed: '0.5 m/s',
    controlSystem: 'Schindler Eco Standby Master controller',
    driveMachine: 'High-efficiency geared helical step drive',
    doorType: 'Continuous safety steps',
    description: 'Modern indoor/outdoor solutions for shopping arenas, commercial markets, and terminal zones. Fitted with infrared sensor arrays that slow steps to energy-saving standby when passengers are absent.',
    features: [
      'Automatic eco startup sensor loops (infrared radar triggers) saving up to 40% fuel/power',
      'Handrail sync drive protection (stops instantly if handrail slips or lags)',
      'Under-step warning lights and yellow anti-slip borders standard'
    ],
    specifications: [
      { label: 'Brand Name', value: 'Schindler' },
      { label: 'Origin Country', value: 'Switzerland / Germany' },
      { label: 'Angle Standard', value: '30 degree / 35 degree inclination layouts' },
      { label: 'Step Widths', value: '600mm, 800mm, 1000mm standard spaces' },
      { label: 'Operational Mode', value: 'Smart Radar (Auto-Slow standby on empty)' }
    ]
  },
  {
    id: 'fuji-hospital',
    title: 'Fuji Bed & Stretcher Hospital Elevator',
    banglaTitle: 'ফুজি নির্ভরযোগ্য স্ট্রেচার ও হসপিটাল লিফট',
    tagline: 'Smooth, germ-free medical transport cabs fitted with broad sliding doors',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    brand: 'Fuji',
    origin: 'Japan Tech / China',
    type: 'hospital',
    capacity: '1,600 kg (Stretcher Bed Layout)',
    speed: '1.0 m/s',
    controlSystem: 'Fuji Integrated Hospital Priority Logic',
    driveMachine: 'PM Synchronous Gearless Machine',
    doorType: 'Side-Opening Telescopic / Center-Opening Wide Door',
    description: 'Our hospital stretcher lifts offer emergency call-override, dual control panels, high accuracy millimetric leveling, and anti-friction bump guards for a smooth patient ride.',
    features: [
      'Stretcher priority call override options for express emergencies (skips secondary calls)',
      'Germ-resistant anti-bacterial stainless steel mirror cabin layouts standard',
      'Direct call-links with intensive care emergency switchboards'
    ],
    specifications: [
      { label: 'Brand Name', value: 'Fuji' },
      { label: 'Origin Country', value: 'Japan Tech (Fuji JV)' },
      { label: 'Capacity Standard', value: '1600kg standard stretcher depth configuration' },
      { label: 'Leveling Margin', value: 'Within +/- 2.5mm preventing patient-wheelchair jolts' },
      { label: 'Bumper Style', value: 'Dual shock-absorbing elastic rubber wall buffers' }
    ]
  },
  {
    id: 'hyundai-freight',
    title: 'Hyundai Extreme Industrial Freight Elevator',
    banglaTitle: 'ভারী পণ্যবাহী কার্গো ও ফ্রেইট লিফট',
    tagline: 'Rugged Endurance & Uncompromising Safety for Extreme Industrial Load',
    image: freightImg,
    brand: 'Hyundai',
    origin: 'Korea',
    type: 'freight',
    capacity: '1,000 kg - 5,000 kg (Up to 5 Tons)',
    speed: '0.5 m/s - 1.0 m/s',
    controlSystem: 'Hyundai Heavy-Duty VVVF controllerboard',
    driveMachine: 'High-torque Geared Traction Drive / Hydraulic Ram',
    doorType: '2-Panel Center-Opening / Biparting vertical sliding',
    description: 'Constructed to handle tough everyday loads in commercial warehouses, factories, and garments industries. Incorporates side-guide steel rails, fortified mechanical safety guards, and anti-slip floors.',
    features: [
      'Reinforced steel structure preventing cargo collision damage and chassis warping',
      'Wide door options including deep vertical sliding gates or telescopic panels',
      'Precision leveling loops ensuring safe forklift entry over floor plates'
    ],
    specifications: [
      { label: 'Brand Name', value: 'Hyundai' },
      { label: 'Origin Country', value: 'South Korea' },
      { label: 'Load Capacity', value: '1,000 kg - 5,000 kg (Up to 5 Tons)' },
      { label: 'Floor Plates', value: '5mm heavy-duty checkered sheets' },
      { label: 'Safety Guards', value: 'Reinforced 3-way side wall anti-collision profiles' }
    ]
  },
  {
    id: 'sikder-car',
    title: 'Sikder Hydraulic & Traction Car Lift',
    banglaTitle: 'সিকদার হাইড্রোলিক কার পার্কিং ও গ্যারাজ লিফট',
    tagline: 'Multi-level vertical parking with robust mechanical holding clamps',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80',
    brand: 'Sikder',
    origin: 'Japan Tech',
    type: 'car-lift',
    capacity: '3,000 kg - 5,000 kg',
    speed: '0.25 m/s - 0.5 m/s',
    controlSystem: 'Dual Side Driver Mounted Controls',
    driveMachine: 'Heavy Hydraulic Ram cylinder or High torque Traction Machine',
    doorType: '4-Panel Center-Opening Automatic Door',
    description: 'Perfect solution for residential towers or commercial centers with tight basement layouts. Transports heavy SUVs safely across parking decks with automated safety signals and double-sided controller boxes.',
    features: [
      'Double-sided driver cabin control columns preventing exiting vehicle while positioning',
      'Advanced photo-infrared vehicle centering safety lasers ensuring perfect box positioning',
      'Mechanical hold-clamps locking the platform from drifting during loading/unloading'
    ],
    specifications: [
      { label: 'Brand Name', value: 'Sikder ' },
      { label: 'Origin Country', value: 'Japan Tech Design / China JV' },
      { label: 'Maximum Load', value: '3,000kg to 5,000kg capacity configurations' },
      { label: 'Operation Drive', value: 'High power low sound quiet hydraulic ram or PM traction' },
      { label: 'Safety Sensor', value: 'Photoelectric vehicle positioning safety barriers' }
    ]
  },
  {
    id: 'fuji-mrl-passenger',
    title: 'Fuji Machine-Room-Less (MRL) Passenger Lift',
    banglaTitle: 'ফুজি মেশিন-রুম-লেস (MRL) প্যাসেঞ্জার লিফট',
    tagline: 'Space-Saving Overhead Design Crafted for Modern Low-to-Medium Rise Towers',
    image: fujiMrlImg,
    brand: 'Fuji',
    origin: 'Japan Tech / China Factory',
    type: 'passenger',
    capacity: '450 kg - 1,000 kg (6 to 13 Passengers)',
    speed: '1.0 m/s - 1.75 m/s',
    controlSystem: 'Monarch NICE3000+ Integrated Vector Control',
    driveMachine: 'High Efficiency PM Gearless Traction Machine',
    doorType: '2-Panel Center Opening Automatic Sliding Door',
    description: 'Eliminates the traditional rooftop machine room, allowing architects maximum design freedom. Perfect for residential complexes, saves electricity, and optimizes standard overhead space layout.',
    features: [
      'Top floor machine room is completely eliminated, reducing structural concrete and construction costs',
      'Whisper-quiet VVVF micro-step motor driving with less than 48dB cabin noise',
      'Integrated Automatic Rescue Device (ARD) with maintenance-free gel battery backup'
    ],
    specifications: [
      { label: 'Brand Name', value: 'Fuji' },
      { label: 'Origin Country', value: 'Japan Tech / China JV' },
      { label: 'Capacity Range', value: '450 kg - 1,000 kg' },
      { label: 'Required Overhead', value: 'Only 4,200mm standard headroom' },
      { label: 'Controller Board', value: 'Monarch NICE3000+ Integrated Control' },
      { label: 'Drive Efficiency', value: 'Over 95% power factor VVVF drive' }
    ]
  }
];

const ELEVATOR_SUGGESTION_IMAGES = [
  { label: 'Skyscraper Cabin', url: 'https://images.unsplash.com/photo-1549642194-e86cb8ee8028?auto=format&fit=crop&w=600&q=80' },
  { label: 'Duplex Home Lift', url: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=600&q=80' },
  { label: 'Atrium Escalator', url: 'https://images.unsplash.com/photo-1481973964012-59a7f3225ebe?auto=format&fit=crop&w=600&q=80' },
  { label: 'Freight Lift Gate', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
  { label: 'Hospital Lift Glass', url: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=600&q=80' }
];

const serviceAdvantagesData: ServiceAdvantage[] = [
  {
    id: 'emergency',
    title: '24/7 Rapid Emergency Response',
    banglaTitle: '২৪/৭ দ্রুত জরুরী রেসকিউ টিম',
    icon: <PhoneCall className="text-amber-500" size={32} />,
    description: 'Security is paramount. Our central command center dispatches highly skilled elevator safety and rescue technicians to your location immediately if any anomaly or trapping occurs.',
    points: [
      'Guaranteed fast physical arrival in major corporate zones within Dhaka city limits',
      'Highly professional technical teams on standby with fully-stocked mobile repair vans',
      'Real-time technician tracking and direct audio communication via intercom backbones',
      'Collaborative coordination with national emergency civil defense responders'
    ],
    bannerBg: 'bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/20'
  },
  {
    id: 'safety',
    title: 'Zero-Compromise High-Security Features',
    banglaTitle: 'সর্বোচ্চ স্তরের নিরাপত্তা সমাধান',
    icon: <Shield className="text-emerald-500" size={32} />,
    description: 'We import components certified by international elevator security councils. Sikder installs multi-point redundancy limits to guard against free-falling and over-speed maneuvers under all electrical disruptions.',
    points: [
      'Safety gear & overspeed governor components certified by EU Lift Directive',
      'Smart emergency backup power systems (ARD - Automatic Rescue Device)',
      'Seismic-safe sensors that stop cabin at nearest floor during seismic shakes',
      'Infrared safety door curtain sensors with 194 beam points preventing pinch accidents'
    ],
    bannerBg: 'bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/20'
  },
  {
    id: 'engineering',
    title: 'Innovative Custom Engineering',
    banglaTitle: 'উদ্ভাবনী কাস্টম ইঞ্জিনিয়ারিং',
    icon: <Settings className="text-blue-500" size={32} />,
    description: 'We provide specialized blueprints. Whether you have circular shafts, compact existing properties, skew walls, or strict historic preservation limitations, we shape the layout appropriately.',
    points: [
      'Bespoke cabin structural design aligning with luxury building themes',
      'External retrofitting structures with aluminum-composite weather seals',
      'Customized micro-processor programming parameters for priority calling control',
      'Optimal compact space-saving shaft size design templates'
    ],
    bannerBg: 'bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/20'
  },
  {
    id: 'green',
    title: 'VVVF Green Energy Efficiency',
    banglaTitle: 'বিদ্যুৎ সাশ্রয়ী আধুনিক ভিভিভিএফ প্রযুক্তি',
    icon: <Zap className="text-yellow-500" size={32} />,
    description: 'Environmental guardianship. All modern Sikder traction units feature regenerative drives which convert energy created during descent back into clean electricity for other grids in the building.',
    points: [
      'Cuts total lift electrical consumption by up to 45% compared to induction machines',
      'Power factor improvement near to 1.0 reduces secondary substation load demands',
      'Lubricant-free permanent magnet gearless structure guarantees zero waste leaks',
      'Quiet operations with low structural noise transmission throughout the building'
    ],
    bannerBg: 'bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent border-yellow-500/20'
  },
  {
    id: 'maintenance',
    title: 'Lifelong Rigorous Preventative Plans',
    banglaTitle: 'আজীবন নিয়মিত লাইফ সাপোর্ট ও রক্ষণাবেক্ষণ',
    icon: <Wrench className="text-purple-500" size={32} />,
    description: 'A smooth ride is built on consistent preservation. We enforce strict monthly testing and alignment tracking on high-torque parts to keep lift systems running with seamless reliability.',
    points: [
      'Experienced certified engineers carry out monthly standard checklist tasks',
      'Digital diagnostic reports filed directly to clients after each technical checkup',
      'Vibration, acceleration, and alignment noise tracking with computerized metrics',
      'Stocking genuine factory spare parts and original high-tensile wire ropes'
    ],
    bannerBg: 'bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/20'
  }
];

interface ElevatorSolutionsPageProps {
  onBack: () => void;
}

const ElevatorSolutionsPage: React.FC<ElevatorSolutionsPageProps> = ({ onBack }) => {
  // Use unique key 'sikder_elevator_directory_v9' to load the new metadata-rich layout
  const [categories, setCategories] = useState<ElevatorCategory[]>(() => {
    const saved = localStorage.getItem('sikder_elevator_directory_v9');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item: ElevatorCategory) => {
            const defItem = initialElevatorCategories.find(d => d.id === item.id);
            if (defItem) {
              return {
                ...item,
                image: defItem.image,
                specifications: defItem.specifications || item.specifications,
                features: defItem.features || item.features
              };
            }
            return item;
          });
        }
      } catch (e) {
        // use default if error
      }
    }
    // Clean transition checks for old local storage and upgrades if possible
    return initialElevatorCategories;
  });

  const [selectedCategory, setSelectedCategory] = useState<ElevatorCategory | null>(null);
  const [activeTab, setActiveTab] = useState<'products' | 'advantages'>('products');
  const [submittedBlueprint, setSubmittedBlueprint] = useState<boolean>(false);

  // Search & Filter state variables
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  // States for Image & Specs editor modal
  const [editingItem, setEditingItem] = useState<ElevatorCategory | null>(null);
  const [imageUrlInput, setImageUrlInput] = useState<string>('');
  const [imageTitleInput, setImageTitleInput] = useState<string>('');
  const [imageBanglaTitleInput, setImageBanglaTitleInput] = useState<string>('');
  const [imageDescriptionInput, setImageDescriptionInput] = useState<string>('');
  const [imageBrandInput, setImageBrandInput] = useState<string>('Fuji');
  const [imageOriginInput, setImageOriginInput] = useState<string>('');
  const [imageTypeInput, setImageTypeInput] = useState<string>('passenger');
  const [imageCapacityInput, setImageCapacityInput] = useState<string>('');
  const [imageSpeedInput, setImageSpeedInput] = useState<string>('');
  const [imageControlInput, setImageControlInput] = useState<string>('');
  const [imageDriveInput, setImageDriveInput] = useState<string>('');
  const [imageDoorInput, setImageDoorInput] = useState<string>('');

  // States for interactive cropping tool
  const [isCropActive, setIsCropActive] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);
  const [originalImgForCrop, setOriginalImgForCrop] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const cropContainerRef = useRef<HTMLDivElement>(null);
  const cropImgRef = useRef<HTMLImageElement>(null);

  // Sync cropping engine with the currently active image on change of product edit focus
  useEffect(() => {
    if (editingItem) {
      setOriginalImgForCrop(editingItem.image);
      setZoom(1);
      setOffsetX(0);
      setOffsetY(0);
      setRotation(0);
      setIsCropActive(false);
    }
  }, [editingItem]);

  // Pointer event action handlers to pan the image in crop window natively with mouse or mobile touch
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - offsetX, y: e.clientY - offsetY });
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setOffsetX(newX);
    setOffsetY(newY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // High quality HTML5 canvas cropping function
  const handleApplyCrop = () => {
    const imageEl = cropImgRef.current;
    const containerEl = cropContainerRef.current;
    if (imageEl && containerEl) {
      const containerRect = containerEl.getBoundingClientRect();
      const canvas = document.createElement('canvas');
      canvas.width = 650;
      canvas.height = 500;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 650, 500);

        // Map DOM screen pixels perfectly straight back to natural high-res image coordinate factors
        const scaleFactor = 650 / containerRect.width;
        const finalOffsetX = offsetX * scaleFactor;
        const finalOffsetY = offsetY * scaleFactor;
        
        // Pin translation vectors to canvas centers
        ctx.translate(325 + finalOffsetX, 250 + finalOffsetY);
        ctx.rotate((rotation * Math.PI) / 180);

        const imgWidth = imageEl.naturalWidth || imageEl.width || 650;
        const imgHeight = imageEl.naturalHeight || imageEl.height || 500;
        const imgRatio = imgWidth / imgHeight;

        let baseWidth = 650;
        let baseHeight = 500;

        if (imgRatio > 1.3) {
          baseHeight = 500;
          baseWidth = 500 * imgRatio;
        } else {
          baseWidth = 650;
          baseHeight = 650 / imgRatio;
        }

        const finalWidth = baseWidth * zoom;
        const finalHeight = baseHeight * zoom;

        ctx.drawImage(
          imageEl,
          -finalWidth / 2,
          -finalHeight / 2,
          finalWidth,
          finalHeight
        );

        try {
          const croppedUrl = canvas.toDataURL('image/jpeg', 0.92);
          setImageUrlInput(croppedUrl);
          setIsCropActive(false);
          alert("Crop applied successfully! (ছবি সফলভাবে ক্রপ করা হয়েছে)");
        } catch (err) {
          console.error("Canvas crop failed due to CORS security constraint:", err);
          alert("Unable to crop remote external CDN URL due to browser security limitations. Local uploads, camera grabs and brand suggestions are fully supported.");
        }
      }
    }
  };

  const saveCategoriesToStorage = (updated: ElevatorCategory[]) => {
    setCategories(updated);
    localStorage.setItem('sikder_elevator_directory_v9', JSON.stringify(updated));
  };

  const handleCloseCategory = () => {
    setSelectedCategory(null);
    setSubmittedBlueprint(false);
  };

  // Convert File upload to Base64 and register it as the active crop source
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageUrlInput(reader.result);
          setOriginalImgForCrop(reader.result);
          setZoom(1);
          setOffsetX(0);
          setOffsetY(0);
          setRotation(0);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveEdit = () => {
    if (!editingItem) return;
    const updated = categories.map(cat => {
      if (cat.id === editingItem.id) {
        return {
          ...cat,
          image: imageUrlInput,
          title: imageTitleInput,
          banglaTitle: imageBanglaTitleInput,
          description: imageDescriptionInput,
          brand: imageBrandInput,
          origin: imageOriginInput,
          type: imageTypeInput,
          capacity: imageCapacityInput,
          speed: imageSpeedInput,
          controlSystem: imageControlInput,
          driveMachine: imageDriveInput,
          doorType: imageDoorInput,
          // Sync changes dynamically into original specifications list too!
          specifications: [
            { label: 'Brand Name', value: imageBrandInput },
            { label: 'Origin Country', value: imageOriginInput || 'Global JV' },
            { label: 'Capacity Standard', value: imageCapacityInput || '450kg - 1600kg' },
            { label: 'Speed Limit', value: imageSpeedInput || '1.0m/s' },
            { label: 'Controller System', value: imageControlInput || 'Integrated micro' },
            { label: 'Machine Type', value: imageDriveInput || 'PMS Gearless' },
            { label: 'Door Configuration', value: imageDoorInput || 'Automatic' }
          ]
        };
      }
      return cat;
    });
    saveCategoriesToStorage(updated);
    if (selectedCategory && selectedCategory.id === editingItem.id) {
      setSelectedCategory({
        ...selectedCategory,
        image: imageUrlInput,
        title: imageTitleInput,
        banglaTitle: imageBanglaTitleInput,
        description: imageDescriptionInput,
        brand: imageBrandInput,
        origin: imageOriginInput,
        type: imageTypeInput,
        capacity: imageCapacityInput,
        speed: imageSpeedInput,
        controlSystem: imageControlInput,
        driveMachine: imageDriveInput,
        doorType: imageDoorInput,
        specifications: [
          { label: 'Brand Name', value: imageBrandInput },
          { label: 'Origin Country', value: imageOriginInput || 'Global JV' },
          { label: 'Capacity Standard', value: imageCapacityInput || '450kg - 1600kg' },
          { label: 'Speed Limit', value: imageSpeedInput || '1.0m/s' },
          { label: 'Controller System', value: imageControlInput || 'Integrated micro' },
          { label: 'Machine Type', value: imageDriveInput || 'PMS Gearless' },
          { label: 'Door Configuration', value: imageDoorInput || 'Automatic' }
        ]
      });
    }
    setEditingItem(null);
  };

  const handleAddNewSegment = () => {
    const nextId = `elevator-segment-${Date.now()}`;
    const newSegment: ElevatorCategory = {
      id: nextId,
      title: 'Fuji Smart Premium Cabin',
      banglaTitle: 'ফুজি চমৎকার প্রিমিয়াম কেবিন',
      tagline: 'Precision Swiss standard lift configuration built by Sikder Corp',
      image: passengerImg,
      brand: 'Fuji',
      origin: 'Japan Tech / China Factory',
      type: 'passenger',
      capacity: '630 Kg (8 Passengers)',
      speed: '1.0 m/s',
      controlSystem: 'Monarch Integrated Controlling System',
      driveMachine: 'PMS Gearless Traction Engine',
      doorType: 'Center Opening Automatic Sliding Door',
      description: 'We construct customized lifts of ultimate luxury and safety conforming to national building standard codes (BNBC).',
      features: [
        'VVVF energy saving smooth-drive system',
        'Certified automatic rescue device integrated',
        'Anti-bacterial handrails and micro-cleansed interiors'
      ],
      specifications: [
        { label: 'Brand Name', value: 'Fuji' },
        { label: 'Origin Country', value: 'Japan Tech / China Factory' },
        { label: 'Capacity Standard', value: '630 Kg (8 Passengers)' },
        { label: 'Rated Speed', value: '1.0 m/s' }
      ]
    };
    saveCategoriesToStorage([...categories, newSegment]);
  };

  const handleDeleteSegment = (id: string) => {
    if (confirm('Are you sure you want to delete this elevator segment?')) {
      const updated = categories.filter(cat => cat.id !== id);
      saveCategoriesToStorage(updated);
      setEditingItem(null);
    }
  };

  const handleResetToDefault = () => {
    if (confirm('Reset to default segments and photos? This will undo all changes.')) {
      saveCategoriesToStorage(initialElevatorCategories);
      setEditingItem(null);
    }
  };

  // Memoized filters matching bdstall directory lists
  const filteredProducts = useMemo(() => {
    return categories.filter(product => {
      // Search Box text matching
      const matchesSearch = 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.banglaTitle.includes(searchQuery) ||
        (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Brand pill matching
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      
      // Type pill matching
      const matchesType = selectedType === 'All' || product.type === selectedType;

      return matchesSearch && matchesBrand && matchesType;
    });
  }, [categories, searchQuery, selectedBrand, selectedType]);

  const availableBrands = ['All', 'Fuji', 'Sigma', 'Mitsubishi', 'Otis', 'Schindler', 'Hyundai', 'Sikder'];
  
  const elevatorTypes = [
    { value: 'All', label: 'All Lifts (সব প্রকার)' },
    { value: 'passenger', label: 'Passenger Lift (প্যাসেঞ্জার)' },
    { value: 'villa', label: 'Villa Home Lift (হোম/ভিলা)' },
    { value: 'panoramic', label: 'Panoramic Capsule (অবজারভেশন)' },
    { value: 'freight', label: 'Freight Cargo (কার্গো লিফট)' },
    { value: 'escalator', label: 'Escalator & Walks (এস্কেলেটর)' },
    { value: 'hospital', label: 'Hospital Stretcher (স্ট্রেচার)' },
    { value: 'car-lift', label: 'Garage Car Lift (কার লিফট)' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      {/* Premium Editorial Top Navigation Line */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button 
            type="button"
            id="back-to-home-btn"
            onClick={onBack}
            className="flex items-center gap-2 text-[#6C8B3C] hover:text-brand-purple font-bold text-sm bg-white px-6 py-3 rounded-full shadow-md border border-slate-100 transition-all hover:scale-102"
          >
            ← Back to Companies
          </button>
          
          <div className="flex items-center gap-2 bg-[#6C8B3C]/10 text-[#6C8B3C] px-5 py-2.5 rounded-full border border-[#6C8B3C]/20">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse"></span>
            <span className="text-xs font-black tracking-widest uppercase">Smart Vertical Transport division</span>
          </div>
        </div>
      </div>

      {/* Urban-focused Designer Headline & Brand Intro */}
      <section className="container mx-auto px-4 mb-16 text-center">
        <span className="text-[10px] font-extrabold text-[#6C8B3C] uppercase tracking-[0.4em] block mb-3">
          WORLD-CLASS TECHNOLOGY • JOINT-VENTURE MACHINERY
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
          Sikder Elevator <br />
          <span className="text-brand-purple">Solution</span>
        </h1>
        <div className="w-24 h-2 bg-[#6C8B3C] mx-auto mb-8 rounded-full"></div>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          Partnering with international elevator solution leaders like Fuji, Sigma, Mitsubishi, and Otis to deliver safe, silent, energy-efficient, and aesthetically gorgeous vertical transit cabins.
        </p>

        {/* Dynamic Metric Grid showcasing brand authority */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12 bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-xl">
          <div className="border-r border-slate-100 last:border-0 p-4">
            <div className="text-[#3A1D4D] font-black text-3xl md:text-4xl mb-2 flex items-center justify-center gap-1">
              <Award className="text-[#6C8B3C]" size={24} />
              EN81
            </div>
            <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">European Standard certified</div>
          </div>
          <div className="border-r border-slate-100 last:border-0 p-4">
            <div className="text-[#3A1D4D] font-black text-3xl md:text-4xl mb-2 flex items-center justify-center gap-1">
              <Sparkles className="text-[#6C8B3C]" size={24} />
              0-Jerk
            </div>
            <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">VVVF Drive smooth comfort</div>
          </div>
          <div className="border-r border-slate-100 last:border-0 p-4">
            <div className="text-[#3A1D4D] font-black text-3xl md:text-4xl mb-2 flex items-center justify-center gap-1">
              <Wrench className="text-[#6C8B3C]" size={24} />
              100%
            </div>
            <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest font-sans">Emergency Battery Rescues</div>
          </div>
          <div className="p-4">
            <div className="text-[#3A1D4D] font-black text-3xl md:text-4xl mb-2 flex items-center justify-center gap-1">
              <Activity className="text-[#6C8B3C]" size={24} />
              24/7
            </div>
            <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Dhaka Command Dispatch</div>
          </div>
        </div>
      </section>

      {/* Segment switcher with gorgeous active state pill */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex justify-center">
          <div className="flex bg-white/95 backdrop-blur items-center gap-2 p-2 border border-slate-200 rounded-full shadow-lg max-w-xl w-full">
            <button
              type="button"
              onClick={() => setActiveTab('products')}
              className={`flex-1 py-4 px-6 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'products'
                  ? 'bg-[#3A1D4D] text-white shadow-xl scale-102'
                  : 'text-slate-500 hover:text-[#3A1D4D] hover:bg-slate-100'
              }`}
            >
              <Settings size={16} />
              <span>Elevator products</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('advantages')}
              className={`flex-1 py-4 px-6 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'advantages'
                  ? 'bg-[#3A1D4D] text-white shadow-xl scale-102'
                  : 'text-slate-500 hover:text-[#3A1D4D] hover:bg-slate-100'
              }`}
            >
              <Award size={16} />
              <span>Service Advantages</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content 1: Product Showcase */}
      {activeTab === 'products' ? (
        <section className="container mx-auto px-4 max-w-7xl">
          
          {/* BDStall style Advanced Filter Dashboard */}
          <div className="bg-white rounded-[2rem] border border-slate-200 p-6 md:p-8 shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-[#3A1D4D]">
              <Settings size={120} className="animate-spin duration-1000" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-rose-100 pb-5">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-xl">
                  <Filter size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-800 tracking-tight leading-none">Smart Products Directory</h2>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">Find Elevators by brand, speed, or cabin capacity</p>
                </div>
              </div>

              {/* Reset shortcut */}
              {(searchQuery || selectedBrand !== 'All' || selectedType !== 'All') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedBrand('All');
                    setSelectedType('All');
                  }}
                  className="text-xs font-bold text-red-500 hover:text-red-700 bg-red-50 px-4 py-2 rounded-lg transition-colors border border-red-100 uppercase"
                >
                  Clear All Filters (সব পরিস্কার করুন)
                </button>
              )}
            </div>

            {/* Grid Layout Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Filter Column 1: Search Box */}
              <div>
                <label className="text-[10px] font-extrabold text-[#6C8B3C] uppercase block mb-2 tracking-wider">Search Models / Keywords</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search e.g. Fuji, Home, 630 Kg..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-xs text-slate-700 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple font-sans transition-all"
                  />
                  <Search className="absolute left-4 top-3.5 text-slate-400" size={15} />
                </div>
              </div>

              {/* Filter Column 2: Brand Partners Select */}
              <div>
                <label className="text-[10px] font-extrabold text-[#6C8B3C] uppercase block mb-2 tracking-wider">Select Brand Partner (কোম্পানি / ব্র্যান্ড)</label>
                <div className="flex flex-wrap gap-1.5">
                  {availableBrands.map(brand => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-3 py-2 rounded-xl text-[10px] font-bold uppercase transition-all border ${
                        selectedBrand === brand
                          ? 'bg-brand-purple text-white border-transparent shadow-md'
                          : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter Column 3: Elevator Lift Type Select */}
              <div>
                <label className="text-[10px] font-extrabold text-[#6C8B3C] uppercase block mb-2 tracking-wider">Select Lift Configuration (লিফটের ধরণ)</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-700 font-bold focus:outline-none focus:border-brand-purple transition-all"
                >
                  {elevatorTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

            </div>
          </div>

          {/* Results Metadata Header */}
          <div className="flex items-center justify-between mb-8 px-2">
            <p className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-[#3A1D4D]">{filteredProducts.length}</span> premium elevator solutions matched
            </p>
            <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3.5 py-1.5 rounded-full border border-amber-200 text-[9px] font-bold uppercase">
              <ShieldAlert size={11} className="shrink-0" />
              <span>Quote On Demand • No Pre-Fixed Pricing</span>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center text-slate-500 max-w-xl mx-auto shadow-md">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100 text-slate-300">
                <Search size={28} />
              </div>
              <h4 className="text-base font-black text-slate-800">No Matching Elevator Models Found</h4>
              <p className="text-xs mt-2 text-slate-400">We couldn't find items matching your filters or query. Please search with other keywords or reset filter cards.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedBrand('All');
                  setSelectedType('All');
                }}
                className="mt-6 bg-brand-purple hover:bg-brand-green text-white px-6 py-3 rounded-xl text-xs font-black uppercase transition-all"
              >
                Reset Filter Dashboard
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((category) => (
                <motion.div
                  key={category.id}
                  layoutId={`card-${category.id}`}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-md hover:shadow-2xl overflow-hidden group flex flex-col justify-between transition-all duration-300 relative"
                >
                  {/* Image Wrap */}
                  <div className="relative aspect-[1.3] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Brand Banner Accent overlay */}
                    <div className="absolute top-4 left-4 bg-[#3A1D4D] text-white text-[9px] font-black px-4 py-1.5 rounded-full shadow-lg border border-white/15 flex items-center gap-1">
                      <Sparkles size={11} className="text-amber-400" />
                      <span>{category.brand?.toUpperCase() || 'FUJI'} • Partner</span>
                    </div>

                    {/* Bangla Tag */}
                    <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white font-extrabold text-[9px] tracking-wider px-4 py-1.5 rounded-full border border-white/10 shadow-lg font-sans">
                      {category.banglaTitle}
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Brand Country Origin stamp */}
                      <div className="flex items-center gap-1 px-1 mb-2">
                        <Globe size={11} className="text-brand-green" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                          ORIGIN: {category.origin || 'Japan / China JV'}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#3A1D4D] leading-tight mb-2 group-hover:text-brand-purple transition-colors tracking-tight line-clamp-2">
                        {category.title}
                      </h3>
                      
                      <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">
                        {category.description}
                      </p>

                      {/* Technical Specs quick specs lists */}
                      <div className="grid grid-cols-2 gap-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-5 text-[10px] uppercase font-sans font-bold">
                        <div className="border-r border-slate-200/60 pr-2">
                          <span className="text-slate-400 font-semibold block text-[8px] tracking-widest">Load Capacity</span>
                          <span className="text-[#3A1D4D] block mt-0.5 font-black truncate">{category.capacity || '450kg - 1600kg'}</span>
                        </div>
                        <div className="pl-2">
                          <span className="text-slate-400 font-semibold block text-[8px] tracking-widest">Rated Speed</span>
                          <span className="text-[#3A1D4D] block mt-0.5 font-black truncate">{category.speed || '1.0 m/s'}</span>
                        </div>
                      </div>

                      {/* Integrated bullet advantages */}
                      <div className="space-y-1.5 mb-6 pl-1 pr-1 border-t border-dashed border-slate-200/60 pt-4">
                        {category.features.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex gap-2 items-start text-[10px] text-slate-500 leading-normal">
                            <CheckCircle size={10} className="text-brand-green mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Integrated Action Row (Details & WhatsApp Contact) */}
                    <div className="space-y-2 border-t border-slate-100 pt-4 bg-white">
                      
                      {/* Price on demand stamp */}
                      <div className="flex items-center justify-between bg-slate-50/70 border border-slate-100 px-4 py-2 rounded-xl mb-1">
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Quote Status</span>
                        <span className="text-[10px] font-extrabold text-[#6C8B3C]">Custom Sizing Quote</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedCategory(category)}
                          className="bg-brand-purple hover:bg-brand-green text-white hover:text-white py-3 px-4 rounded-xl text-[10px] font-extrabold tracking-widest uppercase transition-all duration-300 shadow-sm active:scale-98 flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                        >
                          <Maximize2 size={11} />
                          <span>Specs</span>
                        </button>

                        <a
                          href={`https://wa.me/8801317462251?text=Salam,%20I%20am%20interested%20in%20obtaining%20custom%20drawings%20and%20quotation%20for:%20${encodeURIComponent(category.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-xl text-[10px] font-extrabold tracking-widest uppercase transition-all duration-300 shadow-sm text-center flex items-center justify-center gap-1.5 cursor-pointer hover:scale-102"
                        >
                          <MessageSquare size={11} />
                          <span>Query</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      ) : (
        /* Tab Content 2: Service Advantages Block */
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {serviceAdvantagesData.map((adv, index) => (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 rounded-[2.5rem] border border-slate-200 bg-white shadow-xl flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl transition-shadow"
              >
                {/* Left Side Icon and Badge */}
                <div className="shrink-0 w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 shadow-inner">
                  {adv.icon}
                </div>

                {/* Right Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-none">
                      {adv.title}
                    </h3>
                    <span className="bg-[#6C8B3C]/10 text-[#6C8B3C] px-4 py-1.5 rounded-full text-xs font-bold font-sans">
                      {adv.banglaTitle}
                    </span>
                  </div>

                  <p className="text-slate-600 font-medium text-base mb-6 max-w-4xl leading-relaxed">
                    {adv.description}
                  </p>

                  {/* Highlight bullets */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                    {adv.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-500 font-sans leading-relaxed">
                        <CheckCircle className="text-[#6C8B3C] shrink-0 mt-0.5" size={14} />
                        <span className="font-bold text-slate-600">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Interactive Spec Drawer Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white rounded-[3rem] shadow-3xl max-w-5xl w-full h-[85vh] md:h-[80vh] overflow-hidden border border-slate-200 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Left Column: Ambient Showcase Image */}
              <div className="w-full md:w-5/12 bg-[#3A1D4D] text-white relative flex flex-col justify-end p-8 md:p-12 overflow-hidden shrink-0">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={selectedCategory.image} 
                    alt={selectedCategory.title} 
                    className="w-full h-full object-cover opacity-25"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F102B] via-[#2F1741]/80 to-transparent"></div>
                </div>

                <div className="relative z-10">
                  <span className="text-brand-green font-extrabold text-[10px] tracking-[0.3em] uppercase block mb-3 font-sans">
                    {selectedCategory.banglaTitle}
                  </span>
                  
                  <h3 className="text-3xl font-black mb-4 leading-none tracking-tight text-white">
                    {selectedCategory.title}
                  </h3>

                  <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6 font-sans">
                    {selectedCategory.tagline}
                  </p>

                  <div className="border-t border-white/10 pt-4">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Company Partner</span>
                    <span className="text-base font-black text-white">{selectedCategory.brand || 'FUJI JAPAN'}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Spec charts */}
              <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <Settings className="text-[#6C8B3C] animate-spin" size={18} />
                      <span className="text-xs font-black uppercase tracking-widest text-[#3A1D4D] font-sans">Technical Specifications Sheet</span>
                    </div>
                    
                    <button 
                      type="button"
                      onClick={handleCloseCategory}
                      className="p-3 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-800"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Complete Specs Map List */}
                  <h4 className="text-xs font-black text-brand-purple tracking-widest uppercase mb-4 font-sans">Sikder Standards Parameter Dashboard</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {selectedCategory.specifications.map((spec, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col border-b border-slate-100 pb-3"
                      >
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                          {spec.label}
                        </span>
                        <span className="text-xs font-black text-slate-700 mt-1">{spec.value}</span>
                      </div>
                    ))}
                    
                    {/* Fallback structured entries when simple custom objects are edited */}
                    {selectedCategory.capacity && (
                      <div className="flex flex-col border-b border-slate-100 pb-3">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Passenger Capacity</span>
                        <span className="text-xs font-black text-slate-700 mt-1">{selectedCategory.capacity}</span>
                      </div>
                    )}
                    {selectedCategory.speed && (
                      <div className="flex flex-col border-b border-slate-100 pb-3">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Travel Speed</span>
                        <span className="text-xs font-black text-slate-700 mt-1">{selectedCategory.speed}</span>
                      </div>
                    )}
                    {selectedCategory.controlSystem && (
                      <div className="flex flex-col border-b border-slate-100 pb-3">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Inverter Controller</span>
                        <span className="text-xs font-black text-slate-700 mt-1">{selectedCategory.controlSystem}</span>
                      </div>
                    )}
                  </div>

                  {/* Standard safety and smart features inside cabinet */}
                  <div className="mb-4">
                    <h4 className="text-xs font-black text-brand-purple tracking-widest uppercase mb-4 font-sans">Integrated Safety & Intelligence</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedCategory.features.map((feat, index) => (
                        <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <CheckCircle className="text-[#6C8B3C] shrink-0 mt-0.5" size={16} />
                          <span className="text-xs font-semibold text-slate-600 leading-relaxed font-sans">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submit query */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest font-sans">
                    Model ISO-9001 • BNBC Standard
                  </div>

                  <button 
                    type="button"
                    onClick={() => {
                      setSubmittedBlueprint(true);
                    }}
                    disabled={submittedBlueprint}
                    className={`px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 font-sans cursor-pointer ${
                      submittedBlueprint 
                        ? 'bg-brand-green/30 text-[#3A1D4D] border border-brand-green'
                        : 'bg-[#6C8B3C] hover:bg-[#3A1D4D] text-white hover:text-white'
                    }`}
                  >
                    {submittedBlueprint ? 'Specification Submitted ✓ (প্রতিনিধি শীঘ্রই যোগাযোগ করবেন)' : 'Request Sizing shaft drawings'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline Camera Photo & Specifications Dialog */}
      <AnimatePresence>
        {editingItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/65 backdrop-blur-md z-[200] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-white rounded-[2rem] shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-[#3A1D4D] text-white">
                <div className="flex items-center gap-2">
                  <Camera className="text-[#6C8B3C]" size={18} />
                  <span className="text-sm font-black uppercase tracking-wider">Update Elevator Sizing & Specifications</span>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer animate-none"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[70vh] space-y-5">
                
                {/* Image Preview and Upload Options */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Elevator Image Customizer</label>
                    {imageUrlInput && !isCropActive && (
                      <button
                        type="button"
                        onClick={() => setIsCropActive(true)}
                        className="bg-[#6C8B3C] hover:bg-[#3A1D4D] text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                      >
                        <Settings size={12} className="animate-spin-slow" />
                        <span>Interactive Cropping Tool (ক্রপ করুন)</span>
                      </button>
                    )}
                  </div>

                  {!isCropActive ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                      <div className="aspect-[1.3] bg-slate-950 rounded-xl overflow-hidden border border-slate-200 shadow-md relative group">
                        {imageUrlInput ? (
                          <>
                            <img 
                              src={imageUrlInput} 
                              alt="Preview" 
                              className="w-full h-full object-cover animate-none" 
                              referrerPolicy="no-referrer"
                            />
                            <div 
                              onClick={() => {
                                setOriginalImgForCrop(imageUrlInput);
                                setIsCropActive(true);
                              }}
                              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-bold gap-1.5 cursor-pointer"
                            >
                              <Settings size={18} className="text-[#6C8B3C]" />
                              <span className="text-[10px] font-black uppercase tracking-wider">Crop & Pan Image</span>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-1">
                            <ImageIcon size={20} />
                            <span className="text-[9px]">No Cabin Image</span>
                          </div>
                        )}
                      </div>
                      <div className="sm:col-span-2 space-y-3">
                        <div>
                          <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Upload Photo file</label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-purple-50 file:text-brand-purple hover:file:bg-purple-100 cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Paste Image Link / URL</label>
                          <input
                            type="text"
                            value={imageUrlInput}
                            onChange={(e) => {
                              setImageUrlInput(e.target.value);
                              setOriginalImgForCrop(e.target.value);
                              setZoom(1);
                              setOffsetX(0);
                              setOffsetY(0);
                              setRotation(0);
                            }}
                            placeholder="https://images.unsplash.com/photo-..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-sans focus:outline-none focus:border-brand-purple"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Magnificent interactive full-width crop workshop
                    <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 md:p-6 border border-slate-800 shadow-inner flex flex-col gap-5">
                      <div className="flex items-center justify-between border-b border-white/5 pb-3">
                        <div className="flex items-center gap-2">
                          <Settings size={16} className="text-[#6C8B3C]" />
                          <div>
                            <span className="text-[11px] font-black uppercase tracking-wider block text-white">Interactive Sizing Workshop</span>
                            <span className="text-[9px] text-slate-400 block">Drag photo directly or use fine-tune adjusters below</span>
                          </div>
                        </div>
                        <span className="text-[9px] bg-[#6C8B3C]/25 text-[#6C8B3C] font-black px-2 py-0.5 rounded uppercase tracking-wider border border-[#6C8B3C]/20">Uniform 1.3:1 Ratio</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                        
                        {/* Crop Area column */}
                        <div className="md:col-span-7 flex flex-col justify-center">
                          <div 
                            ref={cropContainerRef}
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerCancel={handlePointerUp}
                            className="aspect-[1.3] w-full bg-slate-950 rounded-xl overflow-hidden border border-white/10 shadow-lg relative cursor-move select-none touch-none group"
                          >
                            {originalImgForCrop ? (
                              <img 
                                ref={cropImgRef}
                                src={originalImgForCrop} 
                                alt="To Crop" 
                                crossOrigin="anonymous"
                                style={{
                                  transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg) scale(${zoom})`,
                                  transformOrigin: 'center center',
                                }}
                                className="w-full h-full object-cover select-none pointer-events-none transition-none"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-1">
                                <ImageIcon size={20} />
                                <span className="text-[10px]">Please select or upload a photo first</span>
                              </div>
                            )}

                            {/* Camera Sizing Rule of Thirds Guide lines */}
                            <div className="absolute inset-0 pointer-events-none border border-[#6C8B3C]/40 grid grid-cols-3 grid-rows-3 mix-blend-difference">
                              <div className="border-r border-b border-dashed border-white/20"></div>
                              <div className="border-r border-b border-dashed border-white/20"></div>
                              <div className="border-b border-dashed border-white/20"></div>
                              <div className="border-r border-b border-dashed border-white/20"></div>
                              <div className="border-r border-b border-dashed border-white/20"></div>
                              <div className="border-b border-dashed border-white/20"></div>
                              <div className="border-r border-dashed border-white/20"></div>
                              <div className="border-r border-dashed border-white/20"></div>
                              <div></div>
                            </div>
                            
                            {/* Drag Indicator hint HUD */}
                            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[8px] font-black uppercase tracking-wider px-2 py-1 rounded border border-white/10 flex items-center gap-1">
                              <Maximize2 size={10} />
                              <span>Drag to Pan (টেনে সরান)</span>
                            </div>
                          </div>
                        </div>

                        {/* Fine-Tuning Controls Column */}
                        <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                          <div className="space-y-3.5">
                            {/* Slider: Zoom */}
                            <div>
                              <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider mb-1 text-slate-400 font-sans">
                                <span>Zoom scale (জুম)</span>
                                <span className="text-[#6C8B3C] font-mono font-black">{zoom.toFixed(2)}x</span>
                              </div>
                              <input 
                                type="range" 
                                min="1.0" 
                                max="3.0" 
                                step="0.02" 
                                value={zoom} 
                                onChange={(e) => setZoom(parseFloat(e.target.value))}
                                className="w-full accent-[#6C8B3C] cursor-pointer h-1.5 bg-slate-800 rounded-lg selection:bg-transparent"
                              />
                            </div>

                            {/* Slider: Horizontal Pan */}
                            <div>
                              <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider mb-1 text-slate-400 font-sans">
                                <span>Horizontal Pan (ডানে/বামে)</span>
                                <span className="text-white font-mono font-bold">{offsetX.toFixed(0)}px</span>
                              </div>
                              <input 
                                type="range" 
                                min="-250" 
                                max="250" 
                                step="1" 
                                value={offsetX} 
                                onChange={(e) => setOffsetX(parseInt(e.target.value))}
                                className="w-full accent-brand-purple cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                              />
                            </div>

                            {/* Slider: Vertical Pan */}
                            <div>
                              <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider mb-1 text-slate-400 font-sans">
                                <span>Vertical Pan (উপরে/নিচে)</span>
                                <span className="text-white font-mono font-bold">{offsetY.toFixed(0)}px</span>
                              </div>
                              <input 
                                type="range" 
                                min="-250" 
                                max="250" 
                                step="1" 
                                value={offsetY} 
                                onChange={(e) => setOffsetY(parseInt(e.target.value))}
                                className="w-full accent-brand-purple cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                              />
                            </div>

                            {/* Rotate button trigger */}
                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={() => setRotation((prev) => (prev + 90) % 360)}
                                className="w-full bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-black uppercase tracking-wider py-2.5 rounded-xl flex items-center justify-center gap-2 border border-slate-700 cursor-pointer transition-all"
                              >
                                <Camera size={12} className="text-[#6C8B3C]" />
                                <span>Rotate 90° (ঘোরান: {rotation}°)</span>
                              </button>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                            <div className="grid grid-cols-2 gap-2">
                              {/* Reset values */}
                              <button
                                type="button"
                                onClick={() => {
                                  setZoom(1);
                                  setOffsetX(0);
                                  setOffsetY(0);
                                  setRotation(0);
                                }}
                                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all border border-slate-700 cursor-pointer"
                              >
                                Reset Settings
                              </button>
                              
                              {/* Cancel/Exit Cropper */}
                              <button
                                type="button"
                                onClick={() => setIsCropActive(false)}
                                className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 px-3 py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all cursor-pointer"
                              >
                                Cancel Crop
                              </button>
                            </div>

                            {/* Apply & Save cropped version */}
                            <button
                              type="button"
                              onClick={handleApplyCrop}
                              className="w-full bg-[#6C8B3C] hover:bg-[#5a7632] text-white px-4 py-3.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider shadow-lg hover:scale-101 active:scale-99 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              <CheckCircle size={14} />
                              <span>Apply Crop & Save (ক্রপ নিশ্চিত করুন)</span>
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>

                {/* Suggestions Row */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Or Choose from Curated Suggestion Photos</label>
                  <div className="flex flex-wrap gap-1.5">
                    {ELEVATOR_SUGGESTION_IMAGES.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => {
                          setImageUrlInput(sug.url);
                          setOriginalImgForCrop(sug.url);
                          setZoom(1);
                          setOffsetX(0);
                          setOffsetY(0);
                          setRotation(0);
                          setIsCropActive(false);
                        }}
                        className="bg-purple-50 hover:bg-purple-100 hover:border-purple-300 text-brand-purple text-[9px] font-bold px-2.5 py-1.5 border border-purple-100 rounded-lg transition-colors cursor-pointer"
                      >
                        {sug.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title & Description Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Elevator Title (English)</label>
                    <input
                      type="text"
                      value={imageTitleInput}
                      onChange={(e) => setImageTitleInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-bold focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Elevator Title (Bangla)</label>
                    <input
                      type="text"
                      value={imageBanglaTitleInput}
                      onChange={(e) => setImageBanglaTitleInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-bold font-sans focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                </div>

                {/* Brand and Origin setup */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Brand Partner</label>
                    <select
                      value={imageBrandInput}
                      onChange={(e) => setImageBrandInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-bold focus:outline-none focus:border-brand-purple"
                    >
                      <option value="Fuji">Fuji</option>
                      <option value="Sigma">Sigma</option>
                      <option value="Mitsubishi">Mitsubishi</option>
                      <option value="Otis">Otis</option>
                      <option value="Schindler">Schindler</option>
                      <option value="Hyundai">Hyundai</option>
                      <option value="Sikder">Sikder</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Country of Origin</label>
                    <input
                      type="text"
                      value={imageOriginInput}
                      onChange={(e) => setImageOriginInput(e.target.value)}
                      placeholder="e.g. Japan / China JV"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Lift Category</label>
                    <select
                      value={imageTypeInput}
                      onChange={(e) => setImageTypeInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-bold focus:outline-none focus:border-brand-purple"
                    >
                      <option value="passenger">Passenger Lift</option>
                      <option value="villa">Villa Home Lift</option>
                      <option value="panoramic">Panoramic Capsule</option>
                      <option value="freight">Freight Cargo</option>
                      <option value="escalator">Escalator</option>
                      <option value="hospital">Hospital Bed</option>
                      <option value="car-lift">Garage Car Lift</option>
                    </select>
                  </div>
                </div>

                {/* Heavy Technical Parameters for BDStall specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Load Range (Capacity)</label>
                    <input
                      type="text"
                      value={imageCapacityInput}
                      onChange={(e) => setImageCapacityInput(e.target.value)}
                      placeholder="e.g. 630 kg (8 Passengers)"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Rated Speed</label>
                    <input
                      type="text"
                      value={imageSpeedInput}
                      onChange={(e) => setImageSpeedInput(e.target.value)}
                      placeholder="e.g. 1.0 m/s - 1.75 m/s"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Control Board</label>
                    <input
                      type="text"
                      value={imageControlInput}
                      onChange={(e) => setImageControlInput(e.target.value)}
                      placeholder="e.g. Monarch Nice 3000+"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Drive Machine Engine</label>
                    <input
                      type="text"
                      value={imageDriveInput}
                      onChange={(e) => setImageDriveInput(e.target.value)}
                      placeholder="e.g. Permanent Magnet gearless synchronous machine"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Automatic Door Type</label>
                    <input
                      type="text"
                      value={imageDoorInput}
                      onChange={(e) => setImageDoorInput(e.target.value)}
                      placeholder="e.g. Center-Opening 2-Panel Sliding door"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Elevator Description</label>
                  <textarea
                    value={imageDescriptionInput}
                    onChange={(e) => setImageDescriptionInput(e.target.value)}
                    rows={2}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-sans focus:outline-none focus:border-brand-purple"
                  />
                </div>
              </div>

              <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-wrap gap-3 items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleDeleteSegment(editingItem.id)}
                  className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-100 px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 size={12} />
                  <span>Delete Cabin</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveEdit}
                    className="bg-[#3A1D4D] hover:bg-brand-purple text-white px-5 py-2.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ElevatorSolutionsPage;
