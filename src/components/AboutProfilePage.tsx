import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Cpu, 
  Briefcase, 
  Building2, 
  Zap, 
  PhoneCall, 
  BarChart3, 
  Code,
  Compass,
  Award
} from 'lucide-react';

import chairmanImg from '../assets/images/regenerated_image_1779485225011.jpg';
import viceChairmanImg from '../assets/images/regenerated_image_1779732220410.jpg';
import mdImg from '../assets/images/regenerated_image_1779732221968.jpg';
import directorImg from '../assets/images/director_tanvir_islam_1779215762368.png';
import gmImg from '../assets/images/gm_mohammad_arif_1779215782975.png';
import engHeadImg from '../assets/images/eng_head_rafiul_karim_1779215798847.png';
import corporateOfficeImg from '../assets/images/sikder_3d_office_logo_1779223510577.png';

interface AboutProfilePageProps {
  onBack: () => void;
}

const AboutProfilePage: React.FC<AboutProfilePageProps> = ({ onBack }) => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-20">
      {/* Premium Header/Nav */}
      <section className="bg-[#3A1D4D] text-white py-12 md:py-16 shadow-2xl relative overflow-hidden">
        {/* Backdrop patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-purple/25 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-white transition-colors mb-4 group"
              >
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
              <span className="text-[10px] bg-brand-green/20 text-brand-green font-bold uppercase tracking-[0.34em] px-4 py-1.5 rounded-full block w-max mb-3">
                Corporate Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
                About SIKDER
              </h1>
              <p className="text-white/60 text-sm md:text-base font-medium max-w-2xl">
                Established 2004 • Engineering the Future With Trust & Innovation
              </p>
            </div>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-white text-brand-purple hover:bg-brand-green hover:text-brand-purple rounded-2xl text-[10px] font-extrabold uppercase tracking-widest cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT AREA: ABOUT & CORPORATE METRICS */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Card */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-purple tracking-tight mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-green rounded-full block"></span>
                Company Overview
              </h2>
              <div className="text-slate-600 space-y-6 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  SIKDER is a trusted and innovative business group established in 2004, providing professional services in engineering, elevator solutions, and modern construction technology.
                </p>
                <p>
                  With years of experience, SIKDER has built a strong reputation for quality work, advanced technology, safety, and customer satisfaction.
                </p>
                <p>
                  We believe in creating modern solutions for residential, commercial, and industrial projects through skilled teamwork, smart engineering, and reliable service.
                </p>
              </div>
            </motion.section>

            {/* Corporate Heritage Showcase with the 3D Sikder Logo */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-xl overflow-hidden relative"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-purple tracking-tight mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-green rounded-full block"></span>
                Official Headquarters & 3D Brand Identity
              </h2>
              <p className="text-slate-600 mb-8 text-base md:text-lg font-medium leading-relaxed">
                Reflecting our premium corporate style, our landmark corporate office combines high-end modern layout architectures, representing the futuristic 3D design paradigm of SIKDER Group.
              </p>
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl group max-w-4xl mx-auto">
                <img 
                  src={corporateOfficeImg} 
                  alt="SIKDER 3D Logo Corporate Headquarters" 
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Elegant overlay badge */}
                <div className="absolute top-6 left-6 bg-brand-purple/90 text-white font-bold text-[9px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full backdrop-blur shadow-lg border border-brand-green/30">
                  SIKDER Branding HQ
                </div>
                
                {/* Bottom glass reflection details bar */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/40 backdrop-blur-md p-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">SIKDER World Headquarters</span>
                  <span className="text-[10px] text-brand-green font-extrabold uppercase tracking-[0.25em]">Est. 2004</span>
                </div>
              </div>
            </motion.section>

            {/* Department-wise divisions */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-purple tracking-tight mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-green rounded-full block"></span>
                Our Departments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Eng. Dept */}
                <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-slate-50/50 transition-colors">
                  <div className="w-12 h-12 bg-indigo-50 text-brand-purple rounded-2xl flex items-center justify-center mb-4">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Engineering Department</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Provides advanced electrical and engineering solutions for industrial and commercial projects.
                  </p>
                </div>

                {/* Elevator Dept */}
                <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-slate-50/50 transition-colors">
                  <div className="w-12 h-12 bg-green-50 text-brand-green rounded-2xl flex items-center justify-center mb-4">
                    <Award size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Elevator Department</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Handles elevator installation, maintenance, smart lift systems, and escalator services.
                  </p>
                </div>

                {/* Construction Dept */}
                <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-slate-50/50 transition-colors">
                  <div className="w-12 h-12 bg-purple-50 text-brand-purple rounded-2xl flex items-center justify-center mb-4">
                    <Building2 size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Construction Department</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Manages modern building construction, structural engineering, and project development.
                  </p>
                </div>

                {/* Marketing & Sales */}
                <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-slate-50/50 transition-colors">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Marketing & Sales Department</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Builds strong client relationships and provides professional customer support services.
                  </p>
                </div>

                {/* Customer Support */}
                <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-slate-50/50 transition-colors md:col-span-2">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 flex-shrink-0 rounded-2xl flex items-center justify-center mb-4">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Customer Support Team</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Offers 24/7 support, active field maintenance services, and reliable technical assistance for all corporate clients.
                    </p>
                  </div>
                </div>

              </div>
            </motion.section>

            {/* Design & IT Department Special Showcase */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-[#2D1B36] text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-green/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
              <div className="relative z-10">
                <span className="text-[9px] bg-brand-green/20 text-brand-green font-bold uppercase tracking-[0.3em] px-4 py-1 rounded-full mb-4 inline-block">
                  Specialized Technical Hub
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                  Design & IT Department
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl text-base">
                  Innovative systems, custom 3D virtualization and modern architectural designs delivered by SIKDER's core layout team.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Modern Architectural Design",
                    "Smart Building Technology",
                    "Website & Software Solutions",
                    "Technical Support Support",
                    "Digital Engineering Systems",
                    "3D Design & Visualization"
                  ].map((field, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                      <div className="w-7 h-7 bg-brand-green/25 text-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code size={14} />
                      </div>
                      <span className="text-sm font-semibold tracking-wide text-white/90">{field}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-xs italic text-brand-green/80 flex items-center gap-2 font-medium">
                  <Compass size={16} /> Our creative and technical experts ensure that every engineering project follows modern standards and innovative digital technology.
                </div>
              </div>
            </motion.section>

          </div>

          {/* RIGHT AREA: MISSION, VISION & MOTIFS */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Why SIKDER list (Trust) */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl">
              <h3 className="font-bold text-lg text-brand-purple mb-6 flex items-center gap-2">
                <ShieldCheck className="text-brand-green flex-shrink-0" size={24} />
                Why Clients Trust SIKDER
              </h3>
              <ul className="space-y-4">
                {[
                  "Established Since 2004",
                  "Professional Engineering Team",
                  "Modern Technology Solutions",
                  "Quality & Safety Assurance",
                  "Fast & Reliable Service",
                  "Customer Satisfaction Focused",
                  "Innovative Construction Ideas"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-slate-50/55 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                    <CheckCircle2 size={16} className="text-brand-green flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission & Vision */}
            <div className="bg-[#3A1D4D] text-white rounded-[2.5rem] p-8 shadow-xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full translate-x-12 -translate-y-12 blur-2xl"></div>
              
              <div>
                <h4 className="text-brand-green font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Target size={16} />Our Mission
                </h4>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  "Deliver high-quality services using modern technology while maintaining safety and building long-term relationships."
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-brand-green font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Eye size={16} />Our Vision
                </h4>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  "To become a leading engineering and construction company through innovation, integrity, and professional excellence."
                </p>
              </div>
            </div>

            {/* Company Message */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl text-center relative overflow-hidden">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#6C8B3C] block mb-3">Enterprise Creed</span>
              <p className="text-brand-purple font-extrabold text-lg leading-relaxed mb-4 italic">
                “Engineering the Future With Trust & Innovation”
              </p>
              <p className="text-slate-500 text-xs leading-relaxed text-center">
                SIKDER continues to grow through dedication, teamwork, and modern technology. Our mission is not only to complete projects but also to build lasting trust and long-term success for every client and partner.
              </p>
            </div>

          </div>

        </div>

        {/* SECTION: MEET OUR LEADERSHIP TEAM */}
        <section className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-green font-bold text-[10px] uppercase tracking-[0.4em] mb-3 block">
              Professional Executive Board
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-purple tracking-tight mb-4">
              Our Management Team
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              “Professional Leadership Driving Innovation & Excellence”
            </p>
            <p className="text-xs text-slate-400 mt-2 max-w-xl mx-auto">
              Our management team is composed of experienced professionals dedicated to innovation, quality, and customer satisfaction. Their leadership drives SIKDER toward success in engineering, elevator solutions, and modern construction technology.
            </p>
          </div>

          {/* Executive Board (Chairman, Vice Chairman & Managing Director) */}
          <div className="max-w-6xl mx-auto mb-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sikder Taslima Akter',
                  role: 'Chairman',
                  image: chairmanImg,
                  quote: '“We strive to lead the engineering, industrial, and agricultural technology sectors in Bangladesh with honesty, quality, and sustainable practices.”',
                  message: '“Our commitment is to build trust through quality services, innovation, and professional excellence. We believe in creating a better future with modern engineering and technology.”',
                  note: 'The Chairman leads the board with dedication, strategic planning, and a commitment to excellence.'
                },
                {
                  name: 'Sikder Md Anowar Hossain Sobuj',
                  role: 'Managing Director',
                  image: mdImg,
                  quote: '“Our structural designs, automated solutions, and customized panels demonstrate Sikder Group’s precision engineering standards.”',
                  message: '“We focus on delivering reliable solutions with advanced technology, skilled teamwork, and complete customer satisfaction in every project.”',
                  note: 'The Managing Director supervises all operational activities and ensures high-quality service delivery.'
                },
                {
                  name: 'Md Jahangir Prodhan',
                  role: 'Vice Chairman',
                  image: viceChairmanImg,
                  quote: '“Partnering with global heavy-industry leaders and local technical talents allows us to install world-class power and vertical mobility networks.”',
                  message: '“We build synergies between premium global quality and local execution capability to exceed expectations and ensure high-quality service delivery.”',
                  note: 'The Vice Chairman leads regional execution partnerships and strategic technology development.'
                }
              ].map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.7 }}
                  className="group relative"
                >
                  {/* Premium Portrait Card */}
                  <div className="h-full bg-gradient-to-b from-brand-purple/10 to-brand-green/5 border border-brand-purple/20 rounded-[3rem] p-6 md:p-8 shadow-2xl hover:shadow-brand-purple/10 transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between overflow-hidden relative z-10">
                    
                    {/* Glowing Accent Ring */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-full translate-x-12 -translate-y-12 blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-brand-purple via-brand-green to-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <div>
                      {/* TALL/RECTANGULAR PORTRAIT PHOTO STYLE */}
                      <div className="relative mb-6 overflow-hidden rounded-[2.5rem] aspect-[3/4] w-full shadow-2xl border-2 border-brand-green/20 cursor-pointer">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000" 
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Elite Overlay – Keep label, remove social media icons */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-purple via-transparent to-transparent h-1/3 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-[10px] text-white font-bold tracking-widest uppercase bg-brand-green px-4 py-1.5 rounded-full shadow-md">Executive Member</span>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-xl font-extrabold text-[#3A1D4D] mb-1 leading-tight group-hover:text-brand-purple transition-colors">{member.name}</h3>
                        <div className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-green bg-brand-green/10 px-4 py-1.5 rounded-full mb-6">
                          {member.role}
                        </div>
                      </div>

                      <div className="text-center text-xs text-slate-600 italic space-y-4 leading-relaxed">
                        {member.quote && (
                          <div className="text-brand-purple font-medium text-[11px] bg-white/80 backdrop-blur border border-slate-100 p-4 rounded-2xl mb-4 relative shadow-sm">
                            <span className="absolute top-1 left-2 text-3xl text-brand-green/20 leading-none font-serif">“</span>
                            <p className="relative z-10 px-3">{member.quote.replace(/[“”]/g, '')}</p>
                            <span className="absolute bottom-1 right-3 text-3xl text-brand-green/20 leading-none font-serif">”</span>
                          </div>
                        )}
                        <p className="px-1">{member.message}</p>
                      </div>
                    </div>

                    {member.note && (
                      <div className="mt-6 pt-5 border-t border-brand-purple/10 text-[10px] text-slate-400 font-medium text-center italic">
                        {member.note}
                      </div>
                    )}

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Operational Leadership Tier (Other Department Heads) */}
          <div className="text-center max-w-2xl mx-auto mb-10 pt-10 border-t border-slate-200/50">
            <h3 className="text-xl font-bold text-slate-700 tracking-tight">Management & Departmental Heads</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Md. Tanvir Islam',
                role: 'Director – Design & IT',
                image: directorImg,
                message: '“Our Design & IT team ensures smart digital solutions, modern design systems, and innovative technology integration for every project.”'
              },
              {
                name: 'Md Sakib Hossain',
                role: 'AGM',
                image: gmImg,
                message: '“We maintain operational excellence and ensure every department works efficiently to deliver the highest quality service.”'
              },
              {
                name: 'M.A Motin Uzzal',
                role: 'Technical Director',
                image: engHeadImg,
                message: '“Our engineering department is committed to safety, precision, and advanced technical solutions for all projects.”'
              }
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Compact Glassmorphism Card */}
                <div className="h-full bg-white/70 backdrop-blur-md border border-white/80 rounded-[2rem] p-6 shadow-xl hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between overflow-hidden relative z-10">
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-purple to-brand-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                  <div>
                    {/* Compact Circle Image with zoom */}
                    <div className="relative mb-6 overflow-hidden rounded-full aspect-square w-32 h-32 mx-auto shadow-inner bg-slate-100 border border-slate-100">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700" 
                      />
                      
                      {/* Image zoom effect on hover remains, no social links overlay */}
                    </div>

                    <div className="text-center">
                      <h3 className="text-base font-bold text-brand-purple mb-1">{member.name}</h3>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-brand-green mb-4">{member.role}</div>
                    </div>

                    <div className="text-center text-xs text-slate-500 italic leading-relaxed">
                      <p className="line-clamp-5">{member.message}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BOTTOM BACK TO HOME TRIGGER */}
        <div className="text-center mt-20">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-purple text-white hover:bg-brand-green hover:text-brand-purple rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-2xl"
          >
            <ArrowLeft size={16} />
            Back to Main Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutProfilePage;
