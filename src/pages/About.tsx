import { Users, Target, Eye, ShieldCheck, HeartPulse, Award, Lightbulb } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="py-12 md:py-20">
      <SEO 
        title="About Us | MemorableJourney" 
        description="Learn more about MemorableJourney, our values, and our mission to provide the best travel experiences."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-5xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-6 tracking-tight">Our Story</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Established in 2015, MemorableJourney was born from a profound passion for exploration. We strive to transcend ordinary tourism by crafting immersive experiences that resonate deeply, connecting intrepid souls with the world’s most captivating environments.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white/80 backdrop-blur-xl p-8 border border-white/20 shadow-xl shadow-slate-200/40 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-50/50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-in-out z-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-indigo-100 flex items-center justify-center rounded-[2rem] mb-6 text-indigo-700">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To orchestrate unparalleled voyages through meticulous planning, elevated service standards, and an unwavering dedication to our travelers' aspirations.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-950 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group text-white">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-in-out z-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 flex items-center justify-center rounded-[2rem] mb-6 text-amber-500">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                To emerge as the preeminent architect of transformative travel, forging enduring connections between adventurous spirits and the extraordinary wonders of our planet.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: HeartPulse, title: 'Traveler-Centric', desc: "Every itinerary is intricately woven around the distinct desires of our patrons." },
              { icon: ShieldCheck, title: 'Unwavering Integrity', desc: 'Absolute clarity in our operations and candid communication at all times.' },
              { icon: Award, title: 'Excellence', desc: 'A relentless pursuit of perfection across every facet of the travel experience.' },
              { icon: Lightbulb, title: 'Forward-Thinking', desc: 'Leveraging contemporary insights to elevate and modernize the art of travel.' },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-slate-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100">
                  <div className="text-indigo-600 mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-3">{v.title}</h3>
                  <p className="text-slate-600">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-indigo-600 rounded-[2rem] p-8 md:p-16 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">10,000+</div>
              <div className="text-indigo-100 font-medium uppercase tracking-wider text-sm">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">50+</div>
              <div className="text-indigo-100 font-medium uppercase tracking-wider text-sm">Destinations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">500+</div>
              <div className="text-indigo-100 font-medium uppercase tracking-wider text-sm">Custom Tours</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">98%</div>
              <div className="text-indigo-100 font-medium uppercase tracking-wider text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
