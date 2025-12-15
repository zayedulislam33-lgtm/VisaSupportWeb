import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main>
        {/* 2. Hero Section */}
        <Hero />
        
        {/* 3. Partner Countries / Trust Logos */}
        <Partners />
        
        {/* 4. Services Grid */}
        <Services />
        
        {/* 11. Country-Specific Services */}
        <CountryFocus />
        
        {/* 7. Statistics Counter */}
        <Stats />
        
        {/* 5. FREE Eligibility Assessment Tool */}
        <AssessmentTool />
        
        {/* 6. Process/Steps Section */}
        <Process />
        
        {/* 10. Document Checklist Download */}
        <DocumentChecklist />
        
        {/* 8. Video Testimonials Section */}
        <VideoTestimonials />
        
        {/* 9. Google Reviews Widget */}
        <GoogleReviews />
        
        {/* AI Assistant (Advanced Feature) */}
        <AiAssistant />
        
        {/* 12. FAQ Accordion */}
        <FAQ />
        
        {/* 13. Blog Highlights */}
        <Blog />
        
        {/* 14. Appointment Booking CTA */}
        <BookingCTA />
        
        {/* 16. Newsletter Signup */}
        <Newsletter />
      </main>

      {/* 17. Footer */}
      <Footer />
      
      {/* 18. Floating Elements */}
      <FloatingWidgets />
    </div>
  );
};

export default App;