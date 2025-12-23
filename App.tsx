import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import CountryFocus from './components/CountryFocus';
import Stats from './components/Stats';
import AssessmentTool from './components/AssessmentTool';
import Process from './components/Process';
import DocumentChecklist from './components/DocumentChecklist';
import VideoTestimonials from './components/VideoTestimonials';
import GoogleReviews from './components/GoogleReviews';
import AiAssistant from './components/AiAssistant';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import BookingCTA from './components/BookingCTA';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import { Home, Grid, MapPin, Phone, FileText } from 'lucide-react';

const App: React.FC = () => {
  // Navigation State
  const [currentView, setCurrentView] = useState('Home');

  // Scroll Animation Observer Logic - Re-triggers every time
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% visible
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Toggle active class: Add when visible, Remove when hidden
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Select all elements with reveal classes with a slight delay to ensure DOM is ready
    setTimeout(() => {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [currentView]); // Re-run when view changes

  // Logic to render content based on current view
  const renderContent = () => {
    switch (currentView) {
      case 'Home':
        return (
          <>
            <Hero />
            <div className="reveal-scale"><Partners /></div>
            <div className="reveal"><Services /></div>
            <Stats />
            <div className="bg-gray-50 pt-10 reveal">
              <CountryFocus />
            </div>
            <div className="reveal"><Process /></div>
            <div className="reveal-scale"><AssessmentTool /></div>
            <div className="reveal"><AiAssistant /></div>
            <div className="reveal-left"><DocumentChecklist /></div>
            <div className="reveal-scale"><GoogleReviews /></div>
            <div className="reveal"><VideoTestimonials /></div>
            <div className="reveal"><Blog /></div>
            <div className="reveal"><FAQ /></div>
            <div className="reveal"><Newsletter /></div>
            <div className="reveal"><BookingCTA /></div>
          </>
        );
      
      case 'Services':
        return (
          <div className="animate-fade-in pt-24">
             <Services />
             <div className="reveal-scale"><AssessmentTool /></div>
             <div className="reveal"><DocumentChecklist /></div>
          </div>
        );

      case 'Destinations':
        return (
          <div className="animate-fade-in pt-24">
            <CountryFocus />
            <div className="reveal"><AiAssistant /></div>
          </div>
        );

      case 'Process':
        return (
          <div className="animate-fade-in pt-24">
            <Process />
            <div className="reveal"><FAQ /></div>
          </div>
        );

      case 'Reviews':
        return (
          <div className="animate-fade-in pt-24">
            <div className="py-12 bg-gray-50 text-center reveal">
              <div className="relative inline-block">
                <span className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !text-[5rem] md:!text-[8rem]">FEEDBACK</span>
                <h1 className="relative z-10 text-4xl font-extrabold text-gray-900">What Our Clients Say</h1>
              </div>
              <p className="relative z-10 text-gray-600 mt-3 max-w-2xl mx-auto">Real stories from people who have successfully moved abroad with GlobalPath.</p>
            </div>
            <GoogleReviews />
            <VideoTestimonials />
          </div>
        );

      case 'Blog':
        return (
          <div className="animate-fade-in pt-24">
            <Blog />
            <Newsletter />
          </div>
        );
        
      case 'Contact':
         return (
             <div className="animate-fade-in pt-24">
                 <BookingCTA />
                 <FAQ />
             </div>
         );

      default:
        return <Hero />;
    }
  };

  const MobileNavButton = ({ icon: Icon, label, view }: { icon: any, label: string, view: string }) => (
    <button 
      onClick={() => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`flex flex-col items-center justify-center w-full py-2 transition-colors ${
        currentView === view ? 'text-brand-600' : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      <Icon className={`w-6 h-6 mb-1 ${currentView === view ? 'fill-current' : ''}`} strokeWidth={2} />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      {/* Added pb-20 to main content to prevent content being hidden behind mobile sticky footer */}
      <main className="flex-grow pb-20 lg:pb-0">
        {renderContent()}
      </main>

      <Footer />
      <FloatingWidgets />

      {/* Sticky Mobile Bottom Navigation (App-like feel) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 lg:hidden shadow-[0_-5px_10px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex justify-around items-center h-16 px-2">
           <MobileNavButton icon={Home} label="Home" view="Home" />
           <MobileNavButton icon={Grid} label="Services" view="Services" />
           <MobileNavButton icon={FileText} label="Track" view="Process" />
           <MobileNavButton icon={MapPin} label="Destinations" view="Destinations" />
           <MobileNavButton icon={Phone} label="Contact" view="Contact" />
        </div>
      </div>
    </div>
  );
};

export default App;