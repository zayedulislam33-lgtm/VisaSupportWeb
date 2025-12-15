import React from 'react';
import { Users, Globe2, Award, FileCheck } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { label: "Happy Clients", value: "10,000+", icon: Users },
  { label: "Visa Success", value: "95%", icon: Award },
  { label: "Countries", value: "50+", icon: Globe2 },
  { label: "Projects Done", value: "12,500", icon: FileCheck },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-brand-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/40">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-brand-100 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;