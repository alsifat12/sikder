import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, CheckCircle, Clock, Calendar, HelpCircle, Activity, 
  MapPin, ShieldAlert, Award, Compass, Key, HardHat, 
  Layers, Hammer, ChevronRight, Eye, Grid3X3, Sliders, Building,
  Camera, Plus, Trash2, Image as ImageIcon, Search, Phone, Mail, User, Check, Info
} from 'lucide-react';

// Import newly generated premium high-quality real estate tower images
import ongoingImg from '../assets/images/sig_heights_dhaka_1781207685428.jpg';
import completedImg from '../assets/images/sky_atrium_banani_1781207702488.jpg';
import upcomingImg from '../assets/images/green_solis_purbachal_1781207718731.jpg';
import dhanmondiLakesideImg from '../assets/images/lakeshore_majestic_dhanmondi_1781207734868.jpg';
import gulshanAtriumImg from '../assets/images/gulshan_atrium_real_1781374191161.jpg';
import bananiHighriseImg from '../assets/images/banani_highrise_1779389714098.png';
import baridharaDuplexImg from '../assets/images/baridhara_duplex_1779389731489.png';
import uttaraComplexImg from '../assets/images/sikder_ecobreeze_garden_real_1781374576208.jpg';
import mirpurHubImg from '../assets/images/mirpur_hub_1779389774513.png';
import chittagongImg from '../assets/images/hero_corporate_building_1779211477651.png';

interface ConstructionProject {
  id: string;
  title: string;
  location: string;
  locationZone: 'Gulshan & Banani' | 'Dhanmondi' | 'Bashundhara' | 'Uttara & Purbachal' | 'Other Zones';
  category: 'Residential' | 'Commercial' | 'Mixed-Use' | 'Eco-Green';
  landArea: string;
  apartmentSizes: string;
  stories: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  image: string;
  imageFront?: string;
  imageBack?: string;
  imageDetail?: string;
  tagline: string;
  description: string;
  handoverDate: string;
  roadWidth: string;
  carParking: string;
  facing: string;
  specifications: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
  floorLayout: {
    unitName: string;
    beds: string;
    baths: string;
    size: string;
    facing: string;
    highlights: string[];
    layoutSvgPlaceholder: {
      rooms: { name: string; x: number; y: number; w: number; h: number; color: string }[];
    };
  }[];
}

