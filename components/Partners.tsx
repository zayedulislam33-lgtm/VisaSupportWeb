import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "Canada", img: "https://flagcdn.com/w160/ca.png" },
    { name: "Australia", img: "https://flagcdn.com/w160/au.png" },
    { name: "United Kingdom", img: "https://flagcdn.com/w160/gb.png" },
    { name: "USA", img: "https://flagcdn.com/w160/us.png" },
    { name: "Germany", img: "https://flagcdn.com/w160/de.png" },
    { name: "New Zealand", img: "https://flagcdn.com/w160/nz.png" },
  ];

  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Authorized Immigration Consultants for Major Destinations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((p, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-110">
              <img src={p.img} alt={p.name} className="h-10 w-auto shadow-sm rounded-sm" />
              <span className="mt-2 text-xs font-bold text-gray-500 group-hover:text-brand-600">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;