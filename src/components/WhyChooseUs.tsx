import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Shield, Award, Clock, HeartHandshake, Construction } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <HeartHandshake className="text-brand-green" size={40} />,
      title: 'Trusted Since 2004',
      desc: 'Building legacy for over two decades with transparency and commitment.'
    },
    {
      icon: <Award className="text-brand-green" size={40} />,
      title: 'Expert Engineers',
      desc: 'A team of highly qualified specialists dedicated to technical precision.'
    },
    {
      icon: <Shield className="text-brand-green" size={40} />,
      title: 'Modern Technology',
      desc: 'Integrating advanced engineering tools for futuristic infrastructure.'
    },
    {
      icon: <Clock className="text-brand-green" size={40} />,
      title: '24/7 Support',
      desc: 'Continuous technical monitoring and emergency helpdesk availability.'
    },
    {
      icon: <Award className="text-brand-green" size={40} />,
      title: 'Quality Assurance',
      desc: 'Strict adherence to international construction and electrical standards.'
    },
    {
      icon: <Construction className="text-brand-green" size={40} />,
      title: 'Smart Solutions',
      desc: 'Optimized building management systems and smart lift technologies.'
    }
  ];

  return (
    <section className="py-32 bg-brand-purple relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/10 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-green font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Values & Excellence</div>
          <h2 className="text-4xl md:text-6xl mb-6 text-white font-bold tracking-tight">Why Partner With <span className="text-brand-green">SIKDER</span></h2>
          <p className="text-white/50 text-base leading-relaxed italic">
            Over 20 years of experience delivering the promise of trust and quality performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl hover:bg-white/20 transition-all group border-white/5"
            >
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-brand-green group-hover:text-brand-purple transition-all duration-500">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider group-hover:text-brand-green transition-colors">{reason.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-medium">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
