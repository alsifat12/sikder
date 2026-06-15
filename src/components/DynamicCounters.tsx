import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, CheckCircle2, ShieldAlert, Cpu, Trophy, Star } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const CountUp: React.FC<CounterProps> = ({ end, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easedProgress = progressRatio * (2 - progressRatio);
      
      setCount(Math.floor(easedProgress * end));

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const DynamicCounters: React.FC = () => {
  const stats = [
    {
      id: 'stat-years',
      label: 'Years of Excellence',
      bnLabel: 'শ্রেষ্ঠত্বের ২০ বছর',
      endValue: 20,
      suffix: '+',
      icon: Trophy,
      color: 'text-brand-green',
      borderColor: 'border-brand-green/20'
    },
    {
      id: 'stat-projects',
      label: 'Projects Completed',
      bnLabel: 'সম্পন্নকৃত প্রকল্প',
      endValue: 1000,
      suffix: '+',
      icon: CheckCircle2,
      color: 'text-yellow-500',
      borderColor: 'border-yellow-500/20'
    },
    {
      id: 'stat-engineers',
      label: 'Expert Engineers',
      bnLabel: 'দক্ষ প্রকৌশলী',
      endValue: 50,
      suffix: '+',
      icon: Cpu,
      color: 'text-blue-500',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'stat-safety',
      label: 'Safety Score Compliance',
      bnLabel: 'শতভাগ নিরাপত্তা মান',
      endValue: 100,
      suffix: '%',
      icon: Award,
      color: 'text-emerald-500',
      borderColor: 'border-emerald-500/20'
    }
  ];

  return (
    <section id="dynamic-metrics" className="relative py-16 -mt-8 bg-brand-light z-30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-xl flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Subtle top indicator border */}
                <span className={`absolute top-0 inset-x-0 h-1.5 ${
                  stat.id === 'stat-years' ? 'bg-brand-green' :
                  stat.id === 'stat-projects' ? 'bg-yellow-500' :
                  stat.id === 'stat-engineers' ? 'bg-blue-500' : 'bg-emerald-500'
                }`} />

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-1">
                      SIKDER GROUP
                    </span>
                    <h3 className="text-slate-800 font-extrabold text-xs md:text-sm tracking-tight leading-tight uppercase font-sans">
                      {stat.label}
                    </h3>
                    <p className="text-[#6C8B3C] font-semibold text-[10px] md:text-[11px] mt-0.5">
                      {stat.bnLabel}
                    </p>
                  </div>
                  <div className={`p-3 rounded-2xl bg-slate-50 ${stat.color} shadow-inner`}>
                    <Icon size={20} />
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="text-3xl md:text-5xl font-black text-brand-purple tracking-tighter flex items-baseline">
                    <CountUp end={stat.endValue} suffix={stat.suffix} />
                  </div>
                  <span className="text-[8px] font-black tracking-widest text-[#6C8B3C] uppercase block mt-1">
                    VERIFIED CERTIFIED
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DynamicCounters;
