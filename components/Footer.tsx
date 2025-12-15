import React from 'react';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center text-white font-bold text-xl">
              <Globe className="w-6 h-6 mr-2 text-brand-500" />
              GlobalPath
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner for immigration and visa services. We turn your global dreams into reality with integrity and expertise.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-brand-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-brand-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-brand-500 transition-colors">Process</a></li>
              <li><a href="#about" className="hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Visa Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Student Visa</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Skilled Worker</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Business Visa</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Tourist Visa</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">PR Application</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                <span>123 Immigration Blvd, Suite 400<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                <span>info@globalpath.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} GlobalPath Immigration Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;