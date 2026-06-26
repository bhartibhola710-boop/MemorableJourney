import { Globe2, Map, Heart, Tent, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const services = [
  {
    title: 'Global Expeditions',
    description: 'Embark on curated journeys to the most enchanting corners of the world.',
    price: 'Starting from $699',
    icon: Globe2,
    includes: ['Flights', 'Hotels', 'Sightseeing', 'Airport Transfers']
  },
  {
    title: 'Local Discoveries',
    description: 'Unearth the hidden treasures and iconic landmarks nestled within your own borders.',
    price: 'Starting from $299',
    icon: Map,
    includes: ['Accommodation', 'Transportation', 'Guided Tours']
  },
  {
    title: 'Romantic Retreats',
    description: 'Intimate and idyllic escapes meticulously crafted for couples in love.',
    price: 'Starting from $999',
    icon: Heart,
    includes: ['Luxury Hotels', 'Romantic Dinners', 'Private Excursions']
  },
  {
    title: 'Thrill-Seeker Voyages',
    description: 'Exhilarating quests designed for adrenaline junkies and nature enthusiasts.',
    price: 'Starting from $499',
    icon: Tent,
    includes: ['Trekking', 'Rafting', 'Camping', 'Wildlife Safaris']
  },
  {
    title: 'Executive Travel Solutions',
    description: 'Sophisticated and seamless travel logistics for modern enterprises.',
    price: 'Custom Pricing',
    icon: Briefcase,
    includes: ['Flight Booking', 'Hotel Reservations', 'Conference Arrangements', 'Group Travel Planning']
  },
  {
    title: 'Visa Concierge',
    description: 'Navigating the complexities of global travel documentation with ease.',
    price: 'Consultation Fees Apply',
    icon: FileText,
    includes: ['Documentation Guidance', 'Appointment Scheduling', 'Application Review']
  }
];

export default function Services() {
  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <SEO 
        title="Our Services | MemorableJourney" 
        description="Explore our range of travel services including international tours, honeymoons, adventure tours, and more."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-6 tracking-tight">Our Travel Services</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you seek the serenity of romantic retreats or the adrenaline of intrepid expeditions, our diverse portfolio of services is tailored to manifest your ultimate travel aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-white rounded-[2rem] shadow-sm border border-slate-100/50 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-indigo-900/10 hover:border-indigo-100 transition-all duration-500 hover:-translate-y-2">
                <div className="p-8 flex-grow">
                  <div className="w-14 h-14 bg-indigo-50/50 rounded-[2rem] flex items-center justify-center text-indigo-600 mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-3">{service.title}</h2>
                  <p className="text-slate-600 mb-6 min-h-[3rem]">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-center text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
                    <span className="font-bold text-slate-900">{service.price}</span>
                    <Link to="/contact" className="text-indigo-700 hover:text-indigo-900 font-medium text-sm transition-colors">
                      Inquire &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
