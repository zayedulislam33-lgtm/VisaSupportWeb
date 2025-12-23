import React, { useState } from 'react';
import { 
  GraduationCap, Briefcase, Users, Plane, Globe2, Building2, 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, Award, X, 
  FileText, DollarSign
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ExtendedServiceItem extends ServiceItem {
  id: string;
  category: string;
  features: string[];
  gradientClass: string; 
  iconBgClass: string;
  details: {
    overview: string;
    requirements: string[];
    processingTime: string;
    govtFee: string;
  };
}

const services: ExtendedServiceItem[] = [
  {
    id: "student",
    title: "Student Visa",
    category: "Study",
    description: "Launch your academic journey at top global universities with our comprehensive study permit services.",
    icon: GraduationCap,
    gradientClass: "bg-gradient-to-r from-brand-500 to-brand-700",
    iconBgClass: "bg-brand-100 text-brand-600",
    features: ["University Shortlisting", "SOP & LOR Writing", "Scholarship Guidance"],
    details: {
      overview: "Our Student Visa service covers everything from selecting the right course and university to submitting a flawless visa application. We specialize in Canada, UK, USA, and Australia.",
      requirements: ["Valid Passport", "Acceptance Letter (LOA)", "Proof of Funds", "Language Proficiency (IELTS/PTE)"],
      processingTime: "4 - 12 Weeks",
      govtFee: "$150 - $500 (varies)"
    }
  },
  {
    id: "skilled",
    title: "Skilled Worker",
    category: "Work",
    description: "Maximize your CRS score and navigate Express Entry or PNP streams to work and live abroad.",
    icon: Briefcase,
    gradientClass: "bg-gradient-to-r from-purple-500 to-purple-700",
    iconBgClass: "bg-purple-100 text-purple-600",
    features: ["CRS Score Optimization", "PNP Nomination Help", "Job Search Assistance"],
    details: {
      overview: "Designed for professionals aiming for Permanent Residency through Express Entry, PNP, or Skilled Worker streams in Canada and Australia.",
      requirements: ["ECA Report", "Work Experience Letters", "IELTS General", "Age under 45 (preferred)"],
      processingTime: "6 - 12 Months",
      govtFee: "$850 - $1365 CAD"
    }
  },
  {
    id: "family",
    title: "Family Sponsorship",
    category: "Family",
    description: "Bring your family together. We handle spousal, parent, and child sponsorship applications with care.",
    icon: Users,
    gradientClass: "bg-gradient-to-r from-pink-500 to-rose-600",
    iconBgClass: "bg-pink-100 text-pink-600",
    features: ["Spousal Open Work Permit", "Parent Super Visa", "Dependent Child Visa"],
    details: {
      overview: "Reunite with your loved ones. We assist Canadian and Australian citizens/PR holders in sponsoring their spouses, parents, and children.",
      requirements: ["Proof of Relationship", "Sponsor's Income Proof", "Medical Exams", "Police Certificates"],
      processingTime: "12 - 24 Months",
      govtFee: "$1080 CAD approx"
    }
  },
  {
    id: "tourist",
    title: "Tourist & Visitor",
    category: "Travel",
    description: "Plan your holidays or family visits without visa stress. High approval rates for tourist applications.",
    icon: Plane,
    gradientClass: "bg-gradient-to-r from-orange-400 to-orange-600",
    iconBgClass: "bg-orange-100 text-orange-600",
    features: ["Itinerary Planning", "Invitation Letter Draft", "Fast-track Processing"],
    details: {
      overview: "Whether it's a summer vacation or a family visit, we prepare a strong application demonstrating your ties to your home country to ensure approval.",
      requirements: ["Bank Statements (6 months)", "Travel Itinerary", "Employment Proof", "Invitation Letter (if applicable)"],
      processingTime: "15 - 45 Days",
      govtFee: "$100 - $190 USD"
    }
  },
  {
    id: "business",
    title: "Business Immigration",
    category: "Business",
    description: "Expand your business globally. Investor visas, startup programs, and intra-company transfers.",
    icon: Building2,
    gradientClass: "bg-gradient-to-r from-emerald-500 to-emerald-700",
    iconBgClass: "bg-emerald-100 text-emerald-600",
    features: ["Startup Visa Program", "Investor Pathways", "Business Plan Support"],
    details: {
      overview: "For entrepreneurs and investors looking to start a business or invest in overseas markets. Includes Startup Visa and Intra-Company Transfers.",
      requirements: ["Net Worth Audit", "Business Plan", "Investment Capital", "Minimum Ownership %"],
      processingTime: "12 - 30 Months",
      govtFee: "$2000+ USD"
    }
  },
  {
    id: "pr",
    title: "Permanent Residency",
    category: "Work",
    description: "Your pathway to citizenship. We guide you through every step of the permanent residency process.",
    icon: Globe2,
    gradientClass: "bg-gradient-to-r from-cyan-500 to-cyan-700",
    iconBgClass: "bg-cyan-100 text-cyan-600",
    features: ["Express Entry Profile", "State Nomination", "PR Card Renewal"],
    details: {
      overview: "The ultimate goal for many. We handle PR applications via Express Entry, PNP, Subclass 189/190, and Green Card petitions.",
      requirements: ["Points Assessment", "Skill Assessment", "Language Test", "Medical & Security Clearance"],
      processingTime: "6 - 18 Months",
      govtFee: "Varies by country"
    }
  }
];

const categories = ["All", "Study", "Work", "Family", "Business", "Travel"];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState<ExtendedServiceItem | null>(null);

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden min-h-screen">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-brand-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
          <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-accent-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Watermark */}
        <div className="relative text-center mb-20">
          <span className="watermark-text">Expertise</span>
          <h2 className="relative z-10 text-sm font-bold text-accent-600 uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="relative z-10 text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Comprehensive Visa Solutions
          </h3>
          <p className="relative z-10 mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Select a category to find the perfect immigration pathway tailored to your profile.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === cat 
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                  : 'bg-white text-gray-600 hover:bg-brand-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 relative z-10">
          {filteredServices.map((service) => (
            <TiltCard key={service.id} service={service} onSelect={() => setSelectedService(service)} />
          ))}
        </div>
      </div>

      {/* Service Detail Modal (Unchanged logic) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedService(null)}></div>
          <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
            
            <div className={`relative h-40 ${selectedService.gradientClass} overflow-hidden`}>
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
              <div className="absolute inset-0 flex items-center px-8 md:px-12">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mr-6">
                  <selectedService.icon className={`w-10 h-10 ${selectedService.gradientClass.includes('brand') ? 'text-brand-600' : selectedService.gradientClass.includes('purple') ? 'text-purple-600' : 'text-gray-800'}`} />
                </div>
                <div>
                  <div className="text-white/80 font-bold uppercase text-xs tracking-wider mb-1">{selectedService.category} Visa</div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white">{selectedService.title}</h3>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-brand-500" /> Overview
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedService.details.overview}
                    </p>
                  </div>
                  {/* ... other modal details ... */}
                   <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <ShieldCheck className="w-5 h-5 mr-2 text-brand-500" /> Eligibility Requirements
                    </h4>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedService.details.requirements.map((req, i) => (
                          <li key={i} className="flex items-start text-gray-700 text-sm">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3 h-3 text-green-600" />
                            </div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg shadow-gray-100">
                    <h5 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Key Details</h5>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-gray-400 mb-1 flex items-center"><Clock className="w-3 h-3 mr-1"/> Processing Time</div>
                        <div className="font-bold text-brand-900">{selectedService.details.processingTime}</div>
                      </div>
                      <div className="h-px bg-gray-100"></div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1 flex items-center"><DollarSign className="w-3 h-3 mr-1"/> Govt. Fee (Approx)</div>
                        <div className="font-bold text-brand-900">{selectedService.details.govtFee}</div>
                      </div>
                    </div>
                    <button className="w-full mt-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center">
                      Check Eligibility <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

// 3D Tilt Card Component
const TiltCard: React.FC<{ service: ExtendedServiceItem, onSelect: () => void }> = ({ service, onSelect }) => {
    return (
        <div className="group relative perspective-1000 h-[450px]">
            <div 
                className="relative h-full w-full bg-white rounded-[2rem] shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col transform-style-3d hover:rotate-x-2 hover:rotate-y-2"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Top Colored Bar */}
                <div className={`h-2 w-full ${service.gradientClass}`}></div>
                
                <div className="p-8 flex-grow flex flex-col bg-white z-10">
                    <div className={`w-16 h-16 rounded-2xl mb-6 shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${service.iconBgClass}`}>
                        <service.icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                    </p>
                    
                    <div className="mt-auto space-y-4">
                        <div className="space-y-2">
                            {service.features.slice(0, 2).map((feature, i) => (
                                <div key={i} className="flex items-center text-sm text-gray-500">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                        
                        <button 
                          onClick={onSelect}
                          className="w-full mt-4 py-3 rounded-xl border border-brand-100 text-brand-600 font-bold hover:bg-brand-600 hover:text-white transition-all duration-300 flex items-center justify-center group/btn"
                        >
                          View Details 
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;