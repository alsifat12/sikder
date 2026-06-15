import React from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowUpCircle, Building2, Users, LifeBuoy, Monitor, LayoutDashboard, Database, Box, Play } from 'lucide-react';

const departments = [
  {
    title: 'Engineering Department',
    desc: 'Advanced electrical and engineering solutions for industrial and commercial projects.',
    icon: <Zap size={24} />,
    color: 'bg-brand-purple'
  },
  {
    title: 'Elevator Solution Unit',
    desc: 'Installation, maintenance, smart lift systems, and escalator services with global standards.',
    icon: <ArrowUpCircle size={24} />,
    color: 'bg-brand-green'
  },
  {
    title: 'Construction Dept.',
    desc: 'Modern building construction, structural engineering, and sustainable project development.',
    icon: <Building2 size={24} />,
    color: 'bg-brand-red'
  },
  {
    title: 'Marketing & Sales',
    desc: 'Building strong client relationships and providing professional customer support services.',
    icon: <Users size={24} />,
    color: 'bg-slate-700'
  },
  {
    title: 'Customer Support 24/7',
    desc: 'Continuous support, maintenance, and expert technical assistance for every client.',
    icon: <LifeBuoy size={24} />,
    color: 'bg-brand-green'
  }
];

const Departments = () => {
  return (
    <section id="departments" className="py-32 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left: Info */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="text-brand-green font-bold text-[10px] uppercase tracking-[0.4em] mb-4 text-left">Our Infrastructure</div>
              <h2 className="text-5xl md:text-6xl mb-8 text-brand-purple font-bold tracking-tight leading-tight">Specialized <br /><span className="text-brand-green">Departments</span></h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-10">
                SIKDER continues to grow through dedication, teamwork, and modern technology across various technical sectors.
              </p>
              
              <div className="bg-brand-purple p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <Play size={80} />
                </div>
                <h4 className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4">Core Philosophy</h4>
                <p className="text-lg font-bold leading-snug">
                  “Engineering the Future With Trust & Innovation”
                </p>
              </div>
            </div>
          </div>

          {/* Right: Dept Cards */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Special Design & IT Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-slate-900 p-10 md:p-12 rounded-[3.5rem] shadow-3xl text-white overflow-hidden relative group"
              >
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-green/10 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-brand-purple shadow-xl">
                        <Monitor size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight">Design & IT Department</h3>
                        <p className="text-brand-green text-[10px] font-bold uppercase tracking-[0.3em]">Smart Systems & Visualization</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[11px] font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                      <LayoutDashboard size={16} className="text-brand-green" /> Smart Building Tech
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                      <Box size={16} className="text-brand-green" /> 3D Visualization
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                      <Monitor size={16} className="text-brand-green" /> Digital Engineering
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                      <Monitor size={16} className="text-brand-green" /> Architectural Design
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                      <Database size={16} className="text-brand-green" /> Software Solutions
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                      <LifeBuoy size={16} className="text-brand-green" /> Technical Support
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Standard Depts */}
              {departments.map((dept, idx) => (
                <motion.div
                  key={dept.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50 hover:shadow-2xl transition-all group"
                >
                  <div className={`${dept.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {dept.icon}
                  </div>
                  <h4 className="text-xl font-bold text-brand-purple mb-4 uppercase tracking-tight">{dept.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {dept.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
