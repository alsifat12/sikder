import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, CheckCircle, ArrowRight, Shield, Settings, Zap, 
  Wrench, Activity, Sparkles, ChevronRight, PhoneCall, Award, Eye, Leaf,
  Camera, Plus, Trash2, Image as ImageIcon
} from 'lucide-react';

// Import newly generated premium high-quality agro images
import mainAgroImg from '../assets/images/sikder_agro_farm_main_1779479304904.png';
import cropsImg from '../assets/images/agro_crops_greenhouse_1779479324809.png';
import dairyImg from '../assets/images/agro_dairy_automated_1779479343947.png';
import regeneratedDairyImg from '../assets/images/regenerated_image_1781211113245.jpg';
import ecoAgriFishFarmImg from '../assets/images/eco_agri_fish_farm_1781212197827.jpg';
import agroOrchardImg from '../assets/images/regenerated_image_1781375906811.jpg';
import aquacultureImg from '../assets/images/regenerated_image_1781375910775.jpg';
import poultryFarmImg from '../assets/images/regenerated_image_1781375913627.jpg';
import greenhouseImg from '../assets/images/regenerated_image_1781375915233.jpg';

interface AgroCategory {
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

const initialAgroCategories: AgroCategory[] = [
  {
    id: 'dairy-livestock',
    title: 'Sikder Agro Farm Limited – Trusted Cattle Farm in Bangladesh',
    banglaTitle: 'সিকদার এগ্রো ফার্ম লিমিটেড',
    tagline: 'Trusted Cattle Farm',
    image: regeneratedDairyImg,
    description: 'Sikder Agro Farm Limited is a modern and reliable cattle farm dedicated to producing healthy, high-quality cows through proper nutrition, hygienic management, and professional care. We are committed to providing premium livestock and contributing to sustainable agriculture in Bangladesh.',
    features: [
      'Touchless computerized pneumatic milking parlor ensuring 100% sanitation',
      'Veterinary-monitored customized high-nutrient organic feed silage matrix',
      'Dynamic biogas plant utilizing bovine waste to product green electricity'
    ],
    specifications: [
      { label: 'Cattle Breed', value: 'High grade Holstein Friesian & Sahiwal' },
      { label: 'Milking Technology', value: 'Pneumatic pulse vacuum automated rotary' }
    ]
  },
  {
    id: 'smart-aquaculture',
    title: 'Modern Goat Farming',
    banglaTitle: 'সিকদার এগ্রো ফার্ম লিমিটেড',
    tagline: 'Sustainable Goat Farming',
    image: aquacultureImg,
    description: 'At Sikder Agro Farm Limited, we practice modern and sustainable goat farming to ensure healthy growth and high productivity. Through proper nutrition, scientific breeding programs, regular veterinary care, and hygienic farm management, we raise strong and healthy goats. Our goal is to produce premium-quality meat while maintaining the highest standards of animal welfare and farm sustainability.',
    features: [
      'Advanced RAS filtration recycling 90% of water volume',
      'Real-time automated dissolved oxygen monitoring & aeration grids',
      'Eco-friendly biological feed converters maintaining clean water standard'
    ],
    specifications: [
      { label: 'Aquaculture Tech', value: 'Biofloc & RAS continuous filtration' },
      { label: 'Main Species', value: 'Rui, Katla, Silver Carp, Monosex Tilapia' }
    ]
  },
  {
    id: 'poultry-farm',
    title: 'Modern Vegetable Production',
    banglaTitle: 'সিকদার এগ্রো ফার্ম লিমিটেড',
    tagline: 'Advanced Vegetable Crops',
    image: poultryFarmImg,
    description: 'At Sikder Agro Farm Limited, we use advanced agricultural technologies to produce fresh, healthy, and high-quality vegetables. Through greenhouse cultivation and controlled growing environments, we ensure year-round production of safe and nutritious vegetables. By utilizing modern irrigation systems, premium seeds, and scientific farming practices, we achieve higher yields while maintaining exceptional quality standards.',
    features: [
      'Fully mechanical touchless egg sorting, grading, and tray packing',
      'Biosecurity Level-3 disinfection protocols preventing pathogen entry',
      'Strict zero-growth-hormone health policy supervised by veterinary doctors'
    ],
    specifications: [
      { label: 'Shed Standard', value: 'Climate-controlled closed tunnels' },
      { label: 'Daily Yield', value: '180,000+ organic high-nutrient brown eggs' }
    ]
  },
  {
    id: 'organic-orchard',
    title: 'Modern Poultry Farming',
    banglaTitle: 'সিকদার এগ্রো ফার্ম লিমিটেড',
    tagline: 'Quality Poultry & Eggs',
    image: agroOrchardImg,
    description: 'Raising healthy and productive poultry through advanced technology, balanced nutrition, hygienic management, and sustainable farming practices.',
    features: [
      '100% natural organic compost and rich soil microbes',
      'High-efficiency sub-soil automated drip irrigation system',
      'Biological insect sticky traps replacing synthetic chemical pesticide sprays'
    ],
    specifications: [
      { label: 'Soil Enrichment', value: '100% natural home-grown vermicompost' },
      { label: 'Main Fruits', value: 'Red Dragon Fruit, Bari Malta-1, Harivanga Mango' }
    ]
  },
  {
    id: 'organic-greenhouse',
    title: 'Fish Farming',
    banglaTitle: 'সিকদার এগ্রো ফার্ম লিমিটেড',
    tagline: 'Eco-Safe Fisheries',
    image: greenhouseImg,
    description: 'At Sikder Agro Farm Limited, we are committed to sustainable and modern fish farming practices. Using advanced aquaculture techniques, quality fish feed, and proper pond management, we produce healthy and nutritious fish throughout the year. Our focus on water quality, fish health, and environmentally friendly methods ensures high productivity and premium-quality fish for our customers.',
    features: [
      'Pesticide-free certified double-layer biological mesh screen',
      'Computerized micro-sprinklers automatically balancing ambient humidity',
      'Eco-friendly coconut coir soil-less growth mediums protecting roots'
    ],
    specifications: [
      { label: 'Irrigation Type', value: 'Smart sensor-driven micro-mist & drip systems' },
      { label: 'Crop Standard', value: 'Export-grade pesticide residue-free veggies' }
    ]
  },
  {
    id: 'organic-compost',
    title: 'Increased Milk & Meat Production',
    banglaTitle: 'সিকদার এগ্রো ফার্ম লিমিটেড',
    tagline: 'High Yield Dairy & Beef',
    image: ecoAgriFishFarmImg,
    description: 'At Sikder Agro Farm Limited, we focus on enhancing both milk and meat production through modern livestock farming techniques. By providing balanced nutrition, high-quality feed, proper healthcare, and scientific farm management, we ensure the healthy growth and productivity of our cattle. Our commitment is to deliver premium-quality milk and beef while maintaining the highest standards of animal welfare and sustainable farming practices.',
    features: [
      'Scientific odor-free sorting and rapid aerobic composition beds',
      'Enriched with nitrogen-fixing beneficial soil microbes',
      'Heavy metal tested, 100% pure premium soil revitalizers'
    ],
    specifications: [
      { label: 'Moisture Level', value: '15% to 20% optimal bio-ready state' },
      { label: 'Output Capacity', value: '15 Tons of premium vermicompost per day' }
    ]
  }
];

const AGRO_SUGGESTION_IMAGES = [
  { label: 'Dairy & Milking', url: 'https://images.unsplash.com/photo-1596733430284-f746ee36ac79?auto=format&fit=crop&w=600&q=80' },
  { label: 'Greenhouse & Crops', url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80' },
  { label: 'Poultry & Birds', url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80' },
  { label: 'Lush Agriculture Fields', url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80' },
  { label: 'Aquaculture Loop', url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80' },
  { label: 'Tractor / Harvesting', url: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80' },
  { label: 'Fresh Harvest Seeds', url: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=600&q=80' }
];

const serviceAdvantagesData: ServiceAdvantage[] = [
  {
    id: 'organic-purity',
    title: '100% Organic & Chemical-Free',
    banglaTitle: 'শতভাগ ভেজালমুক্ত অর্গানিক উৎপাদন',
    icon: <Leaf className="text-emerald-500" size={32} />,
    description: 'We prioritize safe food security. No harmful chemical sprays, structural growth hormones, or artificial feed additives are ever introduced across the production cycle.',
    points: [
      'Third-party laboratory analysis ensures zero heavy-metals or harmful pesticides',
      'Natural organic manure and high-nutrient compost prepared locally at the facility',
      'Clean water sourced from deep freshwater mineral aquifers',
      'Full product traceability from seed/birth to ultimate market delivery packages'
    ],
    bannerBg: 'bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/20'
  },
  {
    id: 'agro-innovation',
    title: 'Advanced Precision Farming',
    banglaTitle: 'মেকানাইজড ও আধুনিক কৃষি প্রযুক্তি',
    icon: <Sparkles className="text-amber-500" size={32} />,
    description: 'By merging age-old organic farming wisdom with advanced mechanization, we reduce resource waste while ensuring high quality yields at a competitive price model.',
    points: [
      'Smart sensor arrays minimizing water usage during irrigation cycles',
      'High-grade soil nutrient tracking maps guiding customized compost delivery',
      'Rapid mechanical packaging shields protecting food transit freshness',
      'Ongoing technical research in sustainable agricultural methodologies'
    ],
    bannerBg: 'bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/20'
  }
];

interface AgroFarmPageProps {
  onBack: () => void;
}

const AgroFarmPage: React.FC<AgroFarmPageProps> = ({ onBack }) => {
  const categories = initialAgroCategories;
  const [selectedCategory, setSelectedCategory] = useState<AgroCategory | null>(null);
  const [activeTab, setActiveTab] = useState<'products' | 'advantages'>('products');

  const handleCloseCategory = () => {
    setSelectedCategory(null);
  };

  const getBanglaDetails = (id: string) => {
    switch (id) {
      case 'dairy-livestock':
        return {
          title: 'উন্নত ডেইরি ও প্রাকৃতিক পদ্ধতিতে গবাদি পশু পালন',
          description: 'আমাদের খামারে অত্যন্ত যত্ন সহকারে উন্নত জাতের হোলস্টাইন ফ্রিজিয়ান ও শাহীওয়াল গরুর লালন-পালন করা হচ্ছে। সম্পূর্ণ বিষমুক্ত প্রাকৃতিক কাঁচা ঘাস ও সুষম খাদ্য প্রদানের মাধ্যমে দৈনন্দিন পুষ্টিকর ও জীবাণুমুক্ত দুধ উৎপাদন নিশ্চিত করা হয়। খামারের সার্বিক বায়ো-সিকিউরিটি এবং ভেটেরিনারি কেয়ার সার্বক্ষণিক বজায় রাখা হয়।'
        };
      case 'smart-aquaculture':
        return {
          title: 'উন্নত প্রযুক্তির মৎস্য চাষ ও নিরাপদ অ্যাকুয়াকালচার',
          description: 'সিকদার এগ্রো ফার্মে আধুনিক বায়োফ্লক ও আরএএস (RAS) ওয়াটার রিশার্কুলেশন সিস্টেম ব্যবহার করে দেশীয় ও আন্তর্জাতিক পুষ্টিকর মৎস্য চাষ করা হচ্ছে। কোনো প্রকার রাসায়নিক উপাদান ছাড়াই বিশুদ্ধ পানিতে মাছের সুস্থ ও দ্রুত বৃদ্ধি তদারকি করা হয়।'
        };
      case 'poultry-farm':
        return {
          title: 'বায়ো-সিকিউর পোল্ট্রি খামার ও পুষ্টিকর ডিম উৎপাদন',
          description: 'যান্ত্রিক ও বায়ো-সিকিউরড স্লেট-শেডিং পদ্ধতিতে বিশ্বমানের ক্লোজড-টানেল পোল্ট্রি ফার্ম পরিচালনা করা হচ্ছে। পুষ্টিকর ব্রাউন এবং সাধারণ ডিম স্পর্শহীন উপায়ে স্বয়ংক্রিয়ভাবে বাছাই, গ্রেডিং এবং প্যাকিং করা হয় যেন বাজারজাতকরণের শেষ মুহূর্ত পর্যন্ত ডিমের গুণগত মান অটুট থাকে।'
        };
      case 'organic-orchard':
        return {
          title: 'স্বাদ ও পুষ্টিতে অনন্য জৈব ফলের বাগান প্রকল্প',
          description: 'আমাদের মেগা বাগানে কোনো রাসায়নিক সার ও কীটনাশক ছাড়াই উন্নত জাতের লাল ড্রাগন ফল, মিষ্টি বাড়ি মাল্টা এবং সুস্বাদু হাঁড়িভাঙা আমের চাষ করা হচ্ছে। আমাদের নিজস্ব প্রস্তুতকৃত কেঁচো সার (Vermicompost) ব্যবহারের মাধ্যমে প্রতিটি ফলের সর্বোচ্চ স্বাদ ও পুষ্টি নিশ্চিত করা হয়।'
        };
      case 'organic-greenhouse':
        return {
          title: 'স্মার্ট গ্রিনহাউস ও সারা বছর সুরক্ষিত ফসল চাষাবাদ',
          description: 'অত্যাধুনিক ইউভি-সুরক্ষিত গ্রিনহাউসের মাধ্যমে আমরা সারা বছরব্যাপী কালারফুল ক্যাপসিকাম, কচি শসা সহ বিভিন্ন উচ্চমূল্যের রোগমুক্ত সবজি উৎপাদন করছি। পরিবেশের বৈরী আবহাওয়া ও কীট-পতঙ্গের বাহ্যিক আক্রমণ থেকে সম্পূর্ণ মুক্ত উপায়ে ফসল সুরক্ষিত রাখা হয়।'
        };
      case 'organic-compost':
        return {
          title: 'প্রাকৃতিক জৈব সার ও কেঁচো কম্পোস্ট প্রস্তুতকরণ',
          description: 'ডেইরি খামারের গোবরকে আধুনিক উপায়ে ডিকম্পোজ করে উচ্চ কার্যকরী কেঁচো সার তথা ভার্মিকম্পোস্ট প্রস্তুত করা হচ্ছে। এই উন্নতমানের জৈব সার মাটির উর্বরতা শক্তি কয়েক গুণ বাড়িয়ে তোলে এবং মাটির ক্ষয়রোধ ও স্বাস্থ্য ফিরিয়ে আনতে অবদান রাখছে।'
        };
      default:
        return {
          title: 'নিরাপদ কৃষি ও উন্নয়ন প্রকল্প',
          description: 'সিকদার এগ্রো ফার্ম লিমিটেডের অন্যতম প্রধান লক্ষ্য হলো শতভাগ বিশুদ্ধ এবং পুষ্টিকর কৃষি উপাদান সর্বসাধারণের দোরগোড়ায় পৌঁছে দেওয়া।'
        };
    }
  };

  const getHighlights = (id: string) => {
    switch (id) {
      case 'dairy-livestock':
        return [
          'High-Grade Holstein Friesian & Sahiwal breeds raised under strict veterinary guidance • বিশেষজ্ঞ চিকিৎসকদের তত্ত্বাবধানে হোলস্টাইন-ফ্রিজিয়ান ও শাহিওয়াল জাতের উন্নত বংশবৃদ্ধি।',
          'Balanced organic feed silage nutrient diet (Zero hormones) • গরুর পুষ্টি চাহিদা মেটাতে হরমোন-মুক্ত ৩ স্তর বিশিষ্ট প্রাকৃতিক সবুজ ঘাস ও সাইলেজ খাদ্যপ্রক্রিয়া।',
          'Squeak-clean automatic milking process and bio-secure hygiene • স্বয়ংক্রিয় ডাবল-ফিল্টার দুগ্ধ দহন ও উন্নত জীবাণুমুক্ত নিরাপদ মিল্কিং পার্লার পরিবেশ।'
        ];
      case 'smart-aquaculture':
        return [
          'Eco-balanced water filtration recycling for high purity water • মাছের সুস্থ বৃদ্ধির জন্য উন্নত আরএএস রিসার্কুলেটিং ওয়াটার ফিল্টারিং ব্যবস্থা।',
          'High protein biological aqua feeds (Zero harmful antibiotics) • ক্ষতিকর অ্যান্টিবায়োটিক উপাদান মুক্ত অত্যন্ত পুষ্টিকর প্রাকৃতিক প্রোটিন ফিশ-ফিড প্রদান।',
          'Certified healthy, disease-free parent seed fingerlings • নিজস্ব হ্যাচারি থেকে সংগৃহীত সুস্থ ও শতভাগ রোগমুক্ত সুস্থ পোনা মাছ লালন।'
        ];
      case 'poultry-farm':
        return [
          'Touchless automated egg grading and hygienic packaging • সম্পূর্ণ স্পর্শহীন স্বয়ংক্রিয় উপায়ে ডিম বাছাই, জীবাণুমুক্তকরণ ও কার্টন ভরাট করণ।',
          'Strict bio-security systems with zero growth hormone usage • হরমোন ও স্টেরয়েড মুক্ত স্বাস্থ্যকর পরিবেশে পোল্ট্রি প্রতিপালন নিশ্চিতকরণ।',
          'Continuous temperature & fresh atmospheric air regulation • টানেল ভেন্টিলেশনের মাধ্যমে সার্বক্ষণিক আরামদায়ক অভ্যন্তরীণ আবহাওয়া ও আর্দ্রতা নিয়ন্ত্রণ।'
        ];
      case 'organic-orchard':
        return [
          '100% pure vermicompost organic soil enrichment • রাসায়নিক সার মুক্ত শতভাগ পুষ্টিকর ও শক্তিশালী ঘরোয়া কেঁচো সার প্রয়োগ।',
          'Organic biological pest control traps • ক্ষতিকর রাসায়নিক কীটনাশক ছাড়াই বিশেষ জৈবিক ট্র্যাপের মাধ্যমে পোকা দমনের নিরাপদ কৌশল।',
          'Direct-to-market fresh harvest ensuring vitamins preservation • সরাসরি বাগান থেকে সংগৃহীত ভিটামিনসমৃদ্ধ সতেজ ফলমূল দ্রুত সরবরাহ।'
        ];
      case 'organic-greenhouse':
        return [
          'Precision micro-mist smart sensors system for optimized humidity • তাপমাত্রা অনুযায়ী মেকানাইজড স্মার্ট কুয়াশা-সেচ ও ড্রিপর ড্রপ রুট ফিডিং ওয়াটারিং।',
          'All-weather organic farming protection shields • বৈরী ঝড়-বৃষ্টি ও অতিবেগুনী রশ্মি প্রতিরোধী বিশেষ শেড হাউজ নেটওয়ার্ক।',
          'Pesticide-residue free export standard quality • ক্ষতিকর রাসায়নিক অবশিষ্টাংশ মুক্ত রপ্তানি উপযোগী প্রিমিয়াম গুণমানের সবজি।'
        ];
      case 'organic-compost':
        return [
          'Beneficial rich biological microbes activation • মাটির কার্যক্ষমতা এবং নাইট্রোজেন বৃদ্ধি করতে উপকারী জীবণু ও রাইজোবিমাম কালচার।',
          'Tested non-toxic organic soil-revitalizer standard • ভারী ধাতুমুক্ত অত্যন্ত নিরাপদ ও পরিবেশ-বান্ধব খাঁটি কেঁচো কম্পোস্ট সার।',
          'High production rate serving local Bangladeshi organic farmers • দেশীয় কৃষকদের উর্বর ফলন নিশ্চিতে দৈনিক বিপুল পরিমাণ উন্নত জৈব সার প্রস্তুত।'
        ];
      default:
        return [
          '100% Certified organic production standards • শতভাগ অর্গানিক সারাবছর চাষাবাদ বিধিমালা।',
          'Innovative mechanical farming systems • আধুনিক এবং স্বয়ংক্রিয় কৃষি প্রযুক্তি ব্যবহার।'
        ];
    }
  };

  const getFooterContent = (id: string) => {
    switch (id) {
      case 'dairy-livestock':
        return {
          left: 'Sikder Agro Farm Limited – Trusted Cattle Farm in Bangladesh',
          right: 'Sikder Agro Farm Limited is a modern and reliable cattle farm dedicated to producing healthy, high-quality cows through proper nutrition, hygienic management, and professional care. We are committed to providing premium livestock and contributing to sustainable agriculture in Bangladesh.'
        };
      case 'smart-aquaculture':
        return {
          left: 'Modern Goat Farming',
          right: 'At Sikder Agro Farm Limited, we practice modern and sustainable goat farming to ensure healthy growth and high productivity. Through proper nutrition, scientific breeding programs, regular veterinary care, and hygienic farm management, we raise strong and healthy goats. Our goal is to produce premium-quality meat while maintaining the highest standards of animal welfare and farm sustainability.'
        };
      case 'poultry-farm':
        return {
          left: 'Modern Vegetable Production',
          right: 'At Sikder Agro Farm Limited, we use advanced agricultural technologies to produce fresh, healthy, and high-quality vegetables. Through greenhouse cultivation and controlled growing environments, we ensure year-round production of safe and nutritious vegetables. By utilizing modern irrigation systems, premium seeds, and scientific farming practices, we achieve higher yields while maintaining exceptional quality standards.'
        };
      case 'organic-orchard':
        return {
          left: 'Modern Poultry Farming',
          right: 'Raising healthy chickens and producing quality eggs and meat through advanced farming techniques, proper nutrition, vaccination, and hygienic management. 🐔✨'
        };
      case 'organic-greenhouse':
        return {
          left: 'Fish Farming',
          right: 'At Sikder Agro Farm Limited, we are committed to sustainable and modern fish farming practices. Using advanced aquaculture techniques, quality fish feed, and proper pond management, we produce healthy and nutritious fish throughout the year. Our focus on water quality, fish health, and environmentally friendly methods ensures high productivity and premium-quality fish for our customers.'
        };
      case 'organic-compost':
        return {
          left: 'Increased Milk & Meat Production',
          right: 'At Sikder Agro Farm Limited, we focus on enhancing both milk and meat production through modern livestock farming techniques. By providing balanced nutrition, high-quality feed, proper healthcare, and scientific farm management, we ensure the healthy growth and productivity of our cattle. Our commitment is to deliver premium-quality milk and beef while maintaining the highest standards of animal welfare and sustainable farming practices.'
        };
      default:
        return {
          left: 'Sikder Agro Farm Limited • Safe Food Initiative',
          right: 'Certified Safe • শতভাগ নিরাপদ'
        };
    }
  };


  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      {/* Editorial Navigation */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button 
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-[#6C8B3C] hover:text-brand-purple font-bold text-sm bg-white px-6 py-3 rounded-full shadow-md border border-slate-100 transition-all hover:scale-102 cursor-pointer"
          >
            ← Back to Companies
          </button>
          
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-full border border-emerald-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-black tracking-widest uppercase">Safe Food & Farming Division</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-900 border border-slate-100/10 min-h-[460px] flex flex-col justify-end p-8 md:p-16 mb-12 group">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80" 
              alt="Sikder Agro Farm Landscape" 
              className="w-full h-full object-cover opacity-60 transform scale-100 group-hover:scale-105 transition-transform duration-[6000ms] ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[9px] font-black tracking-[0.3em] uppercase px-4 py-2 rounded-full border border-white/20 inline-block mb-6 shadow-lg">
              SECURE FUTURE • ADVANCED INTEGRATED INDUSTRIAL AGRI-RESEARCH
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
              Sikder Agro <br />
              <span className="text-emerald-400">Farm Limited</span>
            </h1>
            <p className="text-slate-200 text-sm md:text-base font-bold leading-relaxed max-w-2xl font-sans">
              Pioneering mechanized precision agriculture, computerized closed-tunnel poultry barns, freshwater aquaculture RAS arrays, and organic orchards to lead Bangladesh into a safe and nutrient-dense food future.
            </p>
          </div>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-xl">
          <div className="border-r border-slate-100 last:border-0 p-4 text-center md:text-left">
            <div className="text-[#3A1D4D] font-black text-3xl md:text-4xl mb-2 flex items-center justify-center md:justify-start gap-1.5">
              <Award className="text-emerald-500" size={24} />
              100%
            </div>
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Organic Certified Silage & Fodder</div>
          </div>
          <div className="border-r border-slate-100 last:border-0 p-4 text-center md:text-left">
            <div className="text-[#3A1D4D] font-black text-3xl md:text-4xl mb-2 flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="text-emerald-600 animate-pulse" size={24} />
              Clean
            </div>
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Computerized Vacuum Milking</div>
          </div>
          <div className="border-r border-slate-100 last:border-0 p-4 text-center md:text-left">
            <div className="text-[#3A1D4D] font-black text-3xl md:text-4xl mb-2 flex items-center justify-center md:justify-start gap-1.5">
              <Leaf className="text-emerald-500" size={24} />
              0%
            </div>
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Synthetic Pesticide Residue</div>
          </div>
          <div className="p-4 text-center md:text-left">
            <div className="text-[#3A1D4D] font-black text-3xl md:text-4xl mb-2 flex items-center justify-center md:justify-start gap-1.5">
              <Activity className="text-emerald-500" size={24} />
              ISO-ready
            </div>
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Hygienic Bio-Security Systems</div>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex justify-center">
          <div className="flex bg-white/95 backdrop-blur items-center gap-2 p-2 border border-slate-200 rounded-full shadow-lg max-w-xl w-full">
            <button
              type="button"
              onClick={() => setActiveTab('products')}
              className={`flex-1 py-4 px-6 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'products'
                  ? 'bg-emerald-600 text-white shadow-xl scale-102'
                  : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-100'
              }`}
            >
              <Settings size={16} />
              <span>Production Range</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('advantages')}
              className={`flex-1 py-4 px-6 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'advantages'
                  ? 'bg-emerald-600 text-white shadow-xl scale-102'
                  : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-100'
              }`}
            >
              <Award size={16} />
              <span>Agro Advantages</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tab Products */}
      {activeTab === 'products' ? (
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                layoutId={`card-${category.id}`}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] border border-slate-200/80 shadow-md overflow-hidden group flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[1.3] overflow-hidden bg-slate-950 border-b border-slate-100">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Bangla Tag */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white font-extrabold text-[8px] tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg font-sans">
                    {category.banglaTitle}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.2em] block mb-1 font-sans font-bold">
                      SIKDER AGRO • ORGANIC
                    </span>
                    <h3 className="text-base font-black text-slate-800 leading-tight mb-2 group-hover:text-emerald-400 transition-all tracking-tight line-clamp-1">
                      {category.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4 font-medium line-clamp-3">
                      {category.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className="w-full bg-[#3A1D4D] text-white hover:bg-emerald-600 py-2.5 px-4 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 shadow-sm active:scale-98 flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ChevronRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ) : (
        /* Tab Advantages */
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {serviceAdvantagesData.map((adv, index) => (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 md:p-12 rounded-[2.5rem] border border-slate-200/80 bg-white shadow-xl flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl transition-shadow`}
              >
                <div className="shrink-0 w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100 shadow-inner">
                  {adv.icon}
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-none">
                      {adv.title}
                    </h3>
                    <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold font-sans">
                      {adv.banglaTitle}
                    </span>
                  </div>

                  <p className="text-slate-600 font-medium text-base mb-6 max-w-4xl leading-relaxed">
                    {adv.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                    {adv.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-500 font-sans leading-relaxed">
                        <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                        <span className="font-bold">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Specifications Modal Drawer */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white rounded-[3rem] shadow-3xl max-w-5xl w-full h-[85vh] md:h-[80vh] overflow-hidden border border-slate-200/80 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Image Side */}
              <div className="w-full md:w-5/12 bg-slate-950 text-white relative flex flex-col justify-end p-8 md:p-12 overflow-hidden shrink-0">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={selectedCategory.image} 
                    alt={selectedCategory.title} 
                    className="w-full h-full object-cover opacity-30"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                </div>

                <div className="relative z-10">
                  <span className="text-emerald-400 font-extrabold text-[10px] tracking-[0.3em] uppercase block mb-3 font-sans">
                    {selectedCategory.banglaTitle}
                  </span>
                  
                  <h3 className="text-3xl font-black mb-4 leading-none tracking-tight text-white">
                    {selectedCategory.title}
                  </h3>

                  <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6 font-sans">
                    {selectedCategory.tagline}
                  </p>
                </div>
              </div>

              {/* Redesigned Human-first Farming Detail Side */}
              <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto flex flex-col justify-between bg-white">
                <div>
                  <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <Leaf className="text-emerald-500 animate-pulse" size={20} />
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#3A1D4D] font-sans">
                        SIKDER AGRO • খামার বিবরণী ও কৃষি তথ্য
                      </span>
                    </div>
                    
                    <button 
                      type="button"
                      onClick={handleCloseCategory}
                      className="p-2.5 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-800"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Elegant Content Area */}
                  <div className="space-y-6">
                    <div className="bg-[#3A1D4D]/5 p-8 rounded-[2.5rem] border border-[#3A1D4D]/10 space-y-4">
                      <div className="flex items-center gap-2">
                        <Leaf className="text-emerald-600 animate-pulse" size={18} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#3A1D4D] font-sans">
                          {selectedCategory.tagline}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-tight font-sans">
                        {selectedCategory.title}
                      </h3>
                      
                      <p className="text-slate-700 text-sm leading-relaxed font-sans font-semibold">
                        {selectedCategory.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between font-sans">
                  <div className="text-slate-400 text-[9px] font-extrabold uppercase tracking-widest">
                    Sikder Agro Farm Limited • Safe Food Initiative
                  </div>
                  <div className="text-emerald-600 font-black text-[10px] tracking-widest uppercase">
                    Certified Safe • শতভাগ নিরাপদ
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgroFarmPage;