const initialConstructionProjects: ConstructionProject[] = [
  {
    id: 'bldg1',
    title: 'Sikder Signature Heights',
    location: 'Plot-12, Road-06, Block-I, Bashundhara R/A, Dhaka',
    locationZone: 'Bashundhara',
    category: 'Residential',
    landArea: '8.5 Katha',
    apartmentSizes: '3,200 sft & 3,650 sft',
    stories: 'Double Basement + Ground + 15 Stories',
    status: 'Ongoing',
    image: ongoingImg,
    imageFront: ongoingImg,
    imageBack: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    imageDetail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    tagline: 'Superb Single-Unit Condominiums encasing Pristine Landscaped Terraces',
    description: 'A masterpiece of classic structural engineering and contemporary aesthetics, combining heavy bored piling foundations with high-performance double-glazed glass skins and state-of-the-art smart surveillance infrastructure.',
    handoverDate: 'December 2027',
    roadWidth: '60 Feet Wide Road',
    carParking: '2 Bays per Unit',
    facing: 'South-Facing',
    specifications: [
      { label: 'Structural Code', value: 'RAJUK & BNBC Seismic Zone 2 Compliant', icon: <Layers size={14} /> },
      { label: 'Heavy Piling Depth', value: '75 feet Cast-in-situ concrete piles', icon: <Hammer size={14} /> },
      { label: 'Concrete Strength', value: 'Direct Cylinder test 4500 PSI mix design', icon: <Award size={14} /> }
    ],
    floorLayout: [
      {
        unitName: 'Signature Unit A',
        beds: '4 Master Beds',
        baths: '5 Baths',
        size: '3,650 sft',
        facing: 'South-Facing',
        highlights: ['Triple Balconies', 'Detached Family Lounge', 'Servants Quarters'],
        layoutSvgPlaceholder: {
          rooms: [
            { name: 'Grand Master Bed', x: 5, y: 10, w: 42, h: 35, color: 'bg-indigo-500/10 border-indigo-500/30' },
            { name: 'Family Lounge', x: 50, y: 10, w: 45, h: 35, color: 'bg-[#3A1D4D]/10 border-[#3A1D4D]/30' },
            { name: 'Luxury Kitchen', x: 5, y: 55, w: 30, h: 35, color: 'bg-emerald-500/10 border-emerald-500/30' },
            { name: 'Dining Room', x: 40, y: 55, w: 55, h: 35, color: 'bg-amber-500/10 border-amber-500/30' }
          ]
        }
      },
      {
        unitName: 'Luxury Unit B',
        beds: '3 Beds',
        baths: '4 Baths',
        size: '3,200 sft',
        facing: 'South-Fast Corner',
        highlights: ['Deep Terraces', 'Walk-in Closets'],
        layoutSvgPlaceholder: {
          rooms: [
            { name: 'Master Bed', x: 10, y: 10, w: 40, h: 40, color: 'bg-indigo-500/10 border-indigo-500/30' },
            { name: 'Living & Dining', x: 55, y: 10, w: 35, h: 80, color: 'bg-[#3A1D4D]/10 border-[#3A1D4D]/30' },
            { name: 'Guest Suite', x: 10, y: 55, w: 40, h: 35, color: 'bg-emerald-500/10 border-emerald-500/30' }
          ]
        }
      }
    ]
  },
  {
    id: 'bldg2',
    title: 'Sikder Sky-Atrium Complex',
    location: 'Road-11, Block-B, Banani, Dhaka',
    locationZone: 'Gulshan & Banani',
    category: 'Commercial',
    landArea: '12 Katha',
    apartmentSizes: 'Custom Office Slabs from 6,000 sft',
    stories: 'Triple Basement + Ground + 18 Stories',
    status: 'Completed',
    image: completedImg,
    imageFront: completedImg,
    imageBack: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    imageDetail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    tagline: 'Dhaka\'s Premier Multi-Corporate Commercial Corporate Hub with Atrium Lounge',
    description: 'An emblem of high-end engineering, featuring high-efficiency VRF air conditioning, custom acoustic suspended ceilings, advanced carbon emission ventilators, and robust architectural fire defense networks.',
    handoverDate: 'Ready (Completed in 2025)',
    roadWidth: '80 Feet Main Road',
    carParking: 'Basement Parking Blocks (80 slots)',
    facing: 'Front Expressway Facing',
    specifications: [
      { label: 'Ground Lobby Height', value: '30-feet majestic marble atrium', icon: <Layers size={14} /> },
      { label: 'HVAC Air System', value: 'Central VRF cooling with independent control', icon: <Sliders size={14} /> },
      { label: 'Elevators', value: '4 High-Speed 2.5m/s Sigma Lift Modules', icon: <Activity size={14} /> }
    ],
    floorLayout: [
      {
        unitName: 'Executive Suite East',
        beds: 'N/A (HQ Office)',
        baths: '4 Powder Rooms',
        size: '6,200 sft',
        facing: 'Panoramic North-South',
        highlights: ['Double height glass walls', 'Executive Boardroom integration'],
        layoutSvgPlaceholder: {
          rooms: [
            { name: 'Boardroom Floor', x: 15, y: 10, w: 45, h: 40, color: 'bg-emerald-500/10 border-emerald-500/30' },
            { name: 'Open Office Cubicles', x: 15, y: 55, w: 70, h: 35, color: 'bg-slate-500/10 border-slate-500/30' }
          ]
        }
      }
    ]
  },
  {
    id: 'bldg4',
    title: 'Sikder Lakeshore Majestic',
    location: 'Road-27 (Old), Dhanmondi Lakeside View, Dhaka',
    locationZone: 'Dhanmondi',
    category: 'Residential',
    landArea: '10 Katha',
    apartmentSizes: '4,100 sft & 4,800 sft Luxury Duplexes',
    stories: 'Double Basement + Ground + 14 Stories Ultra Luxury Condos',
    status: 'Ongoing',
    image: dhanmondiLakesideImg,
    imageFront: dhanmondiLakesideImg,
    imageBack: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    imageDetail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Serene lakeside living with spectacular panoramic windows and floating lounges',
    description: 'Designed by international award-winning architects, the Lakeshore Majestic features floor-to-ceiling glass panel walls, large outdoor cantilevered decks, and premium acoustics overlooking Dhanmondi Lake.',
    handoverDate: 'April 2028',
    roadWidth: '40 Feet Lakeside Road',
    carParking: '3 Slots per Duplex',
    facing: 'West Lakefront Facing',
    specifications: [
      { label: 'Foundation Standard', value: '110-feet deep precast friction concrete piles', icon: <Layers size={14} /> },
      { label: 'Lakeside Retaining', value: 'Seepage-resistant specialized sheet piling barrier', icon: <Compass size={14} /> },
      { label: 'Acoustic Barrier', value: 'Double layer vacuum acoustics on all windows', icon: <Award size={14} /> }
    ],
    floorLayout: [
      {
        unitName: 'Lakeside Penthouse Unit',
        beds: '5 Beds',
        baths: '6 Baths',
        size: '4,800 sft',
        facing: 'Lake-facing North-East',
        highlights: ['Private infinity pool deck', 'Grand double-height sitting atrium'],
        layoutSvgPlaceholder: {
          rooms: [
            { name: 'Lake master bed', x: 10, y: 10, w: 50, h: 40, color: 'bg-emerald-500/10 border-emerald-500/30' },
            { name: 'Sitting Atrium', x: 65, y: 10, w: 25, h: 50, color: 'bg-[#3A1D4D]/10 border-[#3A1D4D]/30' }
          ]
        }
      }
    ]
  },
  {
    id: 'bldg5',
    title: 'Sikder Crown Atrium',
    location: 'Gulshan-2 Circle (North-West Commercial zone), Dhaka',
    locationZone: 'Gulshan & Banani',
    category: 'Commercial',
    landArea: '15 Katha',
    apartmentSizes: 'Corporate Offices up to 10,000 sft',
    stories: 'Quadruple Basement + G + 24 Stories Iconic Landmark',
    status: 'Completed',
    image: gulshanAtriumImg,
    imageFront: gulshanAtriumImg,
    imageBack: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    imageDetail: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tagline: 'Gulshan\'s most iconic double-glazed golden glass structural tower',
    description: 'Catering to international diplomatic offices and global conglomerates, this landmark structure is fitted with state-of-the-art intelligent BMS (Building Management System) and seismic dampers.',
    handoverDate: 'Fully Active (Delivered 2024)',
    roadWidth: '120 Feet Main Gulshan Avenue',
    carParking: 'Four floors under-ground (150 spaces)',
    facing: 'South-East Commercial Facing',
    specifications: [
      { label: 'Wind Tunnel Proof', value: 'Withstands cyclonic winds up to 260 km/h', icon: <Layers size={14} /> },
      { label: 'Automation Level', value: 'Fully automated Honeywell IoT system', icon: <Sliders size={14} /> }
    ],
    floorLayout: [
      {
        unitName: 'Corporate Hall Floor',
        beds: 'Grand Open Space',
        baths: '8 Executive Baths',
        size: '10,000 sft',
        facing: '360-degree Gulshan Sky-view',
        highlights: ['Zero column open layout', 'Fiber optic dynamic backbone'],
        layoutSvgPlaceholder: {
          rooms: [
            { name: 'East Wing Offices', x: 5, y: 5, w: 40, h: 80, color: 'bg-emerald-500/10 border-emerald-500/30' },
            { name: 'West Wing Hallways', x: 50, y: 5, w: 45, h: 80, color: 'bg-purple-500/10 border-purple-500/30' }
          ]
        }
      }
    ]
  },
  {
    id: 'bldg6',
    title: 'Sikder Imperial Heights',
    location: 'Block-F, Main Road, Banani, Dhaka',
    locationZone: 'Gulshan & Banani',
    category: 'Residential',
    landArea: '9 Katha',
    apartmentSizes: '2,950 sft to 3,400 sft Executive Flats',
    stories: 'Double Basement + Ground + 12 Stories Premium Residences',
    status: 'Upcoming',
    image: bananiHighriseImg,
    imageFront: bananiHighriseImg,
    imageBack: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    imageDetail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    tagline: 'Sophisticated modern aesthetics curated for upper-crust lifestyle',
    description: 'An upcoming exclusive condominium complex offering intelligent automatic biometric access, integrated thermal insulation blocks, and premium marble lobbies throughout.',
    handoverDate: 'May 2029',
    roadWidth: '50 Feet Road',
    carParking: '2 Dedicated spots per Flat',
    facing: 'South facing corner',
    specifications: [
      { label: 'Green Certification', value: 'Planned LEED Gold-certified layout', icon: <Compass size={14} /> },
      { label: 'HVAC Standard', value: 'Pre-installed copper pipe manifolds for high-efficiency VRF', icon: <Sliders size={14} /> }
    ],
    floorLayout: [
      {
        unitName: 'Executive Flat Unit A',
        beds: '3 Large Beds',
        baths: '4 Baths',
        size: '3,400 sft',
        facing: 'South-East corner',
        highlights: ['Walk-in functional wardrobes', 'Fully customized modular pantry'],
        layoutSvgPlaceholder: {
          rooms: [
            { name: 'Executive Master', x: 10, y: 15, w: 40, h: 40, color: 'bg-emerald-500/10 border-emerald-500/30' },
            { name: 'Family Lounge', x: 55, y: 15, w: 35, h: 40, color: 'bg-purple-500/10 border-purple-500/30' }
          ]
        }
      }
    ]
  },
  {
    id: 'bldg7',
    title: 'Sikder Diplomatic Haven',
    location: 'United Nations Road, Baridhara Diplomatic Zone, Dhaka',
    locationZone: 'Gulshan & Banani',
    category: 'Residential',
    landArea: '14 Katha',
    apartmentSizes: '5,000 sft Super Luxury Sky Villas',
    stories: 'Basement + Ground + 9 Stories Boutique Landmark',
    status: 'Completed',
    image: baridharaDuplexImg,
    imageFront: baridharaDuplexImg,
    imageBack: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
    imageDetail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    tagline: 'Exquisite luxury apartments for elite diplomats and business leaders',
    description: 'Constructed with bullet-resistant composite safety glass panels, state-of-the-art secure air locks, high-capacity centralized solar hot water pipes, and imported Italian white carrarra floors.',
    handoverDate: 'Completed (Ready to Move)',
    roadWidth: '60 Feet Road',
    carParking: '3 Car Slots per Villa',
    facing: 'South Facing Garden View',
    specifications: [
      { label: 'Security Shield', value: 'Armored external glass panels and bulletproof gate', icon: <Award size={14} /> }
    ],
    floorLayout: [
      {
        unitName: 'Diplomatic Sky Villa',
        beds: '5 En-Suite Beds',
        baths: '6 Premium Baths',
        size: '5,000 sft',
        facing: 'South-West Lake Breeze',
        highlights: ['Private elevator opening lobby', 'Jacuzzi pool deck'],
        layoutSvgPlaceholder: {
          rooms: [
            { name: 'Ballistic Master Room', x: 10, y: 15, w: 40, h: 40, color: 'bg-emerald-500/10 border-emerald-500/30' },
            { name: 'Grand Sky Garden', x: 10, y: 60, w: 85, h: 30, color: 'bg-green-500/10 border-green-500/30' }
          ]
        }
      }
    ]
  },
  {
    id: 'bldg8',
    title: 'Sikder Eco-Breeze Garden',
    location: 'Sector 3 (Opposite Park), Uttara, Dhaka',
    locationZone: 'Uttara & Purbachal',
    category: 'Eco-Green',
    landArea: '7 Katha',
    apartmentSizes: '1,850 sft to 2,200 sft Eco Smart flats',
    stories: 'Ground + 10 Stories Sustainable Residential Units',
    status: 'Ongoing',
    image: uttaraComplexImg,
    imageFront: uttaraComplexImg,
    imageBack: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80',
    imageDetail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    tagline: 'Biophilic architecture embracing natural sunlight and clean recycled breeze',
    description: 'Sikder Group\'s award-winning green housing project in Uttara, featuring organic waste composting units, water recycler networks, and dual-pane thermal windows.',
    handoverDate: 'September 2028',
    roadWidth: '40 Feet Wide Sector Road',
    carParking: '1 Dedicated Slot per Apartment',
    facing: 'North Facing Overlooking Green Park',
    specifications: [
      { label: 'Solar Harness', value: 'Rooftop monocrystalline smart solar farm (15 kW)', icon: <Activity size={14} /> },
      { label: 'Carbon footprint', value: 'Reduced by 40% via cellular light concrete blocks', icon: <Compass size={14} /> }
    ],
    floorLayout: [
      {
        unitName: 'Eco Suite',
        beds: '3 Beds',
        baths: '3 Baths',
        size: '2,200 sft',
        facing: 'East Facing Park View',
        highlights: ['Recycled greywater flush routing', 'Aromatic jasmine terrace wall'],
        layoutSvgPlaceholder: {
          rooms: [
            { name: 'Green Master Bed', x: 10, y: 20, w: 45, h: 35, color: 'bg-emerald-500/10 border-emerald-500/30' },
            { name: 'Wellness Sitting', x: 60, y: 20, w: 30, h: 35, color: 'bg-[#3A1D4D]/10 border-[#3A1D4D]/30' }
          ]
        }
      }
    ]
  }
];

