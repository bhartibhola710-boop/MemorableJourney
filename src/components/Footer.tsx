import { Link } from 'react-router-dom';
import { MapPin as MapPinIcon, Phone as PhoneIcon, Mail as MailIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, Youtube as YoutubeIcon, Palmtree } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Palmtree className="h-8 w-8 text-amber-500" />
              <span className="font-serif font-bold text-3xl text-white tracking-tight">MemorableJourney</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Creating Memories That Last a Lifetime. We help you explore breathtaking destinations and personalized travel experiences tailored just for you.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>123 Travel Avenue,<br/>Adventure District,<br/>New Delhi, India - 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>info@memorablejourney.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
          &copy; {new Date().getFullYear()} MemorableJourney. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
