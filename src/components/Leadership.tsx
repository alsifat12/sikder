import React from 'react';
import { motion } from 'motion/react';
import chairmanImg from '../assets/images/regenerated_image_1779485225011.jpg';
import viceChairmanImg from '../assets/images/regenerated_image_1779732220410.jpg';
import mdImg from '../assets/images/regenerated_image_1779732221968.jpg';
import directorImg from '../assets/images/director_tanvir_islam_1779215762368.png';
import gmImg from '../assets/images/gm_mohammad_arif_1779215782975.png';
import engHeadImg from '../assets/images/eng_head_rafiul_karim_1779215798847.png';

const boardOfDirectors = [
  {
    name: 'Sikder Taslima Akter',
    role: 'Chairman',
    image: chairmanImg,
    message: '“We strive to lead the engineering, industrial, and agricultural technology sectors in Bangladesh with honesty, quality, and sustainable practices.”',
    social: { linkedin: '#', facebook: '#' }
  },
  {
    name: 'Sikder Md Anowar Hossain Sobuj',
    role: 'Managing Director',
    image: mdImg,
    message: '“Our structural designs, automated solutions, and customized panels demonstrate Sikder Group’s precision engineering standards.”',
    social: { linkedin: '#', facebook: '#' }
  },
  {
    name: 'Md Jahangir Prodhan',
    role: 'Vice Chairman',
    image: viceChairmanImg,
    message: '“Partnering with global heavy-industry leaders and local technical talents allows us to install world-class power and vertical mobility networks.”',
    social: { linkedin: '#', facebook: '#' }
  }
];

const managementTeam = [
  {
    name: 'Md. Tanvir Islam',
    role: 'Director – Design & IT',
    image: directorImg,
    message: '“Our Design & IT team ensures smart digital solutions, modern design systems, and innovative technology integration for every project.”',
    social: { linkedin: '#', facebook: '#' }
  },
  {
    name: 'Md Sakib Hossain',
    role: 'AGM',
    image: gmImg,
    message: '“We maintain operational excellence and ensure every department works efficiently to deliver the highest quality service.”',
    social: { linkedin: '#', facebook: '#' }
  },
  {
    name: 'M.A Motin Uzzal',
    role: 'Technical Director',
    image: engHeadImg,
    message: '“Our engineering department is committed to safety, precision, and advanced technical solutions for all projects.”',
    social: { linkedin: '#', facebook: '#' }
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-green font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
              Visionary Leadership • Professional Execution • Engineering Trust
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#3A1D4D] tracking-tight font-black">Our Management Team</h2>
            <p className="text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed text-sm">
              Our governing board and functional division leads unite rich industry expertise to execute large-scale, high-complexity projects nationwide.
            </p>
          </motion.div>
        </div>

        {/* 1. Executive Board Section (FEATURED & LARGER IMAGES) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xs font-black text-slate-400 tracking-[0.3em] uppercase mb-1">
              Governing Board of Directors
            </h3>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
            {boardOfDirectors.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative"
              >
                {/* Larger Premium Card for Board */}
                <div className="h-full bg-white border border-slate-200/60 rounded-[3rem] p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col group-hover:border-brand-purple/30 overflow-hidden relative">
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 bg-gradient-to-br from-brand-purple/5 to-brand-green/5 blur-2xl"></div>

                  {/* LARGE PORTRAIT (w-56 h-56 md:w-64 md:h-64) */}
                  <div className="relative mb-8 overflow-hidden rounded-full aspect-square shadow-md border-4 border-slate-100 mx-auto w-56 h-56 md:w-60 md:h-60">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    {/* Photo Hover effect remains, no social links overlay */}
                  </div>

                  {/* Info */}
                  <div className="flex-grow text-center flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl md:text-2xl font-black text-slate-800 mb-1 leading-tight group-hover:text-brand-purple transition-colors">
                        {member.name}
                      </h4>
                      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-green mb-4">
                        {member.role}
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-slate-500 italic leading-relaxed font-medium bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                      {member.message}
                    </p>
                  </div>

                  {/* Interactive Border Effect */}
                  <div className="mt-6 w-full h-[3px] bg-slate-100 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-green to-brand-purple translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Management Leads Section (Standard Sized Cards) */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xs font-black text-slate-400 tracking-[0.3em] uppercase mb-1">
              Executive & Technical Leads
            </h3>
            <div className="w-12 h-1 bg-brand-green mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {managementTeam.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Standard Card */}
                <div className="h-full bg-white/80 border border-slate-100 rounded-[2rem] p-6 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col group-hover:border-slate-300 overflow-hidden">
                  
                  {/* Photo Area (w-40 h-40) */}
                  <div className="relative mb-6 overflow-hidden rounded-full aspect-square border border-slate-100 bg-slate-50 mx-auto w-40 h-40">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    {/* Photo hover effect remains with no social overlay */}
                  </div>

                  {/* Info */}
                  <div className="flex-grow text-center flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-slate-800 mb-1 leading-tight">
                        {member.name}
                      </h4>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-[#3A1D4D] mb-3">
                        {member.role}
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 italic leading-relaxed">
                      {member.message}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