const CONSTRUCTION_SUGGESTION_IMAGES = [
  { label: 'Gulshan Highrise', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80' },
  { label: 'Premium Luxury Condo', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80' },
  { label: 'Skyscraper Facade', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  { label: 'Eco biophilic garden lobby', url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },
  { label: 'Luxury Penthouse Atrium', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' }
];

interface ConstructionProjectsPageProps {
  onBack: () => void;
}

const ConstructionProjectsPage: React.FC<ConstructionProjectsPageProps> = ({ onBack }) => {
  const [categories, setCategories] = useState<ConstructionProject[]>(() => {
    // Bump version to v3 to bypass older cached data containing 'Sikder Green Solis Tower'
    const saved = localStorage.getItem('sikder_construction_projects_v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Additional safety layer: strictly filter out any leftover 'bldg3' or 'Sikder Green Solis Tower'
          const filtered = parsed.filter((p: any) => p.id !== 'bldg3' && !p.title.toLowerCase().includes('solis'));
          return filtered.map((item: ConstructionProject) => {
            const defItem = initialConstructionProjects.find(d => d.id === item.id);
            if (defItem) {
              return {
                ...item,
                image: defItem.image,
                imageFront: defItem.imageFront || item.imageFront,
                imageBack: defItem.imageBack || item.imageBack,
                imageDetail: defItem.imageDetail || item.imageDetail
              };
            }
            return item;
          });
        }
      } catch (e) {
        // use default
      }
    }
    return initialConstructionProjects;
  });

  // Anwar Landmark Filter & Search states
  const [statusFilter, setStatusFilter] = useState<'All' | 'Ongoing' | 'Completed' | 'Upcoming'>('All');
  const [typeFilter, setTypeFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Mixed-Use' | 'Eco-Green'>('All');
  const [locationFilter, setLocationFilter] = useState<'All' | 'Gulshan & Banani' | 'Dhanmondi' | 'Bashundhara' | 'Uttara & Purbachal'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [selectedProject, setSelectedProject] = useState<ConstructionProject | null>(null);
  const [selectedLayoutUnit, setSelectedLayoutUnit] = useState<number>(0);
  const [submittedCatalog, setSubmittedCatalog] = useState<boolean>(false);
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: 'Anytime',
    message: ''
  });

  // States for Image editor modal (for administrative back-office edits)
  const [editingItem, setEditingItem] = useState<ConstructionProject | null>(null);
  const [imageUrlInput, setImageUrlInput] = useState<string>('');
  const [imageTitleInput, setImageTitleInput] = useState<string>('');
  const [imageLocationInput, setImageLocationInput] = useState<string>('');
  const [imageDescriptionInput, setImageDescriptionInput] = useState<string>('');
  const [imageFrontInput, setImageFrontInput] = useState<string>('');
  const [imageBackInput, setImageBackInput] = useState<string>('');
  const [imageDetailInput, setImageDetailInput] = useState<string>('');

  const saveProjectsToStorage = (updated: ConstructionProject[]) => {
    setCategories(updated);
    localStorage.setItem('sikder_construction_projects_v3', JSON.stringify(updated));
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setSelectedLayoutUnit(0);
    setSubmittedCatalog(false);
    setLeadFormData({
      name: '',
      phone: '',
      email: '',
      preferredTime: 'Anytime',
      message: ''
    });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadFormData.name || !leadFormData.phone) {
      alert('Please enter your Name and Mobile Number.');
      return;
    }
    setSubmittedCatalog(true);
  };

  // Convert File upload to Base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageUrlInput(reader.result);
          setImageFrontInput(reader.result);
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
          image: imageFrontInput || imageUrlInput,
          imageFront: imageFrontInput || imageUrlInput,
          imageBack: imageBackInput,
          imageDetail: imageDetailInput,
          title: imageTitleInput,
          location: imageLocationInput,
          description: imageDescriptionInput
        };
      }
      return cat;
    });
    saveProjectsToStorage(updated);
    if (selectedProject && selectedProject.id === editingItem.id) {
      setSelectedProject({
        ...selectedProject,
        image: imageFrontInput || imageUrlInput,
        imageFront: imageFrontInput || imageUrlInput,
        imageBack: imageBackInput,
        imageDetail: imageDetailInput,
        title: imageTitleInput,
        location: imageLocationInput,
        description: imageDescriptionInput
      });
    }
    setEditingItem(null);
  };

  const handleAddNewSegment = () => {
    const nextId = `construction-segment-${Date.now()}`;
    const newSegment: ConstructionProject = {
      id: nextId,
      title: 'Sikder Elite Smart Residence',
      location: 'Block-H, Sector-3, Uttara R/A, Dhaka',
      locationZone: 'Uttara & Purbachal',
      category: 'Residential',
      landArea: '6.5 Katha',
      apartmentSizes: '2,200 sft & 2,800 sft',
      stories: 'Basement + Ground + 12 Stories',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      imageFront: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      imageBack: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
      imageDetail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      tagline: 'Modern luxury biophilic design crafted by Sikder Corporations',
      description: 'An elite landmark with heavy piling foundations, double glazed insulated security glass blocks, and high performance high speed internal elevator modules.',
      handoverDate: 'December 2028',
      roadWidth: '50 Feet Road',
      carParking: '2 Dedicated spots per Flat',
      facing: 'South facing corner',
      specifications: [
        { label: 'Structural Standard', value: 'RAJUK compliant seismic-safe shear walls', icon: <Layers size={14} /> },
        { label: 'Energy system', value: 'Dynamic rooftop Solar installation powering grids', icon: <Compass size={14} /> }
      ],
      floorLayout: [
        {
          unitName: 'Luxury Block Suite',
          beds: '3 Large Beds',
          baths: '4 Modern Baths',
          size: '2,800 sft',
          facing: 'South-Facing Lakeview',
          highlights: ['Double height terrace garden balconies', 'Armored core steel safety locks'],
          layoutSvgPlaceholder: {
            rooms: [
              { name: 'Master Bedroom', x: 10, y: 15, w: 40, h: 40, color: 'bg-emerald-500/10 border-emerald-500/30' },
              { name: 'Panoramic sitting Lounge', x: 55, y: 15, w: 35, h: 40, color: 'bg-[#3A1D4D]/10 border-[#3A1D4D]/30' }
            ]
          }
        }
      ]
    };
    saveProjectsToStorage([...categories, newSegment]);
  };

  const handleDeleteSegment = (id: string) => {
    if (confirm('Are you sure you want to delete this construction project?')) {
      const updated = categories.filter(cat => cat.id !== id);
      saveProjectsToStorage(updated);
      setEditingItem(null);
    }
  };

  const handleResetToDefault = () => {
    if (confirm('Reset to default projects and photos? This will undo all changes.')) {
      saveProjectsToStorage(initialConstructionProjects);
      setEditingItem(null);
    }
  };

  // Search and Filter computation mimicking Anwar Landmark Projects Directory Engine
  const filteredProjects = categories.filter(proj => {
    const matchesStatus = statusFilter === 'All' || proj.status === statusFilter;
    const matchesType = typeFilter === 'All' || proj.category === typeFilter;
    const matchesLocation = locationFilter === 'All' || proj.locationZone === locationFilter;
    
    const token = searchQuery.trim().toLowerCase();
    const matchesSearch = !token || 
      proj.title.toLowerCase().includes(token) || 
      proj.location.toLowerCase().includes(token) || 
      proj.tagline.toLowerCase().includes(token) ||
      proj.description.toLowerCase().includes(token) ||
      proj.apartmentSizes.toLowerCase().includes(token);

    return matchesStatus && matchesType && matchesLocation && matchesSearch;
  });

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-24 pb-32 selection:bg-[#3A1D4D] selection:text-white">
      {/* Editorial Navigation / Top Line */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button 
            type="button"
            id="back-to-companies-btn"
            onClick={onBack}
            className="flex items-center gap-2 text-brand-purple hover:text-brand-green font-bold text-sm bg-white px-6 py-3.5 rounded-full shadow-sm border border-slate-200/40 transition-all hover:scale-102 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span>Back to Sikder Group Main Directory</span>
          </button>
          
          <div className="flex items-center gap-2 bg-[#3A1D4D]/10 text-brand-purple px-4 py-2 rounded-full border border-brand-purple/20">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-[10px] font-black tracking-widest uppercase font-mono">Sikder Real Estate & Developers</span>
          </div>
        </div>
      </div>

      {/* Anwar Landmark Inspired Hero Banner Section */}
      <section className="container mx-auto px-4 mb-16 text-center max-w-5xl">
        <div className="inline-flex items-center gap-1.5 bg-[#6C8B3C]/10 text-[#6C8B3C] text-[10px] font-black tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-4">
          <Building size={12} />
          <span>Premier Bangladeshi Developer</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
          Sikder Building Tech &<br />
          <span className="text-brand-purple italic">Constructions Ltd</span>
        </h1>
        <div className="w-20 h-[3px] bg-brand-green mx-auto mb-8 rounded-full"></div>
        <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg font-medium leading-relaxed">
          Replicating state-of-the-art organic living systems. View our luxury residential condominium projects, high-end green boutique homes, and futuristic smart workplace commercial hubs across premium sectors of Dhaka City.
        </p>

        {/* Global Stats bar - Elegant minimalist styling */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 bg-white/70 backdrop-blur-sm border border-slate-200/50 p-6 rounded-[2rem] shadow-sm">
          <div className="p-3 border-r border-slate-200/50 last:border-0">
            <div className="text-[22px] lg:text-[26px] text-brand-purple font-black">1.8M+ SFT</div>
            <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Planned Area</div>
          </div>
          <div className="p-3 lg:border-r border-slate-200/50 last:border-0">
            <div className="text-[22px] lg:text-[26px] text-[#6C8B3C] font-black">100% RAJUK</div>
            <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">BNBC Seismic Compliant</div>
          </div>
          <div className="p-3 border-r border-slate-200/50 last:border-0">
            <div className="text-[22px] lg:text-[26px] text-slate-800 font-black">8+ ACTIVE</div>
            <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Landed projects in dhaka</div>
          </div>
          <div className="p-3">
            <div className="text-[22px] lg:text-[26px] text-brand-purple font-black">380+ FAMILIES</div>
            <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Placed in Bashundhara & Gulshan</div>
          </div>
        </div>
      </section>

      {/* Anwar Landmark Multi-Tier Projects Directory Control Panel */}
      <section className="container mx-auto px-4 mb-12 max-w-7xl">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
            <Sliders className="text-brand-purple" size={18} />
            <span className="text-xs font-black uppercase text-slate-800 tracking-wider">Sikder Project Finder</span>
            <span className="text-[10px] text-slate-400 font-semibold ml-auto">{filteredProjects.length} Projects found</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search inputs */}
            <div className="flex flex-col">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">Search Name or Keyword</label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Signature Heights, 3200 sft..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-700 outline-none focus:border-brand-purple focus:bg-white transition-all font-sans"
                />
              </div>
            </div>

            {/* Status Tabs filter */}
            <div className="flex flex-col">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">Project Handover Status</label>
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-700 outline-none focus:border-brand-purple focus:bg-white transition-all font-sans cursor-pointer"
              >
                <option value="All">All Projects</option>
                <option value="Ongoing">Ongoing Projects</option>
                <option value="Completed">Completed Projects</option>
                <option value="Upcoming">Upcoming Projects</option>
              </select>
            </div>

            {/* Category selection filter */}
            <div className="flex flex-col">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">Architectural Type</label>
              <select 
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-700 outline-none focus:border-brand-purple focus:bg-white transition-all font-sans cursor-pointer"
              >
                <option value="All">All Types</option>
                <option value="Residential">Residential Condos</option>
                <option value="Commercial">Commercial Tower</option>
                <option value="Mixed-Use">Mixed-Use Highrise</option>
                <option value="Eco-Green">Eco-Green Smart Homes</option>
              </select>
            </div>

            {/* Location selector filter */}
            <div className="flex flex-col">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">Dhaka Location Zone</label>
              <select 
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-700 outline-none focus:border-brand-purple focus:bg-white transition-all font-sans cursor-pointer"
              >
                <option value="All">All Dhaka Locations</option>
                <option value="Gulshan & Banani">Gulshan & Banani</option>
                <option value="Dhanmondi">Dhanmondi Lakhshore</option>
                <option value="Bashundhara">Bashundhara R/A</option>
                <option value="Uttara & Purbachal">Uttara & Purbachal</option>
              </select>
            </div>
          </div>

          {/* Quick Active Tags badge display */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-slate-100">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mr-2">Quick Filters:</span>
            {statusFilter !== 'All' && (
              <button onClick={() => setStatusFilter('All')} className="bg-[#3A1D4D]/10 hover:bg-[#3A1D4D]/20 text-[#3A1D4D] text-[9px] font-black uppercase px-2.5 py-1 rounded-full transition-colors">
                Status: {statusFilter} ✕
              </button>
            )}
            {typeFilter !== 'All' && (
              <button onClick={() => setTypeFilter('All')} className="bg-brand-green/20 hover:bg-brand-green/30 text-brand-purple text-[9px] font-black uppercase px-2.5 py-1 rounded-full transition-colors">
                Type: {typeFilter} ✕
              </button>
            )}
            {locationFilter !== 'All' && (
              <button onClick={() => setLocationFilter('All')} className="bg-[#6C8B3C]/15 hover:bg-[#6C8B3C]/25 text-[#6C8B3C] text-[9px] font-black uppercase px-2.5 py-1 rounded-full transition-colors">
                Zone: {locationFilter} ✕
              </button>
            )}
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="bg-slate-100 hover:bg-slate-200 text-slate-500 text-[9px] font-black uppercase px-2.5 py-1 rounded-full transition-colors">
                Keyword: "{searchQuery}" ✕
              </button>
            )}
            {statusFilter === 'All' && typeFilter === 'All' && locationFilter === 'All' && !searchQuery && (
              <span className="text-[10px] text-slate-400 font-semibold bg-slate-50 px-3 py-1 rounded-full border border-slate-100">Browsing all premium real estate assets</span>
            )}

            {/* Backoffice administration buttons */}
            <div className="sm:ml-auto flex items-center gap-2 mt-2 sm:mt-0">
              <button 
                type="button"
                onClick={handleAddNewSegment}
                className="bg-[#6C8B3C] hover:bg-[#3A1D4D] text-white text-[9px] font-black tracking-wider uppercase px-3 py-2 rounded-xl transition-colors shadow-sm flex items-center gap-1 cursor-pointer"
              >
                <Plus size={10} />
                <span>Add Custom Project</span>
              </button>
              <button 
                type="button"
                onClick={handleResetToDefault}
                className="bg-slate-100 hover:bg-slate-200 text-slate-500 text-[9px] font-bold uppercase px-3 py-2 rounded-xl transition-colors cursor-pointer"
                title="Reset photos to standard high-quality views"
              >
                Reset Default
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Anwar Landmark Custom Organic Card Grid */}
      <section className="container mx-auto px-4 max-w-7xl mb-20">
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-2xl mx-auto">
            <Info className="text-brand-purple mx-auto mb-4" size={32} />
            <h3 className="text-base font-black text-slate-800 mb-2">No Projects Found</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              No residential or commercial buildings match your current filter criteria. Please try different filters.
            </p>
          </div>
        ) : (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl overflow-hidden group flex flex-col justify-between transition-all duration-300"
                >
                  {/* Photo container styled for photogenic architecture showcase */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 border-b border-slate-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                    {/* Left overlay badge indicating exact development segment */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                      <span className="bg-slate-900/90 text-white font-black text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full backdrop-blur border border-white/10 shadow-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                        <span>{project.status}</span>
                      </span>
                    </div>

                    {/* Right overlay badge indicating zoning */}
                    <span className="absolute top-4 right-4 z-10 bg-[#3A1D4D] text-white font-bold text-[8px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                      {project.category}
                    </span>

                    {/* Elegant floating photo overlay button on hovering */}
                    <div 
                      onClick={() => {
                        setSelectedProject(project);
                        setSelectedLayoutUnit(0);
                      }}
                      className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center cursor-pointer z-20"
                    >
                      <Eye className="text-white mb-2" size={24} />
                      <span className="bg-[#6C8B3C] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 shadow-lg">
                        View Details
                      </span>
                    </div>

                    {/* Inside-photo bottom-left title info overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 pointer-events-none">
                      <span className="text-[9px] font-black text-brand-green tracking-widest uppercase mb-1 block">
                        {project.locationZone} • DIAL +880-96-SIKDER
                      </span>
                      <h3 className="text-lg font-black tracking-tight drop-shadow-sm truncate">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body content with precise specifications grid similar to Anwar Landmark */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Location bar */}
                      <div className="flex items-start gap-1.5 mb-3">
                        <MapPin className="text-[#6C8B3C] shrink-0 mt-0.5" size={14} />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-tight truncate">
                          {project.location}
                        </span>
                      </div>

                      <p className="text-slate-500 text-xs font-semibold leading-relaxed mb-4 line-clamp-2 italic">
                        "{project.tagline}"
                      </p>

                      {/* Precise Grid Specs */}
                      <div className="grid grid-cols-2 gap-3 mb-6 bg-[#FAF9F5] p-4 rounded-2xl border border-slate-200/50">
                        <div>
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Land Area</span>
                          <span className="text-[11px] font-extrabold text-slate-800 block truncate">{project.landArea}</span>
                        </div>
                        <div>
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Apartment Sizes</span>
                          <span className="text-[11px] font-extrabold text-slate-800 block truncate">{project.apartmentSizes.split('&')[0]} sft</span>
                        </div>
                        <div>
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Total Heights</span>
                          <span className="text-[11px] font-extrabold text-brand-purple block truncate">{project.stories.split(' ')[0]} Stories</span>
                        </div>
                        <div>
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Facing</span>
                          <span className="text-[11px] font-extrabold text-[#6C8B3C] block truncate">{project.facing || 'South-Facing'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action panel triggers */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProject(project);
                          setSelectedLayoutUnit(0);
                        }}
                        className="w-full bg-[#3A1D4D] text-white hover:bg-brand-green py-3 px-4 rounded-xl text-[10px] font-extrabold tracking-widest uppercase transition-all duration-300 shadow flex items-center justify-center gap-1 text-center cursor-pointer active:scale-98"
                      >
                        <span>View Details</span>
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Anwar Landmark Immersive Multi-Angle Detailed Walkthrough Showcase Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseProject}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 cursor-pointer"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-3xl max-w-6xl w-full max-h-[95vh] md:max-h-[90vh] overflow-hidden border border-slate-200/80 flex flex-col md:flex-row shadow-2xl cursor-default"
            >
              
              {/* LEFT SIDE: Architectural Viewport Pane (Fully Clean & Minimalist Showcase) */}
              <div className="w-full md:w-6/12 bg-slate-950 relative overflow-hidden flex flex-col justify-between shrink-0 self-stretch min-h-[350px] md:min-h-0">
                
                {/* Photo Viewer */}
                <div className="relative flex-grow flex items-center justify-center bg-slate-950 overflow-hidden group h-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none"></div>

                  {/* Left HUD indicators */}
                  <div className="absolute top-6 left-6 z-10 flex flex-col gap-1.5">
                    <span className="bg-slate-950/85 backdrop-blur-md text-[8px] font-black tracking-widest text-[#6C8B3C] uppercase px-4 py-2 rounded-full border border-white/10 shadow-lg">
                      PROJECT STAGE: {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>


              {/* RIGHT SIDE: Complete Technical Specsheets & Inquiry Form */}
              <div className="w-full md:w-6/12 p-6 md:p-8 overflow-y-auto flex flex-col justify-between bg-slate-50 border-l border-slate-100 max-h-[60vh] md:max-h-[90vh]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[#6C8B3C] font-extrabold text-[9px] tracking-[0.25em] uppercase block mb-1">
                        Sikder Real Estate & constructions Ltd
                      </span>
                      <div className="inline-flex items-center gap-1.5 bg-[#3A1D4D]/10 text-[#3A1D4D] text-[9px] font-black uppercase px-2.5 py-1 rounded-full">
                        {selectedProject.status} • {selectedProject.category}
                      </div>
                    </div>
                    
                    <button 
                      type="button"
                      onClick={handleCloseProject}
                      className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-400 hover:text-slate-800 cursor-pointer shrink-0"
                      title="Close"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-6 mb-2">
                    {selectedProject.title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-500 pb-3 border-b border-slate-200/60 mb-4">
                    <MapPin size={12} className="text-brand-green shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider truncate text-slate-600">{selectedProject.location}</span>
                  </div>

                  {/* Specifications and stats list block */}
                  <div className="space-y-4">
                    <div className="text-xs text-slate-600 font-medium leading-relaxed bg-white border border-slate-200/50 p-4 rounded-2xl">
                      <p className="text-slate-800 font-bold border-l-2 border-[#3A1D4D] pl-3 italic mb-2">
                        "{selectedProject.tagline}"
                      </p>
                      <p className="text-slate-600 font-semibold leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Architectural Table specifications list */}
                    <div className="bg-white border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm">
                      <div className="bg-[#3A1D4D] text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                        <Grid3X3 size={11} />
                        <span>Project Overview Table</span>
                      </div>
                      <div className="divide-y divide-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                        <div className="flex justify-between p-3"><span className="text-slate-400">Land Area</span><span className="text-slate-800">{selectedProject.landArea}</span></div>
                        <div className="flex justify-between p-3"><span className="text-slate-400">Apartment Size</span><span className="text-slate-800">{selectedProject.apartmentSizes}</span></div>
                        <div className="flex justify-between p-3"><span className="text-slate-400">Building Height</span><span className="text-slate-800">{selectedProject.stories}</span></div>
                        <div className="flex justify-between p-3"><span className="text-slate-400">Expected Handover</span><span className="text-brand-purple">{selectedProject.handoverDate || 'December 2028'}</span></div>
                        <div className="flex justify-between p-3"><span className="text-slate-400">Facing & Access Road</span><span className="text-slate-800">{selectedProject.facing} - {selectedProject.roadWidth || '60 Feet'}</span></div>
                      </div>
                    </div>

                    {/* Structural Standards specifications (Dynamic specs checkmarked) */}
                    <div className="bg-white border border-slate-200/50 p-4 rounded-2xl shadow-sm">
                      <span className="text-[10px] font-black text-[#3a1d4d] tracking-widest uppercase block mb-3">Concrete & Safety Standards (BNBC-Safe)</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {selectedProject.specifications.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-1.5 border-b border-slate-50 pb-1.5">
                            <span className="text-emerald-500 font-extrabold">✓</span>
                            <span>{spec.label}: <strong className="text-slate-700">{spec.value}</strong></span>
                          </div>
                        ))}
                        <div className="flex items-center gap-1.5 border-b border-slate-50 pb-1.5"><span className="text-emerald-500 font-extrabold">✓</span><span>Lift speed: 2.0 m/s Sigma Vvvf</span></div>
                        <div className="flex items-center gap-1.5 border-b border-slate-50 pb-1.5"><span className="text-emerald-500 font-extrabold">✓</span><span>Generator: Auto changeover</span></div>
                      </div>
                    </div>

                    {/* Dynamic CAD blueprint simulator panel */}
                    <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 border border-slate-800">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-white/10 pb-3 mb-3">
                        <div>
                          <span className="text-[8px] font-bold text-brand-green uppercase tracking-wider block">CAD INTERACTIVE LAYOUT</span>
                          <span className="text-[10px] font-black tracking-widest uppercase text-white">Select Layout Unit Map</span>
                        </div>
                        
                        {/* Selector Tabs for units */}
                        <div className="flex gap-1.5">
                          {selectedProject.floorLayout.map((unit, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedLayoutUnit(idx)}
                              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider transition-colors cursor-pointer ${
                                selectedLayoutUnit === idx 
                                  ? 'bg-white text-slate-900 font-black' 
                                  : 'bg-white/10 text-slate-400 hover:bg-white/20'
                              }`}
                            >
                              {unit.unitName}
                            </button>
                          ))}
                        </div>
                      </div>

                      {selectedProject.floorLayout[selectedLayoutUnit] && (
                        <div>
                          <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 mb-3 uppercase tracking-wide">
                            <span>Sizes: {selectedProject.floorLayout[selectedLayoutUnit].size}</span>
                            <span>Facing: {selectedProject.floorLayout[selectedLayoutUnit].facing}</span>
                          </div>

                          {/* CAD canvas scheme rendering rooms */}
                          <div className="relative aspect-[2/1] bg-slate-950 border border-slate-800 rounded-xl overflow-hidden p-2 mb-3">
                            <div className="absolute top-1.5 right-1.5 text-[7px] tracking-widest uppercase font-mono text-brand-green animate-pulse">
                              CAD DIAGRAM LIVE
                            </div>
                            
                            <div className="w-full h-full relative border border-dashed border-white/5 rounded">
                              {selectedProject.floorLayout[selectedLayoutUnit].layoutSvgPlaceholder.rooms.map((room, rIdx) => (
                                <div
                                  key={rIdx}
                                  style={{
                                    left: `${room.x}%`,
                                    top: `${room.y}%`,
                                    width: `${room.w}%`,
                                    height: `${room.h}%`,
                                    position: 'absolute'
                                  }}
                                  className={`border rounded flex flex-col justify-center items-center text-center p-0.5 transition-all hover:bg-white/5 ${room.color}`}
                                >
                                  <span className="text-[7px] font-bold uppercase tracking-wider block text-white truncate w-full">{room.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key amenities check-list */}
                          <div className="grid grid-cols-2 gap-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                            {selectedProject.floorLayout[selectedLayoutUnit].highlights.map((hlt, hIdx) => (
                              <div key={hIdx} className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-[#6C8B3C]"></span>
                                <span>{hlt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Secure Customer Inquiry / Booking Lead Module */}
                <div className="pt-6 border-t border-slate-200 mt-6 md:mt-8">
                  {submittedCatalog ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center text-emerald-800"
                    >
                      <CheckCircle className="text-emerald-500 mx-auto mb-2" size={24} />
                      <h4 className="text-xs font-black uppercase tracking-wider mb-1">Inquiry Submitted Successfully</h4>
                      <p className="text-[10px] leading-relaxed font-medium">
                        Thank you {leadFormData.name || 'valued customer'}! Sikder Group's sales team will contact you back on <strong>{leadFormData.phone}</strong> within 24 hours to coordinate your request and share full brochure documents.
                      </p>
                    </motion.div>
                  ) : (
                    <div>
                      <span className="text-[10px] font-black text-brand-purple tracking-widest uppercase block mb-3">
                        Request Private Site-Tour or Premium Brochure
                      </span>

                      <form onSubmit={handleLeadSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={12} />
                            <input 
                              type="text" 
                              value={leadFormData.name}
                              onChange={(e) => setLeadFormData({...leadFormData, name: e.target.value})}
                              placeholder="Your Name *"
                              required
                              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-700 outline-none focus:border-brand-purple font-sans"
                            />
                          </div>

                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={12} />
                            <input 
                              type="tel" 
                              value={leadFormData.phone}
                              onChange={(e) => setLeadFormData({...leadFormData, phone: e.target.value})}
                              placeholder="Mobile Number *"
                              required
                              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-700 outline-none focus:border-brand-purple font-sans"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={12} />
                            <input 
                              type="email" 
                              value={leadFormData.email}
                              onChange={(e) => setLeadFormData({...leadFormData, email: e.target.value})}
                              placeholder="Email Address"
                              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-700 outline-none focus:border-brand-purple font-sans"
                            />
                          </div>

                          <div>
                            <select
                              value={leadFormData.preferredTime}
                              onChange={(e) => setLeadFormData({...leadFormData, preferredTime: e.target.value})}
                              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-500 outline-none focus:border-brand-purple font-sans"
                            >
                              <option value="Anytime">Callback Preferred: Anytime</option>
                              <option value="Morning">Callback Preferred: Morning (9 AM - 12 PM)</option>
                              <option value="Afternoon">Callback Preferred: Afternoon (12 PM - 5 PM)</option>
                              <option value="Evening">Callback Preferred: Evening (5 PM - 8 PM)</option>
                            </select>
                          </div>
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-[#3A1D4D] hover:bg-[#6C8B3C] text-white py-3 px-5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest shadow-md transition-all duration-300 transform active:scale-98 cursor-pointer text-center flex items-center justify-center gap-1"
                        >
                          <span>Confirm Request Tour & Price Sheet</span>
                          <ChevronRight size={14} />
                        </button>
                      </form>
                    </div>
                  )}
                  
                  <p className="text-center text-[9px] text-slate-400 font-medium mt-3 uppercase tracking-wider">
                    Sikder Building Tech Security Guarantee &copy; {new Date().getFullYear()} • All Rights Reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACK-OFFICE EDIT DIALOG (Same functionality preserved, but visually aligned to premium spec) */}
      <AnimatePresence>
        {editingItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-[200] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-[#3A1D4D] text-white">
                <div className="flex items-center gap-2">
                  <Camera className="text-brand-green" size={18} />
                  <span className="text-xs font-black uppercase tracking-wider">Edit Project Photo Angles & Meta-data</span>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              <div className="p-6 overflow-y-auto max-h-[70vh] space-y-6 flex-grow">
                <div>
                  <span className="text-[10px] font-black text-[#3A1D4D] uppercase tracking-wider block mb-3 border-b pb-1.5 border-slate-100">
                    Set Primary Project Photo
                  </span>
                  
                  <div className="space-y-4">
                    {/* Primary Photo View */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row gap-4 items-center">
                      <div className="w-20 h-16 shrink-0 bg-slate-950 rounded-lg overflow-hidden border border-slate-200">
                        {imageUrlInput ? (
                          <img src={imageUrlInput} alt="Project View" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400"><ImageIcon size={16} /></div>
                        )}
                      </div>
                      <div className="flex-grow w-full">
                        <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Project Photo Link</label>
                        <input
                          type="text"
                          value={imageUrlInput}
                          onChange={(e) => {
                            setImageUrlInput(e.target.value);
                            setImageFrontInput(e.target.value); // Sync variables for fallback safety
                          }}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-brand-purple animate-none"
                          placeholder="Project overview photo or render URL"
                        />
                      </div>
                    </div>                </div>

                    {/* File uploading triggers */}
                    <div className="p-3 bg-brand-purple/5 border border-brand-purple/10 rounded-xl">
                      <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Upload Local File to Front View</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[9px] file:font-black file:uppercase file:bg-purple-100 file:text-brand-purple hover:file:bg-purple-200 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Suggestions Row */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Or Choose from Curated Suggestion Photos</label>
                  <div className="flex flex-wrap gap-1.5">
                    {CONSTRUCTION_SUGGESTION_IMAGES.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => {
                          setImageFrontInput(sug.url);
                          setImageUrlInput(sug.url);
                        }}
                        className="bg-purple-50 hover:bg-purple-100 hover:border-purple-300 text-brand-purple text-[9px] font-bold px-2.5 py-1.5 border border-purple-100 rounded-lg transition-colors cursor-pointer"
                      >
                        {sug.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title & Location Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Project Name / Title</label>
                    <input
                      type="text"
                      value={imageTitleInput}
                      onChange={(e) => setImageTitleInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-bold focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Exact Project Location</label>
                    <input
                      type="text"
                      value={imageLocationInput}
                      onChange={(e) => setImageLocationInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-bold font-sans focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Project Detailed Description</label>
                  <textarea
                    value={imageDescriptionInput}
                    onChange={(e) => setImageDescriptionInput(e.target.value)}
                    rows={3}
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
                  <span>Delete Block</span>
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

export default ConstructionProjectsPage;
