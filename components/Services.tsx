import React, { useState } from 'react';
import { 
  GraduationCap, Briefcase, Users, Plane, Globe2, Building2, 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, Award, X, 
  FileText, DollarSign, Star, Zap 
} from 'lucide-react';
import { ServiceItem } from '../types';

// Extended interface for detailed service data
interface ExtendedServiceItem extends ServiceItem {
  id: string;
  category: string;
  features: string[];
  color: string;
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
    color: "from-blue-400 to-blue-600",
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
    color: "from-purple-400 to-purple-600",
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
    color: "from-pink-400 to-rose-600",
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
    color: "from-orange-400 to-amber-600",
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
    color: "from-emerald-400 to-teal-600",
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
    color: "from-cyan-400 to-sky-600",
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
          <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-brand-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
          <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-accent-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent-600 uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Comprehensive Visa Solutions
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Select a category to find the perfect immigration pathway tailored to your profile.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id}
              className="group relative perspective-1000 h-[450px]"
            >
              <div className="relative h-full w-full bg-white rounded-[2rem] shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col">
                {/* Top Colored Bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8 flex-grow flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 shadow-md group-hover:scale-110 transition-transform duration-500`}>
                        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                            <service.icon className="w-8 h-8 text-gray-700" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
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
                          onClick={() => setSelectedService(service)}
                          className="w-full mt-4 py-3 rounded-xl border border-brand-100 text-brand-600 font-bold hover:bg-brand-600 hover:text-white transition-all duration-300 flex items-center justify-center group/btn"
                        >
                          View Details 
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Packages Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Transparent Pricing Plans</h3>
            <p className="text-gray-500 mt-2">Choose the level of support that suits your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Basic Plan */}
             <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all relative">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Consultation</h4>
                <div className="text-3xl font-extrabold text-gray-900 mb-6">$100 <span className="text-sm text-gray-500 font-normal">/ session</span></div>
                <p className="text-sm text-gray-500 mb-6">Perfect for initial assessment and clearing doubts.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2"/> 45 Mins Call</li>
                  <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2"/> Profile Evaluation</li>
                  <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2"/> Roadmap Creation</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-gray-50 text-brand-900 font-bold hover:bg-brand-100 transition-colors">Select Plan</button>
             </div>

             {/* Pro Plan (Highlighted) */}
             <div className="bg-brand-900 rounded-3xl p-8 border border-brand-800 shadow-2xl relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
                <h4 className="text-xl font-bold text-white mb-2">Full Representation</h4>
                <div className="text-3xl font-extrabold text-white mb-6">$1,500 <span className="text-sm text-brand-200 font-normal">/ application</span></div>
                <p className="text-sm text-brand-100 mb-6">End-to-end management of your visa application.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-white"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2"/> Dedicated Case Manager</li>
                  <li className="flex items-center text-sm text-white"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2"/> Document Verification</li>
                  <li className="flex items-center text-sm text-white"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2"/> Legal Submission Letter</li>
                  <li className="flex items-center text-sm text-white"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2"/> Interview Preparation</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-accent-500 text-white font-bold hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/30">Get Started</button>
             </div>

             {/* VIP Plan */}
             <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Priority / VIP</h4>
                <div className="text-3xl font-extrabold text-gray-900 mb-6">$2,500 <span className="text-sm text-gray-500 font-normal">/ application</span></div>
                <p className="text-sm text-gray-500 mb-6">Fast-track service with 24/7 support.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2"/> All Pro Features</li>
                  <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2"/> Priority Processing</li>
                  <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2"/> Unlimited Revisions</li>
                  <li className="flex items-center text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-brand-500 mr-2"/> Post-Landing Support</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-gray-50 text-brand-900 font-bold hover:bg-brand-100 transition-colors">Select Plan</button>
             </div>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedService(null)}></div>
          <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
            
            {/* Modal Header */}
            <div className={`relative h-40 bg-gradient-to-r ${selectedService.color} overflow-hidden`}>
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
              <div className="absolute inset-0 flex items-center px-8 md:px-12">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mr-6">
                  <selectedService.icon className="w-10 h-10 text-brand-600" />
                </div>
                <div>
                  <div className="text-white/80 font-bold uppercase text-xs tracking-wider mb-1">{selectedService.category} Visa</div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white">{selectedService.title}</h3>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-brand-500" /> Overview
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedService.details.overview}
                    </p>
                  </div>

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

                {/* Sidebar Info */}
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

                  <div className="bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-100 p-6">
                    <div className="flex items-center gap-2 mb-2">
                       <Award className="w-5 h-5 text-accent-500" />
                       <span className="font-bold text-gray-800">Success Rate</span>
                    </div>
                    <div className="text-3xl font-extrabold text-brand-600">98.5%</div>
                    <p className="text-xs text-gray-500 mt-1">For this visa category in 2023</p>
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

export default Services;