export interface ProductItem {
  id: string;
  name: string;
  banglaName: string;
  category: 'poultry_equipment' | 'electrical_equipment' | 'industrial_spares';
  categoryLabel: string;
  tag: string;
  image: string;
  shortDescription: string;
  details: string;
  spec: string;
  features: string[];
  parameters: { label: string; value: string }[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "a-frame-cage",
    name: "A Frame Cage",
    banglaName: "এ ফ্রেম লেয়ার ব্যাটারি কেজ",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "HIGH DENSITY REARING",
    image: "src/assets/images/regenerated_image_1780339145004.jpg",
    shortDescription: "Multi-tier heavy hot-galvanized wire battery cages optimized for efficient egg collection.",
    details: "Manufactured from anti-corrosion structural wire conforming to extreme biosecurity guidelines. Minimizes egg cracking rates down to 0.4% using smooth angle collection runways. Perfect for automated layer bird management.",
    spec: "3-Tier or 4-Tier High-Galvanized Cage",
    features: [
      "220g/㎡ heavy zinc coating ensuring over 20-year lifetime",
      "Ergonomically spaced wire meshes preventing biological stress",
      "Dual-channel manure drip guides preventing litter contamination"
    ],
    parameters: [
      { label: "Material Standard", value: "Q235 Hot Galvanized Steel Bridge wire" },
      { label: "Overall Height", value: "1.65 meters to 2.10 meters" },
      { label: "Bird Density Cap", value: "96 to 160 layer birds per cage assembly" }
    ]
  },
  {
    id: "azuma-nut-bolt",
    name: "Azuma Nut and Bolt",
    banglaName: "আজুমা হাই-টেনসিল নাট-বল্টু ও ওয়াশার",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "HEAVY DUTY FASTENERS",
    image: "src/assets/images/regenerated_image_1780339146010.jpg",
    shortDescription: "Premium Japanese standard high-tensile structural bolts for stable shed erections.",
    details: "Imported high-performance mechanical fasteners specifically finished with weather-resistant zinc-alloy coating to withstand heavy friction, ammonia exposure, high vibration dynamic loads.",
    spec: "Grade 8.8 & 10.9 Japanese Standards",
    features: [
      "Extreme corrosion defense with yellow-chromate passivated finish",
      "Flanged load-distribution head with integrated slip locking teeth",
      "Exact-pitch machined threads ensuring zero slip-offs under pressure"
    ],
    parameters: [
      { label: "Thread Diameter", value: "M8, M10, M12, M16 heavy ratings" },
      { label: "Shear Resistance", value: "Up to 800 MPa extreme structural load limits" },
      { label: "Coating Depth", value: "12-15 microns dense anti-moisture plating" }
    ]
  },
  {
    id: "ball-tank",
    name: "Ball Tank",
    banglaName: "পোল্ট্রি ওয়াটার বল ট্যাংক ও ফ্লোট গেয়ার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "WATER REGULATION",
    image: "src/assets/images/regenerated_image_1780339149854.jpg",
    shortDescription: "Header water tanks ensuring stable static drinking pressure without leaks.",
    details: "Compact high-grade plastic float tank equipped with an ultra-reliable mechanical copper ball-cock valve. Keeps water lines completely filled without hydraulic shocks or dry locks.",
    spec: "15L / 25L Durable Polyethylene Tanks",
    features: [
      "Chemical-safe virgin PE prevents mold or bio-layer formulation inside",
      "Adjustable heavy brass leverage rod for precise top-up water levels",
      "Dual-outlet distribution channels matching multi-row water lines"
    ],
    parameters: [
      { label: "Maximum Volume", value: "25 Liters continuous backup" },
      { label: "Internal Valve Type", value: "Anti-rust copper/brass float seal" },
      { label: "Inlet Pipe Fitting", value: "20mm / 25mm slide socket connector" }
    ]
  },
  {
    id: "bat-salter-scale",
    name: "BAT Salter Scale",
    banglaName: "ব্যাট সল্টার ডিজিটাল ক্রেন স্কেল",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "DYNAMIC SCALE MEASURES",
    image: "src/assets/images/regenerated_image_1780339151025.jpg",
    shortDescription: "Dynamic animal weight balance scale featuring smart movement-filter holdings.",
    details: "Professional dynamic weighing crane scale certified for livestock. Integrates electronic dampening software to record accurate live weights within 2 seconds of suspensory movement.",
    spec: "Digital Backlit Waterproof Scale",
    features: [
      "Dynamic livestock weight hold filter ignores bird movement fluctuations",
      "Solid stainless steel load shackles and swivel hooks",
      "High battery backup of 150 hours with auto sleep power safe"
    ],
    parameters: [
      { label: "Weight Boundaries", value: "10 grams up to 300 Kg maximum capacity" },
      { label: "System Accuracy", value: "Professional calibration within +/- 0.05%" },
      { label: "Enclosure Proof", value: "IP67 dust and splash-proof shell" }
    ]
  },
  {
    id: "chain-cutter",
    name: "Chain Cutter",
    banglaName: "হেভি লিঙ্কিং চেইন কাটার",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "FARM SERVICES TOOL",
    image: "src/assets/images/regenerated_image_1780339152211.jpg",
    shortDescription: "Compound-lever forged tools for cutting feeding loop conveyor chains.",
    details: "Hardened chrome-vanadium steel heavy-duty hand cutter. Its custom jaw shape splits feed chain links without leaving messy burrs or metal fatigue splits.",
    spec: "36-Inch Compound Bolt Joint Spliter",
    features: [
      "Drop-forged CR-V heat-treated jaws offering clean cuts",
      "Comfort industrial rubber grips absorb strong kinetic shock backs",
      "Dual lever pivot screws for customizable cutting force adjustments"
    ],
    parameters: [
      { label: "Structural Material", value: "Premium Hardened Chrome-Vanadium Steel" },
      { label: "Cutting Capacity", value: "Up to 12mm thick carbon-alloy chains" },
      { label: "Total Hand Weight", value: "3.4 Kg compact body length" }
    ]
  },
  {
    id: "chain-feeding-motor",
    name: "Chain Feeding Motor 2.2 kW",
    banglaName: "অটোমেটিক ফিডিং চেইন ড্রাইভ মোটর ২.২ কিলোওয়াট",
    category: "electrical_equipment",
    categoryLabel: "Electrical Equipment",
    tag: "HIGH ENERGY DRIVES",
    image: "src/assets/images/regenerated_image_1780339154476.jpg",
    shortDescription: "High startup torque electric drive motor equipped with an integrated cycloidal gearbox.",
    details: "Designed specially to pull feed chain conveying loops smoothly across multi-tier battery tiers. Resists voltage fluctuations and features heavy-duty IP55 copper copper wire coils.",
    spec: "2.2 kW (3.0 HP) Three-Phase Induction Motor",
    features: [
      "High startup inertia torque easily starting heavy carbon steel loops",
      "Continuous runtime capability with very low thermal profile",
      "Integrated cycloidal gear reducer delivering constant slow rotations"
    ],
    parameters: [
      { label: "Power Source", value: "380 Volts three phase 50Hz grid" },
      { label: "Insulation Block", value: "Class F extreme heat resistant standard" },
      { label: "Shaft Torque", value: "180 Nm heavy continuous pull power" }
    ]
  },
  {
    id: "chicken-transfer-crates",
    name: "Chicken Transfer Crates",
    banglaName: "হাই-গ্রেড পোল্ট্রি ট্রান্সফার ক্রেটস / খাঁচা",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "LIVESTOCK TRUCKS",
    image: "src/assets/images/regenerated_image_1780339157019.jpg",
    shortDescription: "Interlocking plastic crates designed to safely transport broilers.",
    details: "High-density molecular plastic structure with circular ventilation slots to prevent heat stress and maximize air flow. Seamless locking sliding doors ensure easy biological loading.",
    spec: "97 x 57 x 27 cm Heavy Polymers",
    features: [
      "Virgin high impact HDPE material prevents stress cracking",
      "Self-locking sliding access lid prevents bird escapees",
      "Anti-slip grid floor protects dynamic bone injuries during transit"
    ],
    parameters: [
      { label: "Holding Capacity", value: "12 to 16 adult heavy broiler birds" },
      { label: "Compress Resistance", value: "Stacks up to 10 layers deep under high load" },
      { label: "Sanitary Cleaning", value: "Highly washable, completely chemical sanitizable" }
    ]
  },
  {
    id: "climate-controller",
    name: "Climate Controller",
    banglaName: "স্মার্ট ডিজিটাল ক্লাইমেট ও অ্যাম্বিভেন্ট প্যানেল",
    category: "electrical_equipment",
    categoryLabel: "Electrical Equipment",
    tag: "SYSTEM AUTOMATION",
    image: "src/assets/images/regenerated_image_1780339160643.jpg",
    shortDescription: "Multi-stage environment computer managing fans and cooling pads.",
    details: "Saves energy while keeping the microclimate stable. Tracks humidity levels, room temperature, ammonia, and static-pressure sensors to trigger output stages.",
    spec: "Advanced Computerized Climate Board",
    features: [
      "Dynamic negative pressure step controls adjust fans smoothly",
      "Visual diagnostic screen with alarm output relays",
      "High voltage surge shielding prevents component blowouts"
    ],
    parameters: [
      { label: "Relay Output Stages", value: "8 to 12 configurable power terminals" },
      { label: "Sensor Range", value: "-10C to 60C at extreme 99% humidity tracking" },
      { label: "Control Voltage", value: "220V standard / optional 24V inputs" }
    ]
  },
  {
    id: "clip-nipple",
    name: "Clip Nipple",
    banglaName: "সহজ ক্লিপ-অন অটোমেটিক নিপল ড্রিংকার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "AUTOMATED DRINKERS",
    image: "src/assets/images/regenerated_image_1780339161678.jpg",
    shortDescription: "Snap-on water nipple drinker for 25mm square PVC conduits with zero leakage.",
    details: "Features highly polished stainless steel inner core pins allowing bi-directional 360-degree trigger flow. Easily snaps over standard PVC conduits without glue.",
    spec: "Quick-Snap Nipple with Leakproof Seals",
    features: [
      "Dual collar rubber seals keep lock connection completely leakproof",
      "Friction resistant medical stainless core pin yields years of wear",
      "360-degree dynamic opening accommodates any bird pecks"
    ],
    parameters: [
      { label: "Target Conduit Pipe", value: "25mm x 25mm PVC square water lines" },
      { label: "Average Flow Rate", value: "70-90 ml/min precise intake dosage" },
      { label: "Seal Grade", value: "Nitrile rubber food-safety standard" }
    ]
  },
  {
    id: "commercial-broiler-control-shed",
    name: "Commercial Broiler Control Shed",
    banglaName: "সম্পূর্ণ অটোমেটিক ক্লাইমেট কন্ট্রোলড ব্রয়লার শেড",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "LARGE INFRASTRUCTURE",
    image: "src/assets/images/regenerated_image_1780339168056.jpg",
    shortDescription: "Turnkey environment-controlled modern containment structures.",
    details: "Engineered from sandwich PU insulation walls, heavy trusses, exhaust grids, feed augers, lock nipples, and smart panels built to maximize bird yield and bio-isolation.",
    spec: "Turnkey Automated 150,000 Bird Structures",
    features: [
      "Thermally insulative sandwich roof profiles maintaining winter warmth",
      "Negative-pressure airflow ducts ensure perfect biological conditions",
      "Fully integrated feed silo auger transport loops"
    ],
    parameters: [
      { label: "Thermal Value", value: "R-16 insulation foam barriers" },
      { label: "Shed Width Specs", value: "12 meters to 15 meters balanced span" },
      { label: "Standard Lengths", value: "90 meters up to 150 meters continuous layout" }
    ]
  },
  {
    id: "cooling-pad",
    name: "Cooling Pad (Imported from China)",
    banglaName: "উন্নত সেলুলোজ এভাপোরেটিভ কুলিং প্যাড",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "CLIMATE VENTILATION",
    image: "src/assets/images/cooling_pads_1781199404889.jpg",
    shortDescription: "Premium cellulose honeycomb wet boards for high cooling efficiency.",
    details: "Sikder Electric & Engineering imports premium-quality Cooling Pads from China and supplies them across Bangladesh. Our Cooling Pads are ideal for poultry farms, greenhouses, dairy farms, and industrial cooling systems, providing efficient cooling, energy savings, and reliable performance. We are committed to delivering quality products and excellent customer service at competitive prices.",
    spec: "150mm High-Density Wet Pads",
    features: [
      "Rigid cross-linked fiber structures preventing structural sagging",
      "High moisture evaporation velocity yields 3C to 8C ambient drops",
      "Special dry protective outer seal prevents mold contamination"
    ],
    parameters: [
      { label: "Thickness Rating", value: "100mm / 150mm dynamic air filters" },
      { label: "Corrugation Wave", value: "45/45 or 50/30 degrees intersection angle" },
      { label: "Cellulose Quality", value: "Original Swedish imported polymer sheets" }
    ]
  },
  {
    id: "cooling-fan",
    name: "Cooling Fan for Poultry Farm (Imported from China)",
    banglaName: "উন্নত পোল্ট্রি ফার্ম কুলিং ফ্যান",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "CLIMATE VENTILATION",
    image: "src/assets/images/regenerated_image_1781203402977.png",
    shortDescription: "Premium high-volume heavy-duty exhaust fans for dynamic ventilation.",
    details: "Sikder Electric & Engineering imports and supplies premium-quality Cooling Fans from China across Bangladesh. Our fans provide powerful airflow, efficient ventilation, and reliable temperature control for poultry farms, greenhouses, and industrial applications. We are committed to delivering quality products at competitive prices with dependable customer support.",
    spec: "Heavy Duty Exhaust & Airflow",
    features: [
      "Balanced heavyweight stainless steel fans yield maximum intake",
      "Heavy-gauge galvanized steel frame structure resists corrosion",
      "High-efficiency low energy consumption motors"
    ],
    parameters: [
      { label: "Fan Blades", value: "6 high grade self-cleaning stainless steel blades" },
      { label: "Voltage Input", value: "380V / 50Hz stable industrial phase input" },
      { label: "Air Delivery Volume", value: "Up to 44,000 m³/h continuous extraction" }
    ]
  },
  {
    id: "dosatron",
    name: "Dosatron",
    banglaName: "ফ্রান্স ডোসাস্ট্রন নিঁখুত ওয়াটার মেডিকেটর",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "DOSING PUMPS",
    image: "src/assets/images/regenerated_image_1780341457105.jpg",
    shortDescription: "Genuine French non-electric proportional dosing pumps for vaccine grids.",
    details: "Runs automatically with water pressure. Dispenses vaccines, probiotics, vitamins, and sanitizers directly into farm lines under precise ratios without electrical grid connections.",
    spec: "DI16 Original French Technology models",
    features: [
      "Entirely hydraulic operation prevents dry run failures",
      "Acid-proof and vaccine-safe viton internal seals and gaskets",
      "Micrometric dial rings allow step adjustments within seconds"
    ],
    parameters: [
      { label: "Dilution Ratio", value: "0.2% up to 2.0% dynamic proportional dosage" },
      { label: "Water Flow Scope", value: "10 Liters/hr up to 2,500 Liters/hour" },
      { label: "Back Operating Pressure", value: "0.3 Bar up to 6.0 Bar pipe pressure" }
    ]
  },
  {
    id: "fermentation-tank",
    name: "Fermentation Tank",
    banglaName: "অর্গানিক ওয়েস্ট ফার্মেন্টেশন ট্যাংক",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "ORGANIC CONVERTORS",
    image: "src/assets/images/regenerated_image_1780341459129.jpg",
    shortDescription: "Biological waste processors turning manure into organic compost.",
    details: "Airtight biological anaerobic fertilizer processing tank. Features dynamic pressure gauges and heavy jacket heaters to cycle farm wastes cleanly into sterilized premium organic powder.",
    spec: "SUS304 Heavy Stainless Tank",
    features: [
      "Continuous internal planetary paddle mixer prevents clumping",
      "Aerated pressure valve controls release biosafety gases cleanly",
      "Heavy thermostatic jackets accelerate decomposition cycles"
    ],
    parameters: [
      { label: "Intake Capacity", value: "2.0 cubic meters to 15.0 cubic meters" },
      { label: "Agitator Motor Power", value: "5.5 kW up to 15.0 kW drive ranges" },
      { label: "Cycle Speed", value: "Fully safe process output in 48 to 72 hours" }
    ]
  },
  {
    id: "water-joint-coupler",
    name: "Water Joint / Coupler",
    banglaName: "ওয়াটার নিপল পাইপ জয়েন্ট ও কাপলার",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "PVC FITTINGS",
    image: "src/assets/images/regenerated_image_1780341461906.jpg",
    shortDescription: "High pressure pipeline expansion couplings with compression seals.",
    details: "Medical grade polymer tube coupler used to interconnect square PVC water line conduits. Heavy silicone seals handle high pressure flushing actions.",
    spec: "25mm Heavy Polymer Coupler",
    features: [
      "Ultra-thick chemical-proof plastic handles strong chlorine farm flushing",
      "Double screw cap locking rings stabilize alignments across long spans",
      "Smooth internal throat prevents mineral deposits and water-flow limits"
    ],
    parameters: [
      { label: "External Diameter", value: "25mm standard square and round pipes" },
      { label: "Max Test Pressure", value: "Up to 10 Bar high static water tests" },
      { label: "Polymer Material", value: "Polyamide (Nylon 6) base with active UV protection" }
    ]
  },
  {
    id: "hatcher-basket",
    name: "Hatcher Basket",
    banglaName: "হ্যাচারি ট্রে ও ট্র্যান্সপোর্ট বাস্কেট",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "HATCHER ACCESSORIES",
    image: "src/assets/images/regenerated_image_1780341463117.jpg",
    shortDescription: "HDPE injection-molded stackable hatchery trays with maximum air ventilation.",
    details: "Durable stacking trays designed specifically for modern industrial chick incubators. Features rounded ventilation perforations to protect eggs, with antibacterial resins.",
    spec: "Virgin Quality PP Stackable Tray",
    features: [
      "High rigidity interlocking clips support smooth mechanical stacking",
      "Rounded ventilation slots provide high air-flows without egg fatigue",
      "Smooth base profiles prevent day-one chick dynamic leg injuries"
    ],
    parameters: [
      { label: "Unit Weight", value: "1.45 kg lightweight plastic block" },
      { label: "Load Hold Specs", value: "Up to 45 kg stacks without sagging" },
      { label: "Standard Colors", value: "High visibility food grade Blue/Red alerts" }
    ]
  },
  {
    id: "twin-lock-nipple",
    name: "Twin Lock Nipple",
    banglaName: "টুইন লক প্রিশিশন ডাবল নিপল ড্রিংকার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "ZERO LEAK WATERERS",
    image: "src/assets/images/regenerated_image_1780341465237.jpg",
    shortDescription: "Heavy flow double ball-lock water nipple with feather-touch opening.",
    details: "Utilizes twin-ball lock mechanisms inside high precision stainless housing. Fully shuts water water drips immediately upon release to maintain dry litter under battery cages.",
    spec: "Double Seated 360-degree Water Conduit Pins",
    features: [
      "Premium triple-seal engineering tolerates high water pressure fluctuations",
      "Highly responsive 360-degree activation triggers day-one chicks",
      "Machined from solid stainless steel bar blocks"
    ],
    parameters: [
      { label: "Opening Pressure", value: "Extremely low 12-15 grams trigger force" },
      { label: "Inner Ball Rating", value: "AISI 304 hardness hardened stainless standard" },
      { label: "Target Water Head", value: "Adjustable 10cm up to 45cm pressure height" }
    ]
  },
  {
    id: "cup-nipple",
    name: "Cup Nipple",
    banglaName: "সাপোর্ট ড্রিংকিং ড্রিপ কাপ ও নিপল সেট",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "BALANCED DRINKERS",
    image: "src/assets/images/regenerated_image_1780339163960.jpg",
    shortDescription: "Integrated automated nipple and ABS drip capture cup set.",
    details: "Keeps farm humidity levels minimal and prevents damp floors. Catches stray water splashes, which is highly suited for layer battery and pullet raising setups.",
    spec: "Dual-Arm ABS Cup Nipple Assembly",
    features: [
      "Broad catchment area catches stray droplets to save dry floors",
      "Single-clip locking hook attaches firmly to square water pipes",
      "Impact proof ABS construction tolerates aggressive pecking"
    ],
    parameters: [
      { label: "Drip Cup Length", value: "Broad 75mm radius dome cup" },
      { label: "Lock Attachment", value: "25mm square PVC push quick lock" },
      { label: "Biological Safety", value: "High grade microbial polymer defense" }
    ]
  },
  {
    id: "water-regulator",
    name: "Water Regulator",
    banglaName: "ওয়াটার প্রেসার অটো রেগুলেটর প্যানেল",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "PRESSURE SAFETY",
    image: "src/assets/images/regenerated_image_1780341467509.jpg",
    shortDescription: "Twin outlet water pressure regulator with a continuous flushing gear switch.",
    details: "Maintains balanced and uniform water flow rates across pipeline installations up to 150 meters. Features central regulatory knobs and transparent vertical indicator lines.",
    spec: "Double Outlet Water Regulatory System",
    features: [
      "Simple rotary lever knob adjusts lines in 0.05 bar gradients",
      "Bottom rapid high velocity flush switch sweeps sediment",
      "Sealed polyurethane diaphragms prevent chemical corrosion"
    ],
    parameters: [
      { label: "Control Ranges", value: "0.1 Bar to 0.4 Bar precise adjustments" },
      { label: "Max Intake Flow", value: "Up to 3,500 L/hr high flow lines" },
      { label: "Level Indicator", value: "Transparent float ball level tube" }
    ]
  },
  {
    id: "manure-belt",
    name: "Manure Belt",
    banglaName: "উন্নত বিষ্ঠা অপসারক পিপি বেল্ট (ম্যানুর বেল্ট)",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "MAINTENANCE INFRA",
    image: "src/assets/images/regenerated_image_1780341468598.jpg",
    shortDescription: "Ultra tough high impact UV-resistant polypropylene waste conveyor belt.",
    details: "Premium conveying belt designed to remove waste from under multi-tier battery cages. Its high tensile strength prevents stretch splits during heavy usage.",
    spec: "1.0mm-1.2mm White PP Waste Conveyor",
    features: [
      "High impact virgin Polypropylene provides heavy pulling limits",
      "Seamless ultrasonic welds prevent edge tracking cracks",
      "High acid resistance prevents corrosion from poultry uric acids"
    ],
    parameters: [
      { label: "Belt Thickness", value: "1.0 mm / 1.1 mm / 1.2 mm available specs" },
      { label: "Width Range", value: "60 cm up to 120 cm customizable options" },
      { label: "Thermal Stability", value: "No stretching in temps from -10C to 45C" }
    ]
  },
  {
    id: "new-ventilation-window-for-farms",
    name: "New Ventilation Window for Farms",
    banglaName: "কন্ট্রোল শেড এয়ার ইনলেট উইন্ডো",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "AIR FLOW INLET",
    image: "src/assets/images/regenerated_image_1780341469850.jpg",
    shortDescription: "Insulated aerodynamic wall dampers with double tension recovery springs.",
    details: "Wall-mounted aerodynamic fresh air inlet window panel. Guides oxygen currents into the upper roof layer to mix evenly, keeping temperatures stable without causing cold drafts for young chicks.",
    spec: "Premium Polystyrene Insulated Air Inlet Window",
    features: [
      "Rigid plastic frame with UV inhibitor resists weather fatigue",
      "Integrated stainless steel mesh prevents insect and bird entry",
      "Tension spring design opens/closes window synchronously via winch wire"
    ],
    parameters: [
      { label: "Window Dimensions", value: "560 x 270 mm standard wall cutout" },
      { label: "Insulation Core", value: "Rigid high density extruded polystyrene" },
      { label: "Recommended Density", value: "1 air inlet per 30-35 square meters" }
    ]
  },
  {
    id: "feed-hopper",
    name: "Feed Hopper",
    banglaName: "অটোমেটিক ফিড হপার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "FEEDING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780341470744.jpg",
    shortDescription: "Heavy capacity distribution hoppers designed to disperse grains evenly across feeder pans.",
    details: "Fabricated from heavy galvanized steel plates, featuring automated limit switch triggers to manage the inflow feed safely and operate smoothly under commercial load.",
    spec: "Hot-Galvanized Hopper, 120 Kg Capacity",
    features: [
      "Precise volumetric feed flow control sliding locks",
      "Heavy load support legs with solid anchoring plates",
      "Integrated anti-bridging agitator rods prevent feed clogs"
    ],
    parameters: [
      { label: "Steel Protection", value: "275g/㎡ premium zinc plating sheets" },
      { label: "Volume Capacity", value: "120 - 250 Kg per drive unit" },
      { label: "Auger Match", value: "45mm & 60mm structural connection sockets" }
    ]
  },
  {
    id: "feed-pan",
    name: "Feed Pan",
    banglaName: "প্লাস্টিক ফিড প্যান",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "FEEDING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780341471482.jpg",
    shortDescription: "Ergonomically designed plastic feed pan with selective visual slots to minimize waste.",
    details: "Engineered with anti-attrition circular ridges to accommodate bird necks. Extremely hygienic, virgin polypropylene construction reduces microbiological buildup.",
    spec: "14-Grill Heavy Duty Plastic Pan",
    features: [
      "360-degree rotation prevents pan stress fractures",
      "Graduated adjustment outer ring sets 5 independent feed heights",
      "Removable snap-on clip designs for thorough bio-washing"
    ],
    parameters: [
      { label: "Diameter Class", value: "330mm circular feed base" },
      { label: "Material Base", value: "Virgin High-Density Polypropylene" },
      { label: "Capacity", value: "45 to 55 growing broiler birds" }
    ]
  },
  {
    id: "feed-auger",
    name: "Feed Auger",
    banglaName: "ফ্লেক্সিবল ফিড ট্রান্সপোর্ট অগার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "FEEDING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780345274033.jpg",
    shortDescription: "Flexible spiral steel augers manufactured from high tensile carbon steel coils.",
    details: "Designed to travel along continuous PVC/galvanized pipes to transport grains from primary silos to individual hoppers without crushing feed pellets.",
    spec: "Coreless Carbon Steel Spring Auger",
    features: [
      "Extremely high tensile elasticity avoids kinks or torsional failure",
      "Precision pitch spacing guarantees stable hourly volume output",
      "Compatible with high flow 75mm and 90mm external PVC conduits"
    ],
    parameters: [
      { label: "Outside Diameter", value: "36mm to 71mm flexible coils" },
      { label: "Raw Grade", value: "SAE1070 high-carbon hardened steel" },
      { label: "Conveying Limit", value: "Up to 1,400 Kg/hour transport limits" }
    ]
  },
  {
    id: "feed-silo",
    name: "Feed Silo",
    banglaName: "হেভি ডিউটি আউটডোর ফিড সাইলো",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "FEEDING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780345276284.jpg",
    shortDescription: "Galvanized sheet metal outdoor silos designed to preserve crop freshness.",
    details: "Weatherproof storage solution constructed with 45-degree discharge cones. Excellent structural joints prevent water droplets from seeping and ruining feed stock quality.",
    spec: "15 to 30 Ton Hot-Dip Storage Silos",
    features: [
      "Reinforced heavy corrugated vertical profile bars withstand high winds",
      "Integrated mechanical climbing ladder with absolute safety cage grids",
      "Air-vented top dome prevents heat build up and internal condensation"
    ],
    parameters: [
      { label: "Sheets Coating", value: "Z275 (275g/㎡) double-sided hot-dip zinc" },
      { label: "Standard Diameter", value: "1.8 meters to 3.6 meters circular base" },
      { label: "Cone Angle", value: "60-degree high velocity bottom discharge" }
    ]
  },
  {
    id: "feed-sensor",
    name: "Feed Sensor",
    banglaName: "স্মার্ট কাপাসিটিভ ফিড সেন্সর",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "FARM SERVICES TOOL",
    image: "src/assets/images/regenerated_image_1780345279574.jpg",
    shortDescription: "Capacitive electronic proximity sensors checking feed heights automatically.",
    details: "Durable sensors installed inside the end-pans of feeding lines. Sends micro-volt feedback to the motor relays to turn on/off the auger motor instantly when feed is low.",
    spec: "M30 Heavy-Duty Proximity Sensor",
    features: [
      "Hermetically sealed epoxy housing defends against dust and urea fumes",
      "Adjustable potentiometer makes sensitivity optimization highly intuitive",
      "Direct action switching for relay contacts up to 250 Volts AC"
    ],
    parameters: [
      { label: "Detect Distance", value: "2mm to 20mm adjustable depth" },
      { label: "IP Protection", value: "IP67 waterproof and gas-proof casing" },
      { label: "Work Temp Range", value: "-20C to 70C farm environment range" }
    ]
  },
  {
    id: "feed-conveyor",
    name: "Feed Conveyor",
    banglaName: "ফিড বেল্ট Conveyor সিস্টেম",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "FEEDING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780345278704.jpg",
    shortDescription: "Automated flat feed conveyor belt for multi-tier laying cages.",
    details: "Reduces bird feeding competition. Transports dry feed evenly along open steel trough channels, saving utility power down to 0.75kW per tier row.",
    spec: "Continuous Trough Feed Conveyor Layout",
    features: [
      "Highly balanced drive rollers prevent belt tracking misalignment",
      "Scratch-proof guide rollers eliminate metal friction shrieks",
      "Variable velocity gearing controls feed depth carefully"
    ],
    parameters: [
      { label: "Row Maximum Scope", value: "Up to 150 meters single line" },
      { label: "Power Ratings", value: "1.1 kW / 1.5 kW high startup gears" },
      { label: "Casing Metal", value: "Stainless Steel SS304 framing" }
    ]
  },
  {
    id: "automatic-feeder",
    name: "Automatic Feeder",
    banglaName: "সম্পূর্ণ স্বয়ংক্রিয় ফিডিং ট্রলি এবং পিপি ড্রাইভ",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "FEEDING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780345280242.jpg",
    shortDescription: "Gantry-driven automatic feeding trolley systems that move smoothly down cage alleys.",
    details: "Features heavy-gauge storage tanks and dual-side feed dispensers that slide down the rail lines to drop equal feed quantities directly into cage troughs.",
    spec: "A-Frame Dual Rail Automated Feed Gantry",
    features: [
      "Smooth micro-clutches prevent abrupt jerks and stop stress noise",
      "High capacity holding dispensers avoid feeding dead zones",
      "Autonomous reversing limiters switch moving direction instantly"
    ],
    parameters: [
      { label: "Drive Motor Class", value: "0.75 kW synchronous electric brake motor" },
      { label: "Moving Velocity", value: "12 meters to 18 meters per minute" },
      { label: "Steel Weight Cap", value: "Up to 450 Kg heavy load frame" }
    ]
  },
  {
    id: "chick-feeder-tray",
    name: "Chick Feeder Tray",
    banglaName: "বাচ্চা মুরগির আধুনিক প্লাস্টিক ফিডার ট্রে",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "FEEDING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780345282107.jpg",
    shortDescription: "Anti-slip shallow plastic trays optimized for baby chicks' day-one brooding.",
    details: "Features low-profile rims that let chicks step inside easily without catching cold drafts or getting trapped. Waved inner surfaces save grains from scattering.",
    spec: "Red Corrugated Chick Brooder Tray",
    features: [
      "High visibility red color attracts baby chicks to feed early",
      "Anti-tip base profiles prevent tray tilting issues",
      "Manufactured with food-safety stabilized polymer resin"
    ],
    parameters: [
      { label: "Tray Width Class", value: "380mm diameter wide dish base" },
      { label: "Edge Rim Height", value: "45mm ultra shallow chick step height" },
      { label: "Capacity Limit", value: "80 to 100 day-one baby chicks" }
    ]
  },
  {
    id: "broiler-feeder-pan",
    name: "Broiler Feeder Pan",
    banglaName: "ব্রয়লার ফিডার প্যান সেট",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "FEEDING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780420664829.jpg",
    shortDescription: "Impact resistant automatic broiler feeder pans linked with high flow piping.",
    details: "Features shut-off windows to customize feed levels easily as birds mature. The non-spill outer rim prevents up to 12% of typical feed waste on house floors.",
    spec: "",
    features: [],
    parameters: []
  },
  {
    id: "layer-feeder-system",
    name: "Layer Feeder System",
    banglaName: "লেয়ার সম্পূর্ণ ফিডিং ট্রলি সিস্টেম",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "FEEDING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780420844883.jpg",
    shortDescription: "Automated chain or push-shuttle feeding assemblies built for layer batteries.",
    details: "Saves energy on feed transport. Replaces traditional labor forces with computerized scheduling timers that operate directly with the main farm environment systems.",
    spec: "H-Frame automated layer feeder array",
    features: [
      "No feed separation during conveying cycles",
      "Built-in scraper blades sweep residual bio dust from troughs",
      "Customizable depth control levers to prevent grain scatter"
    ],
    parameters: [
      { label: "Work Schedule", value: "Up to 8 timer programs per 24 hours" },
      { label: "Run speed limit", value: "22 meters / minute rapid delivery" },
      { label: "Compatible Cage", value: "Sikder A-Frame and H-Frame layer cages" }
    ]
  },
  {
    id: "nipple-drinker",
    name: "Nipple Drinker",
    banglaName: "অটো নিপল ড্রিংকার পাইপ ও সেট",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "DRINKING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780420846146.jpg",
    shortDescription: "Premium stainless steel trigger-controlled drinker nipples for clean water supply.",
    details: "Features bi-directional push activation pins that allow even the smallest chicks to drink with ease. Hermetically sealed internal valve keeps floor litter dry.",
    spec: "360 Degree Activation Stainless Nipple",
    features: [
      "Constructed from solid clinical-grade steel to resist sanitizing chemicals",
      "Screw connection model allows simple maintenance cleaning",
      "Highly responsive dual valve setup eliminates hydraulic drip leaks"
    ],
    parameters: [
      { label: "Flow volume", value: "40 - 60 ml/min calibrated yield" },
      { label: "Recommended Bird", value: "Layer pullets and rapid growing broilers" },
      { label: "Body Materials", value: "H62 Brass casing with SS304 clinical pin" }
    ]
  },
  {
    id: "drinking-line-pipe",
    name: "Drinking Line Pipe",
    banglaName: "পোল্ট্রি ওয়াটার স্কয়ার পিভিসি পাইপ",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "DRINKING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780420847082.jpg",
    shortDescription: "UV-stabilized professional square PVC pipes designed for nipple drinker setups.",
    details: "Specially formulated opaque PVC blocks light penetration, which completely stops internal algae growth and helps maintain pure water quality throughout long supply lines.",
    spec: "22mm x 22mm Square Opaque PVC Conduit",
    features: [
      "Formulated with food-grade elements, completely safe for antibiotics",
      "Thick structural walls allow simple thread drilling across drinker points",
      "Compatible with quick socket connectors and slide PVC fittings"
    ],
    parameters: [
      { label: "Pipe Standard", value: "2.0mm thickness class industrial PVC" },
      { label: "Unit length options", value: "3.0 meters / 4.0 meters per stick" },
      { label: "Internal Diameter", value: "22mm flat square profile channels" }
    ]
  },
  {
    id: "water-tank",
    name: "Water Tank",
    banglaName: "প্লাস্টিক ওয়াটার সিলিন্ডার রিজার্ভার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "DRINKING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780420848648.png",
    shortDescription: "Large-capacity premium plastic water reserve tanks with multi-outlet fittings.",
    details: "Engineered with food-grade, triple-layered LLDPE structure with an integrated carbon lining to manage temperature changes and prevent bio-deposit formation during hot summers.",
    spec: "1000L - 2000L Triple Layer Reserve Tank",
    features: [
      "Carbon lining prevents structural degradation from chemical disinfectants",
      "Thick structural wall profile withstands outdoor heat",
      "Quick threaded drain ports for high velocity clean flushing"
    ],
    parameters: [
      { label: "Material Structure", value: "Linear Low-Density Polyethylene multi-layers" },
      { label: "Working Volumes", value: "1,000 Liters / 2,000 Liters options" },
      { label: "Inlet Fitting Size", value: "50mm heavy brass socket" }
    ]
  },
  {
    id: "water-filter",
    name: "Water Filter",
    banglaName: "হেভি ফ্লো ডিস্ক ওয়াটার ফিল্টার",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "DRINKING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780420850389.jpg",
    shortDescription: "Industrial-grade disc filtration units to capture sand, algae, and minerals.",
    details: "Engineered with reusable high precision grooved plastic discs. Stops fine rust particulates from reaching drinker nipples, protecting them from leaks.",
    spec: "120 Mesh / 130 Micron High Flow Disc Filter",
    features: [
      "Simple screw-lock housing design allows easy runtime cleaning",
      "Integrated dual pressure gauges display filter clean alerts",
      "Anti-acid casing resists farm chlorine flushing chemicals"
    ],
    parameters: [
      { label: "Filtration Flow Capacity", value: "Up to 5.0 cubic meters per hour" },
      { label: "Inlet & Outlet ports", value: "32mm / 1.25 inch threaded options" },
      { label: "Reinforced Plastics", value: "Engineered Nylon base structural parts" }
    ]
  },
  {
    id: "pressure-regulator",
    name: "Pressure Regulator",
    banglaName: "ওয়াটার প্রেসার সুনির্দিষ্ট রেগুলেটর",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "DRINKING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780420851230.jpg",
    shortDescription: "Calibrated pressure regulators designed for stable and uniform pipeline water heads.",
    details: "Adjusts high storage pressures down to a gentle water column suited for fragile nipple drinking lines. Protects structural joints from high pressure ruptures.",
    spec: "Symmetric Double Outlet Regulator Block",
    features: [
      "Responsive rubber spring diaphragm prevents pressure spikes",
      "Continuous direct-gear manual flush switches speed up pipe clearing",
      "Convenient sight-glass tubes with highly visible level float balls"
    ],
    parameters: [
      { label: "Input Bar Limit", value: "Maximum 4.0 Bar incoming pressure" },
      { label: "Adjust Range", value: "10cm to 40cm water column heights" },
      { label: "Conduit Support", value: "Adjusts both square and round lines" }
    ]
  },
  {
    id: "medicator-pump",
    name: "Medicator Pump",
    banglaName: "ডোসাস্ট্রন লিকুইড ভ্যাক্সিন পাম্প",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "DRINKING SYSTEMS",
    image: "src/assets/images/regenerated_image_1780421491546.jpg",
    shortDescription: "High accuracy dosing pumps designed to dispense soluble medications safely.",
    details: "Operates using water flow to pull proportional precise fractions. Eliminates manual dosing mistakes during delicate brooding cycles.",
    spec: "Automatic Proportional Dosing Pump",
    features: [
      "Operates entirely on water pressure, requiring no external electricity",
      "Dynamic volumetric dosing checks ignore line pressure drops",
      "Corrosion-resistant plastic and rubber internal construction"
    ],
    parameters: [
      { label: "Proportion Ranges", value: "0.2% up to 2.0% precise adjust scope" },
      { label: "Flow Volume Scope", value: "12L/hr up to 2,500L/hour line currents" },
      { label: "Inlet Fittings", value: "25mm standard thread ports" }
    ]
  },
  {
    id: "fogging-system",
    name: "Fogging System",
    banglaName: "উচ্চ চাপ ফগিং সলিউশন ও ইনজেকশন নজল",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "CLIMATE VENTILATION",
    image: "src/assets/images/regenerated_image_1780421493274.jpg",
    shortDescription: "High-pressure fogging lines that atomize water under high pressure to cool ambient structures.",
    details: "Utilizes ruby-orifice stainless steel nozzles to generate a micro-fine mist that evaporates in the air, lowering temperatures up to 8°C without leaving damp surfaces.",
    spec: "70 Bar High Pressure Evaporative Kit",
    features: [
      "Precision metal nozzles with built-in spring check valve drips",
      "Braided high pressure stainless lines resist bursting",
      "Intelligent control timers pulse fogging cycles based on humidity levels"
    ],
    parameters: [
      { label: "Working Pressure", value: "50 Bar to 70 Bar continuous rating" },
      { label: "Droplet Size", value: "Ultra fine 5-15 microns diameter mist" },
      { label: "Motor Drive Power", value: "1.5 kW / 2.2 kW high speed piston pumps" }
    ]
  },
  {
    id: "exhaust-fan",
    name: "Exhaust Fan",
    banglaName: "হেভি ডিউটি পুশ-পুল একজস্ট ফ্যান",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "CLIMATE VENTILATION",
    image: "src/assets/images/regenerated_image_1780508483039.jpg",
    shortDescription: "High capacity extraction fan equipped with a dynamic push-pull shutter opener.",
    details: "Galvanized sheet metal extraction fans engineered to generate continuous negative pressures and vent hot air, moisture, and ammonia gases effectively.",
    spec: "50-Inch Galvanized Push-Pull Shutter Fan",
    features: [
      "Blades manufactured from self-cleaning AISI430 stainless steel",
      "Dynamic push-pull centrifugal shutters keep exhaust open during runs",
      "Low vibe industrial V-belt pulleys minimize noise levels"
    ],
    parameters: [
      { label: "Airflow Capacity", value: "44,000 m³/hour displacement volume" },
      { label: "Fan Blade Diameter", value: "1270mm / 50 inches standard" },
      { label: "Motor Class", value: "1.1 kW Siemens IP55 three-phase drives" }
    ]
  },
  {
    id: "air-inlet",
    name: "Roof Mounted Exhaust Fan",
    banglaName: "রূফ মাউন্টেড এক্সহস্ট ফ্যান",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "CLIMATE VENTILATION",
    image: "src/assets/images/regenerated_image_1780518124966.jpg",
    shortDescription: "Aerodynamic plastic inlet windows to guide fresh air currents along the roof.",
    details: "Helps mix fresh cold air with warm air at the ceiling, keeping temperatures stable and preventing cold drafts from affecting birds lower down.",
    spec: "Dual-Spring ABS Air Inlet Window",
    features: [
      "Durable polystyrene frame with UV protection",
      "Stainless mesh defends against insects, mice, and wild birds",
      "Balanced tension recovery springs ensure clean close cycles"
    ],
    parameters: [
      { label: "Cutout Size", value: "540mm x 270mm wall framing" },
      { label: "Open Method", value: "Winch-cable pull linkage" },
      { label: "Insulation Block", value: "Rigid polyurethane core inserts" }
    ]
  },
  {
    id: "circulation-fan",
    name: "Circulation Fan",
    banglaName: "অভ্যন্তরীণ এয়ার সার্কুলেশন ফ্যান",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "CLIMATE VENTILATION",
    image: "src/assets/images/regenerated_image_1780345298652.jpg",
    shortDescription: "Shorter-throw circulation fans engineered to blend interior air and eliminate pocket heat.",
    details: "Spreads fresh air evenly throughout the house. Low-vibration design allows secure suspensory support chain brackets under structural ceiling beams.",
    spec: "30-Inch Suspended Circulation Fan Set",
    features: [
      "Protected guard cages resist corrosion in damp spaces",
      "Direct drive motor configuration eliminates belt maintenance and downtime",
      "Aluminum alloy blades deliver high airflow with minimal drag noise"
    ],
    parameters: [
      { label: "Air Volume Index", value: "12,500 m³/hour displacement rates" },
      { label: "Power Required", value: "0.37 kW single phase standard" },
      { label: "Vibration Index", value: "Below 1.2 mm/s absolute velocity limits" }
    ]
  },
  {
    id: "tunnel-ventilation-fan",
    name: "Tunnel Ventilation Fan",
    banglaName: "হাই কন্টিনউয়াস টানেল ভেন্টিলেশন ফ্যান",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "CLIMATE VENTILATION",
    image: "src/assets/images/regenerated_image_1780345299767.jpg",
    shortDescription: "Premium fibreglass cone extraction fans designed to optimize extreme tunnel airflow speeds.",
    details: "Provides effective cooling in hot summers. Aerodynamic cone shapes reduce air resistance and increase intake volumes by up to 15%.",
    spec: "54-Inch Fibreglass Cone Tunnel Fan",
    features: [
      "Corrosion-resistant FRP housing has an expected lifetime of over 25 years",
      "Perfectly balanced heavy blades deliver quiet operation",
      "Auto lock sealing shutters block backdraft air currents"
    ],
    parameters: [
      { label: "Airflow Index", value: "51,000 m³/hour at high static pressure rating" },
      { label: "Motor Power Class", value: "1.5 HP severe-duty sealed electric motor" },
      { label: "Dripping Housing", value: "Deep-draw fibreglass cone extension" }
    ]
  },
  {
    id: "cooling-pad-frame",
    name: "Cooling Pad Frame",
    banglaName: "অ্যালুমিনিয়াম কুলিং প্যাড ফ্রেম এ্যাসেম্বলি",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "CLIMATE VENTILATION",
    image: "src/assets/images/regenerated_image_1780346232552.png",
    shortDescription: "Rust-proof aluminium support frame assemblies with integrated water gutters.",
    details: "Distributes water evenly over cooling pad cells. Features structured top manifolds and a bottom gutter system to capture and recirculate water without leaks.",
    spec: "Special Aluminium Alloy Frame System",
    features: [
      "Removable top cap plate allows easy clean access",
      "Built-in water baffles prevent structural splashing on walls",
      "Chemical-proof PVC water pipes with pre-drilled distribution holes"
    ],
    parameters: [
      { label: "Frame Material", value: "6063-T5 heavy extruded industrial aluminium" },
      { label: "Width Range Options", value: "Tailored from 1.2 meters up to 6.0 meters" },
      { label: "Standard Tube Port", value: "32mm PVC water inlet" }
    ]
  },
  {
    id: "environmental-controller",
    name: "Environmental Controller",
    banglaName: "কন্ট্রোল শেড সেন্ট্রাল এনভায়রনমেন্ট কম্পিউটার",
    category: "electrical_equipment",
    categoryLabel: "Electrical Equipment",
    tag: "SYSTEM AUTOMATION",
    image: "src/assets/images/regenerated_image_1780346241331.jpg",
    shortDescription: "Pristine computerized control systems managing whole-farm heating, fans, and sensors.",
    details: "Ensures microclimate stability by adjusting fans, heaters and inlets based on real-time sensor feedback. Reduces energy consumption on commercial farms.",
    spec: "Intelligent Microprocessor-Based Control Station",
    features: [
      "Equipped with 20 status relays to manage cooling pads and heater stages",
      "Includes an automatic high/low alarm trigger unit to protect lives",
      "Light-protected touch displays allow quick configuration adjustments"
    ],
    parameters: [
      { label: "Analog Sensor Ports", value: "Up to 8 temperature & 2 humidity probes" },
      { label: "Backup Power", value: "Integrated rechargeable 12v standby battery support" },
      { label: "Communication Class", value: "RS485 modbus / Ethernet remote app setup" }
    ]
  },
  {
    id: "temperature-sensor",
    name: "Temperature Sensor",
    banglaName: "হাই প্রিসিশন থার্মাল সেন্সর প্রোব",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "FARM SERVICES TOOL",
    image: "src/assets/images/regenerated_image_1780346242324.jpg",
    shortDescription: "Moisture-sealed NTC temperature probes manufactured to monitor air heat profiles in real-time.",
    details: "Sends instantaneous temperature feedback with an accuracy of +/- 0.1°C, allowing the main controller to scale and adjust the ventilation stages.",
    spec: "Sealed NTC 10K Ohm Thermal Probe",
    features: [
      "Encapsulated inside a rust-proof stainless steel protective casing",
      "Equipped with 10-meter thick shielded copper wire lines",
      "Chemical-proof outer layers are resistant to farm ammonia"
    ],
    parameters: [
      { label: "Sensor Resolution", value: "Within +/- 0.1C high-accuracy sensing" },
      { label: "Probe Sheath Size", value: "6mm diameter x 50mm length casing" },
      { label: "Insulation Rating", value: "Moisture-proof waterproofing class IP68" }
    ]
  },
  {
    id: "humidity-sensor",
    name: "Humidity Sensor",
    banglaName: "স্মার্ট রিলেটিভ হিউমিডিটি সেন্সর",
    category: "industrial_spares",
    categoryLabel: "Industrial Spare Parts",
    tag: "FARM SERVICES TOOL",
    image: "src/assets/images/regenerated_image_1780346245036.jpg",
    shortDescription: "Active moisture sensors designed to track relative air humidity inside farming blocks.",
    details: "Helps prevent high-temperature bird stress when operating together with cooling systems. Delivers proportional 0-10V or 4-20mA signals.",
    spec: "Electronic relative humidity transmitter",
    features: [
      "Includes a replaceable microporous PTFE dust filter tip",
      "Factory calibrated to offer reliable calculations from 0% to 100% RH",
      "Engineered to withstand ammonia-rich environment hazards"
    ],
    parameters: [
      { label: "Sensor Deviation", value: "Strictly within +/- 2% RH tolerance limits" },
      { label: "Voltage Input Range", value: "12 Volts to 24 Volts DC supply" },
      { label: "Housing Material", value: "Impact-resistant engineering poly-carbonate" }
    ]
  },
  {
    id: "brooder-heater",
    name: "Brooder Heater",
    banglaName: "সম্পূর্ণ অটো ব্রোডার হিটার প্যানেল",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "MAINTENANCE INFRA",
    image: "src/assets/images/regenerated_image_1780348308989.jpg",
    shortDescription: "Suspended space heaters engineered to maintain ideal thermal micro-environments for baby birds.",
    details: "Helps ensure healthy growth during brooding. Advanced safety features shut down oil and gas lines if temperatures spike unexpectedly.",
    spec: "Indirect Air Combusting Brooder Heater Unit",
    features: [
      "Enclosed combustion models keep carbon gases away from bird spaces",
      "Thermostatic temperature controls reduce fuel consumption",
      "High airflow fans spread heat evenly to reduce cold spots"
    ],
    parameters: [
      { label: "Heating Capacity", value: "100,000 to 120,000 BTU/hour ratings" },
      { label: "Fuel Type Match", value: "Liquid Propane, Butane, or Diesel lines" },
      { label: "Airflow Displacement", value: "2,200 m³/hour heating circulation" }
    ]
  },
  {
    id: "gas-brooder",
    name: "Gas Brooder",
    banglaName: "ইনফ্রারেড গ্যাস ব্রোডার হিটার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "MAINTENANCE INFRA",
    image: "src/assets/images/regenerated_image_1780348310698.jpg",
    shortDescription: "Infrared radiant gas brooders delivering warm radiant heat.",
    details: "Replicates natural maternal warmth. Special ceramic fiber grids project targeted heat downward, saving up to 30% on fuel compared to open heaters.",
    spec: "Stainless Ceramic Radiant Gas Brooder",
    features: [
      "Durable ceramic grids maintain continuous heat patterns",
      "Flame-failure safety valves shut off gas instantly if the fire dies",
      "Built-in dust filters protect components from farm dust blockages"
    ],
    parameters: [
      { label: "Thermal Range Class", value: "14,000 BTU to 22,000 BTU/hour" },
      { label: "Rearing Support", value: "800 to 1,200 newly hatched chicks" },
      { label: "Gas Pressure Standard", value: "2.8 kPa to 5.0 kPa adjustable settings" }
    ]
  },
  {
    id: "electric-brooder",
    name: "Electric Brooder",
    banglaName: "ইলেকট্রিক রেডিয়েন্ট ব্রোডার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "MAINTENANCE INFRA",
    image: "src/assets/images/regenerated_image_1780348311511.jpg",
    shortDescription: "Clean electric radiant warming shields designed for localized chick flock partitions.",
    details: "Provides quiet, emissions-free heating. Features a lightweight canopy design that is easy to raise as the birds mature.",
    spec: "High Radiance Metal Sheath Electric Brooder",
    features: [
      "Quiet, emissions-free heating improves bird respiratory safety",
      "High-efficiency steel heaters project heat evenly without glare stress",
      "Easy height adjustment suspension chains"
    ],
    parameters: [
      { label: "Electrical Input", value: "220 Volts single phase AC 50Hz" },
      { label: "Power Ratings", value: "1.2 kW to 2.4 kW heating options" },
      { label: "Rearing Capacity", value: "300 to 500 chick brooding clusters" }
    ]
  },
  {
    id: "egg-tray",
    name: "Egg Tray",
    banglaName: "প্লাস্টিক ও পেপার এগ ট্রে",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "HATCHER ACCESSORIES",
    image: "src/assets/images/regenerated_image_1780508484306.jpg",
    shortDescription: "Durable shock-absorbent multi-egg trays designed for standard sorting lines.",
    details: "Optimized cell dimensions accommodate both medium and large layer eggs. Anti-slip stacking teeth prevent sliding during transport and sorting.",
    spec: "30-Cell HDPE Dense Stacking Tray Set",
    features: [
      "Thick corner post pillars absorb stack compression forces during transport",
      "Generous airflow perforations speed up sanitizing wash cycles",
      "Virgin grade plastics prevent chemical cracking"
    ],
    parameters: [
      { label: "Item Weight", value: "160 grams lightweight plastic core" },
      { label: "Stack Support Capacity", value: "Up to 15 layers high without bowing" },
      { label: "Sorting Layout", value: "5 x 6 classic egg alignment grid" }
    ]
  },
  {
    id: "egg-collection-belt",
    name: "Egg Collection Belt",
    banglaName: "লেয়ার ডিম কালেকশন অটো বেল্ট",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "MAINTENANCE INFRA",
    image: "src/assets/images/regenerated_image_1780508658314.jpg",
    shortDescription: "High-density PP and woven fabric egg collection belts with woven anti-slide textures.",
    details: "Helps prevent egg impact damage. Smooth surface design moves eggs safely from cage aisles to sorting terminals without cracking.",
    spec: "Polypropylene-woven high endurance transport belt",
    features: [
      "Special woven textures stop rolling during high-speed moves",
      "Antimicrobial properties protect egg shells from contamination",
      "High tensile strength avoids belt stretching under load"
    ],
    parameters: [
      { label: "Thickness Class", value: "1.2mm to 1.5mm high durability options" },
      { label: "Belt Width Choices", value: "100mm / 155mm standard conveyor channels" },
      { label: "Tensile Strength", value: "Up to 1,800 Kg maximum pulling limits" }
    ]
  },
  {
    id: "egg-conveyor",
    name: "Egg Conveyor",
    banglaName: "ডিম পরিবহন অটো কনভেয়ার সিস্টেম",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "MAINTENANCE INFRA",
    image: "src/assets/images/regenerated_image_1780508830809.jpg",
    shortDescription: "Automated rod-link conveyor systems designed to lift eggs across multistory buildings.",
    details: "Gently carries eggs up vertical curves, across walkways, and directly into cold grading and packaging machines with minimal egg impact.",
    spec: "Flexible Rod-Link Egg Elevator System",
    features: [
      "Side guide rails prevent eggs from slipping",
      "Variable velocity gearing allows smooth speed adjustments",
      "Automatic clean brushes sweep off feather debris during runtime operations"
    ],
    parameters: [
      { label: "Lifting Angle Capacity", value: "Up to 25 degrees steep vertical slopes" },
      { label: "System Velocity", value: "5 to 8 meters per minute transport speed" },
      { label: "Carrying Capacity", value: "Up to 22,000 eggs/hour sorting limits" }
    ]
  },
  {
    id: "hatchery-trolley",
    name: "Hatchery Trolley",
    banglaName: "হ্যাচারি ট্রে ট্রলি র‍্যাক",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "MAINTENANCE INFRA",
    image: "src/assets/images/regenerated_image_1780508976040.jpg",
    shortDescription: "Heavy-duty stainless steel hatchery carts equipped with high reliability dynamic caster wheels.",
    details: "Designed to slide smoothly into large commercial incubators. Precise slider shelf spacing allows maximum airflow between stacked egg baskets.",
    spec: "Double-Column Stainless Incubation Trolley",
    features: [
      "Rigid stainless frame resists aggressive chemical cleaning and high humidity",
      "Heat-proof dual wheels spin 360-degrees for easy maneuvering",
      "Stable sliding locks hold tray shelves securely in place"
    ],
    parameters: [
      { label: "Raw Materials", value: "Solid SS304 or SS316 stainless tubes" },
      { label: "Tray Max Slots", value: "32 to 36 hatcher baskets per cart" },
      { label: "Castor Loading Limit", value: "400 Kg industrial loading support" }
    ]
  },
  {
    id: "incubator-tray",
    name: "Incubator Tray",
    banglaName: "ইনকিউবেটর ডিম সেটিং ট্রে",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "HATCHER ACCESSORIES",
    image: "src/assets/images/regenerated_image_1780518329844.jpg",
    shortDescription: "Moulded incubation setter trays designed to optimize air circulation and heat.",
    details: "Specially shaped egg pockets distribute heat evenly and prevent egg contact, helping to improve hatch success rates.",
    spec: "150-Cell Setter Plastic Egg Tray",
    features: [
      "Stiff reinforcement columns support stable tier vertical stacks",
      "Antimicrobial polypropylene polymers reduce mold and bacteria risks",
      "Flexible cell profiles accommodate variable egg sizes"
    ],
    parameters: [
      { label: "Setter Cell Capacity", value: "150 chicken breeder eggs per tray" },
      { label: "Casing Material", value: "Virgin High-Grade Impact Polypropylene" },
      { label: "Wash Temp Limit", value: "Handles sanitizing water washes up to 80C" }
    ]
  },
  {
    id: "poultry-cage-system",
    name: "Poultry Cage System",
    banglaName: "পূর্ণাঙ্গ অটোমেটিক ব্যাটারি কেজ এ্যাসেম্বলি",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "LARGE INFRASTRUCTURE",
    image: "src/assets/images/regenerated_image_1780518516503.jpg",
    shortDescription: "Turnkey automated vertical battery cage system setups with built-in feed, drink, and waste systems.",
    details: "Maximizes land use and bird density. Improves farm biological isolation and automates egg and manure transport.",
    spec: "H-Frame Multi-Tier Cage Turnkey Solutions",
    features: [
      "Heavy steel frames with Z275 zinc plating resist corrosion",
      "Central control system automates feeding and watering across all tiers",
      "Smooth manure scrapers ensure clean conditions without labor"
    ],
    parameters: [
      { label: "Vertical Cage Tiers", value: "3 to 8 levels configurations" },
      { label: "Frame Steel Thickness", value: "2.5mm to 3.0mm structural brackets" },
      { label: "Lifetime Expectancy", value: "Over 20 years continuous service operations" }
    ]
  },
  {
    id: "layer-cage",
    name: "Layer Cage",
    banglaName: "লেয়ার ব্যাটারি কেজ ইউনিট",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "LARGE INFRASTRUCTURE",
    image: "src/assets/images/regenerated_image_1780518706692.jpg",
    shortDescription: "Specifically engineered wire cages supporting egg-laying hens.",
    details: "Features fine-angle wire mesh floors designed to roll eggs gently into collection runways, reducing cracked egg losses below 0.3%.",
    spec: "A-Type tiered wire cage configuration set",
    features: [
      "Sturdy wire cage door locks prevent birds from escaping",
      "Wide-mouth troughs allow continuous, unhindered feeding access",
      "Dedicated drip cups under drinking lines keep litter dry"
    ],
    parameters: [
      { label: "Egg Roll Slopes", value: "7 to 9 degrees safe gradient angles" },
      { label: "Wire Zinc Plating", value: "Heavy hot-dipped 240g/㎡ zinc coating" },
      { label: "Surface Space Spec", value: "450 ㎠ structural room per bird" }
    ]
  },
  {
    id: "broiler-cage",
    name: "Broiler Cage",
    banglaName: "ব্রয়লার আধুনিক অটো খাঁচা সিস্টেম",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "LARGE INFRASTRUCTURE",
    image: "src/assets/images/regenerated_image_1780421513911.jpg",
    shortDescription: "Vertical broiler cage units featuring soft plastic mesh floors to prevent injuries.",
    details: "Eliminates litter management issues. Enhances bird density per square meter by up to 200% compared to traditional floor raising setups.",
    spec: "Broiler Rearing H-Frame Battery Assembly",
    features: [
      "Smooth sliding front doors allow fast, damage-free harvesting",
      "Soft polypropylene floor mesh prevents breast blisters and leg damage",
      "Automated feed pan lines adjust in height as birds play"
    ],
    parameters: [
      { label: "Floor Mesh Type", value: "Removable soft-coated elastic polymer mesh" },
      { label: "Row Maximum Height", value: "3-Tier or 4-Tier space-smart setups" },
      { label: "Bird Density Indices", value: "50-60 broiler birds per cage module" }
    ]
  },
  {
    id: "breeder-cage",
    name: "Breeder Cage",
    banglaName: "ব্রিডার সেকশন খাঁচা সলিউশন",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "LARGE INFRASTRUCTURE",
    image: "src/assets/images/regenerated_image_1780421515223.jpg",
    shortDescription: "Heavy-duty cage systems designed to support parent stock breeding.",
    details: "Features separate compartments for male and female birds with selective feed barriers, or unified modules that help improve fertile egg rates.",
    spec: "Parent Stock Breeder Cage Structure",
    features: [
      "Extra structural height accommodates large rooster birds comfortably",
      "Specialized feed gates prevent roosters from eating female-only diet",
      "Direct clean-roll paths prioritize pristine egg biological security"
    ],
    parameters: [
      { label: "Cage Module Width", value: "1200mm extra wide interior columns" },
      { label: "Cage Clear Height", value: "680mm tall breeder cage headroom" },
      { label: "Conduit Support", value: "Integrated double-line nipple drinkers" }
    ]
  },
  {
    id: "manure-scraper",
    name: "Manure Scraper",
    banglaName: "বিষ্ঠা অপসারণ ড্রাইভ স্ক্র্যাপার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "MAINTENANCE INFRA",
    image: "src/assets/images/regenerated_image_1780348324184.jpg",
    shortDescription: "Heavy-duty steel scrapers driven by high stability cables to clean manure troughs.",
    details: "Installs directly in bottom concrete manure pits. Automatically scrapes wastes into centralized collection channels, reducing ammonia levels in the house.",
    spec: "Heavy V-Shaped Manure Scraper Blade Assembly",
    features: [
      "Thick hot-dipped galvanized structural blades resist uric acids",
      "Automated reversing winches manage line direction",
      "Cleans flat bottom pits up to 150 meters long"
    ],
    parameters: [
      { label: "Drive Motor Rating", value: "1.5 kW / 2.2 kW high reduction drive motor" },
      { label: "Scraper Width", value: "Customized to pit widths from 1.2m to 2.4m" },
      { label: "Traction Rope Match", value: "High-grade 8mm polypropylene or wire ropes" }
    ]
  },
  {
    id: "manure-conveyor",
    name: "Manure Conveyor",
    banglaName: "ম্যানুর বেল্ট সুনির্দিষ্ট কনভেয়ার",
    category: "poultry_equipment",
    categoryLabel: "Poultry Farm Equipment",
    tag: "MAINTENANCE INFRA",
    image: "src/assets/images/regenerated_image_1780348328303.jpg",
    shortDescription: "High-performance conveyor systems designed to lift manure out of houses.",
    details: "Utilizes thick, anti-slip rubber or PP belts to carry manure from interior channels up onto transport trucks outside, maintaining clean biosecure yards.",
    spec: "Heavy Inclined Manure Elevating Conveyor",
    features: [
      "Inclined design carries wet waste outside without backflow leaks",
      "Reinforced rubber belts resist tears and harsh weather",
      "Scraper brushes thoroughly clean the belt surface to prevent residue buildup"
    ],
    parameters: [
      { label: "Conveying Angle", value: "Up to 30 degrees steep outdoor inclines" },
      { label: "Maximum Belt Spec", value: "600mm to 1200mm thick conveying belts" },
      { label: "Lifting Velocity", value: "10 to 15 meters per minute swift transit" }
    ]
  },
  {
    id: "farm-control-panel",
    name: "Farm Control Panel",
    banglaName: "সমন্বিত ফার্ম কন্ট্রোল ডিস্ট্রিবিউশন প্যানেল",
    category: "electrical_equipment",
    categoryLabel: "Electrical Equipment",
    tag: "SYSTEM AUTOMATION",
    image: "src/assets/images/regenerated_image_1780348329297.jpg",
    shortDescription: "Integrated central farm control panels designed to manage whole-shed electrical loads.",
    details: "Protects delicate electronic equipment from voltage drops, spikes, and surges. Includes clear switches and status indicators for farm operators.",
    spec: "Integrated Central Control Panel Board",
    features: [
      "Dust-tight metal cases designed for damp, ammonia-rich farm conditions",
      "Automatic transfer switches (ATS) safely switch to backup generators if power fails",
      "Built-in phase monitoring relays prevent damage to three-phase motors"
    ],
    parameters: [
      { label: "Material Protection", value: "IP55/IP65 sheet steel enclosure with powder coating" },
      { label: "Ampere Rating Index", value: "100A up to 400A maximum electrical capacities" },
      { label: "Voltage Support", value: "415V Three Phase / 230V Single Phase inputs" }
    ]
  },
  {
    id: "electrical-distribution-panel",
    name: "Electrical Distribution Panel",
    banglaName: "সাবএলটি বিতরণ বৈদ্যুতিক ডিস্ট্রিবিউশন বোর্ড",
    category: "electrical_equipment",
    categoryLabel: "Electrical Equipment",
    tag: "SYSTEM AUTOMATION",
    image: "src/assets/images/regenerated_image_1780348330249.jpg",
    shortDescription: "Industrial-grade electrical distribution boards with dedicated safety breakers.",
    details: "Splits main electrical power into safe, isolated branch lines. Built-in leak protection ensures operator safety near damp water grids.",
    spec: "Main Distribution Board (MDB-1)",
    features: [
      "Pure copper busbars minimize electrical losses and heat",
      "Removable gland plates simplify cable routing and installation",
      "Integrated earth leakage circuit breakers (ELCB) protect operators"
    ],
    parameters: [
      { label: "Copper Busbar Size", value: "30mm x 5mm pure copper conductor plates" },
      { label: "Short Circuit Limit", value: "Rated at 15 kA to 25 kA heavy interruption caps" },
      { label: "Internal Breakers", value: "Premium Schneider/ABB MCCB components" }
    ]
  },
  {
    id: "wind-turbine",
    name: "Wind Turbine",
    banglaName: "উইন্ড টারবাইন (বায়ু চালিত জেনারেটর)",
    category: "electrical_equipment",
    categoryLabel: "Electrical Equipment",
    tag: "RENEWABLE ENERGY",
    image: "src/assets/images/regenerated_image_1780422157360.jpg",
    shortDescription: "High-efficiency vertical and horizontal wind turbine systems for renewable energy generation.",
    details: "Converts wind current into clean green energy resources to power modern biological control poultry farms and reduce dependency on traditional utility grids.",
    spec: "3kW to 10kW On-Grid and Off-Grid Wind Turbines",
    features: [
      "High efficiency aerodynamic blades optimize low speed wind activation",
      "Brushless permanent magnet generator offers reliable operation",
      "Automatic fail-safe brake systems protect lines during heavy storms"
    ],
    parameters: [
      { label: "Rated Power", value: "3KW / 5KW / 10KW continuous output selections" },
      { label: "Start wind speed", value: "2.5 meters per second low latency activation" },
      { label: "Output Voltage", value: "48V DC / 110V AC / 220V AC stable lines" }
    ]
  },
  {
    id: "power-supply-unit",
    name: "Power Supply Unit",
    banglaName: "স্মার্ট ডিসি সুইচিং পাওয়ার সাপ্লাই",
    category: "electrical_equipment",
    categoryLabel: "Electrical Equipment",
    tag: "SYSTEM AUTOMATION",
    image: "src/assets/images/regenerated_image_1780348332011.jpg",
    shortDescription: "Stable switching power supplies that deliver clean DC voltage to sensors.",
    details: "Converts noisy AC grid power into clean, stable DC voltage for controllers and sensors, helping to prevent signal noise and communication failures.",
    spec: "Sealed Switching Power Supply (SMPS)",
    features: [
      "Built-in protection against short circuits, overloads, and voltage spikes",
      "Passive metal heatsinks keep components cooling without noisy fans",
      "Output fine-tuning screws adjust voltage to offset cable resistance losses"
    ],
    parameters: [
      { label: "Input Voltage Class", value: "110V to 240V AC wide-range input" },
      { label: "DC Voltage Output", value: "24 Volts DC / 10 Amps constant output" },
      { label: "Ripple Voltage", value: "Below 80 mV peak-to-peak clean output" }
    ]
  }
];
