import React, { useEffect, useState, useRef } from 'react';
import { Users, Globe2, Award, FileCheck } from 'lucide-react';
import { StatItem } from '../types';

const stats: (StatItem & { suffix: string; target: number })[] = [
  { label: "Happy Clients", value: "10,000+", icon: Users, target: 10000, suffix: "+" },
  { label: "Visa Success", value: "98%", icon: Award, target: 98, suffix: "%" },
  { label: "Countries", value: "50+", icon: Globe2, target: 50, suffix: "+" },
  { label: "Projects Done", value: "12,500", icon: FileCheck, target: 12500, suffix: "" },
];

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-brand-900 text-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-pulse-slow" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <CounterItem key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterItem: React.FC<{ stat: any, isVisible: boolean }> = ({ stat, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000; // 2 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth stop
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      
      setCount(Math.floor(easeOutQuart(percentage) * stat.target));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, stat.target]);

  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors transform hover:-translate-y-2 duration-300">
      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/40 animate-float">
        <stat.icon className="w-6 h-6" />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold mb-1 tabular-nums">
        {isVisible ? count.toLocaleString() : 0}{stat.suffix}
      </div>
      <div className="text-brand-100 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
    </div>
  );
};

export default Stats;