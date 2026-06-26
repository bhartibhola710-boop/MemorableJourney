import { ArrowRight, Star, Heart, Shield, HeadphonesIcon, MapPin, Calendar, Compass, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const destinations = [
  {
    name: 'Bali, Indonesia',
    duration: '5 Days / 4 Nights',
    price: '$799',
    highlights: 'Beaches, Temples, Water Sports',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    name: 'Dubai, UAE',
    duration: '4 Days / 3 Nights',
    price: '$899',
    highlights: 'Desert Safari, Burj Khalifa',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    name: 'Switzerland',
    duration: '7 Days / 6 Nights',
    price: '$1,599',
    highlights: 'Alps, Scenic Train Rides',
    image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    name: 'Santorini, Greece',
    duration: '6 Days / 5 Nights',
    price: '$1,299',
    highlights: 'Sunsets, Vineyards, Beaches',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

const features = [
  {
    title: 'Curated Itineraries',
    description: 'Bespoke travel plans meticulously designed by seasoned globetrotters.',
    icon: Star
  },
  {
    title: 'Exceptional Value',
    description: 'Uncompromising quality paired with competitive pricing structures.',
    icon: Heart
  },
  {
    title: 'Round-the-Clock Support',
    description: 'Unwavering assistance at every stage of your expedition.',
    icon: HeadphonesIcon
  },
  {
    title: 'Global Trust',
    description: 'Empowering the adventures of over ten thousand delighted explorers.',
    icon: Shield
  }
];

const testimonials = [
  {
    text: "Our honeymoon was nothing short of magical. The team at MemorableJourney orchestrated every detail with precision, allowing us to simply savor the moment.",
    author: "Sarah & James",
    role: "Honeymooners",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "An absolute triumph of travel planning. The insightful local guides introduced us to hidden wonders we could never have discovered independently.",
    author: "Michael Davis",
    role: "Solo Explorer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "A flawlessly executed family retreat. It completely removed the stress of organizing, leaving us with pure joy and unforgettable experiences for the children.",
    author: "Emma Wilson",
    role: "Family Vacation",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-slate-50">
      <SEO 
        title="Home | MemorableJourney-TourandTravel" 
        description="Discover breathtaking destinations, personalized travel experiences, and unforgettable adventures tailored exactly to your dreams."
      />
      {/* Ultra Modern Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-100/40 blur-3xl mix-blend-multiply" />
          <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-rose-100/40 blur-3xl mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-indigo-100/50 shadow-sm mb-8">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                <span className="text-sm font-medium text-indigo-900 tracking-wide">Discover the world with us</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500">Journeys</span><br />
                That Echo Through Time
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                Embark on meticulously curated expeditions, immerse yourself in vibrant cultures, and discover awe-inspiring landscapes tailored to your unique wanderlust.
              </p>
              
              <div className="flex flex-wrap items-center gap-5">
                <Link 
                  to="/services" 
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-indigo-900 text-white rounded-full font-medium overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Start Exploring</span>
                  <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center gap-3 px-6 py-4 text-slate-800 font-medium hover:text-indigo-600 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 fill-slate-800 group-hover:fill-indigo-600" />
                  </div>
                  Watch Video
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-8 border-t border-slate-200/60 pt-8">
                <div>
                  <div className="text-3xl font-serif font-bold text-slate-900">10k+</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Happy Travelers</div>
                </div>
                <div className="w-px h-12 bg-slate-200/60" />
                <div>
                  <div className="text-3xl font-serif font-bold text-slate-900">50+</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Destinations</div>
                </div>
                <div className="w-px h-12 bg-slate-200/60" />
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img key={i} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-indigo-50 flex items-center justify-center text-xs font-bold text-indigo-600">+</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image Collage */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg xaspect-square">
                 <div className="absolute top-0 right-0 w-2/3 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-900/20 rotate-3 z-10 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800&h=1000" className="w-full h-full object-cover" alt="Travel Resort" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white text-sm font-medium flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <MapPin className="h-4 w-4" /> Maldives Getaway
                    </div>
                 </div>
                 
                 <div className="absolute top-24 -left-8 w-1/2 h-[350px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/10 -rotate-6 z-20 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=600&h=800" className="w-full h-full object-cover" alt="Beach Details" />
                 </div>
                 
                 {/* Floating Badges */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 right-12 z-30 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
                  >
                    <div className="bg-amber-100 p-2.5 rounded-xl">
                      <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900">4.9/5</div>
                      <div className="text-xs text-slate-500 font-medium">Average Rating</div>
                    </div>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Compass className="h-4 w-4" /> Popular Tours
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Breathtaking Destinations</h3>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group">
              View All Destinations
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className="group relative rounded-3xl overflow-hidden bg-slate-50 cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-indigo-900 shadow-lg">
                      {dest.price}
                    </div>
                  </div>
                </div>
                
                {/* Information Card that slides up slightly on hover */}
                <div className="relative z-20 -mt-10 mx-4 mb-4 bg-white rounded-2xl p-5 shadow-lg border border-slate-100 group-hover:-translate-y-2 transition-transform duration-500">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{dest.name}</h4>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-3 font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    {dest.duration}
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-1 mb-4 border-t border-slate-100 pt-3">
                    {dest.highlights}
                  </p>
                  <div className="flex items-center justify-between">
                     <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Explore</span>
                     <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                       <ArrowRight className="h-4 w-4" />
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid Style */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Our Promise</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Why Travel With Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              // Creating a bento layout by making some cards span differently (just for visual interest if needed, here we'll keep them uniform but highly styled)
              return (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  key={idx} 
                  className={`bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 relative overflow-hidden group ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-indigo-50 rounded-full blur-2xl group-hover:bg-rose-50 transition-colors duration-500" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-14 h-14 bg-white border border-slate-100 shadow-sm flex items-center justify-center rounded-2xl mb-8 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed mt-auto">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-rose-100 blur-3xl rounded-full mix-blend-multiply" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">What Our Travelers Say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                key={idx} 
                className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 relative group"
              >
                {/* Large Quote Mark */}
                <div className="absolute top-8 right-8 text-indigo-100 font-serif text-8xl leading-none group-hover:text-indigo-200 transition-colors pointer-events-none">
                  "
                </div>

                <div className="flex gap-1 mb-8 text-amber-400">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="h-5 w-5 fill-amber-400" />
                   ))}
                </div>
                
                <p className="text-slate-700 font-medium leading-relaxed mb-10 relative z-10">
                   "{t.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                   <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                   <div>
                     <div className="font-bold text-slate-900">{t.author}</div>
                     <div className="text-xs font-semibold text-indigo-600">{t.role}</div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
           <div className="absolute inset-0 bg-indigo-900 rounded-[3rem] transform -rotate-1 scale-[0.98] opacity-50 blur-sm" />
           <div className="relative bg-indigo-900 rounded-[3rem] px-8 py-16 md:py-20 md:px-20 overflow-hidden shadow-2xl">
              {/* Abstract decorative shapes inside CTA */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-50 mix-blend-screen pulse" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-rose-500 rounded-full blur-3xl opacity-40 mix-blend-screen" />
              
              <div className="relative z-10 text-center max-w-2xl mx-auto text-white">
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready for your next adventure?</h2>
                 <p className="text-indigo-100/80 text-lg mb-10 leading-relaxed">
                   Allow our specialists to sculpt the ultimate itinerary for your next grand escapade. Connect with our dedicated travel artisans today.
                 </p>
                 <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-indigo-900 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Plan Your Trip Now
                  </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
