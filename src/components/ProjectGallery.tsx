import React from 'react';
import { motion } from 'motion/react';

const projects = [
  { title: 'Commercial Complex Electrification', company: 'Electric & Engineering', location: 'Dhaka' },
  { title: 'Luxury Residental Lifts Installation', company: 'Elevator Solution', location: 'Chittagong' },
  { title: 'Smart Office Building Construction', company: 'Building Technology', location: 'Sylhet' },
  { title: 'Industrial Generator Power Grid', company: 'Electric & Engineering', location: 'Gazipur' },
  { title: 'Hospital Capsule Lift Project', company: 'Elevator Solution', location: 'Dhaka' },
  { title: 'Residential Apartment Complex', company: 'Building Technology', location: 'Narayanganj' },
];

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl text-brand-blue mb-4">Our Projects</h2>
            <div className="h-1.5 w-16 bg-brand-gold"></div>
          </div>
          <p className="text-slate-500 max-w-md text-sm mt-4 md:mt-0">
            Showcasing our precision and engineering excellence through a diverse portfolio of successfully delivered projects.
          </p>
        </div>

        <div id="gallery" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden bg-brand-blue aspect-video"
            >
              <div className="absolute inset-0 bg-brand-blue/40 group-hover:bg-brand-blue/80 transition-all z-10"></div>
              {/* Placeholder for project images - in a real app these would be unique */}
              <div className="absolute inset-0 flex items-center justify-center -z-0">
                <span className="text-white/10 font-bold text-6xl uppercase tracking-tighter">Project</span>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold block mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.company}
                </span>
                <h4 className="text-white font-bold text-lg mb-1">{project.title}</h4>
                <p className="text-white/60 text-xs italic">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-b-2 border-brand-gold text-brand-blue font-bold px-4 py-2 hover:bg-brand-gold hover:text-white transition-all uppercase tracking-widest text-sm">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
