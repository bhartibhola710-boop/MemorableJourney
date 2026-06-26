import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';

const faqs = [
  { question: 'How do I secure a reservation?', answer: 'You can seamlessly initiate the booking process by submitting our inquiry form or consulting directly with our travel artisans.' },
  { question: 'Are itineraries fully customizable?', answer: 'Absolutely. Every journey we design can be intricately tailored to align with your unique preferences and aspirations.' },
  { question: 'Is comprehensive travel insurance available?', answer: 'Indeed. We offer robust travel insurance policies that can be seamlessly integrated into your itinerary for absolute peace of mind.' },
  { question: 'Which payment modalities are supported?', answer: 'We accept a diverse array of secure payment options, including major credit cards, swift bank transfers, and trusted digital payment gateways.' }
];

export default function Contact() {
  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <SEO 
        title="Contact Us | MemorableJourney" 
        description="Get in touch with MemorableJourney to plan your next unforgettable trip. We're here to answer all your travel inquiries."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We invite you to reach out and allow us to meticulously choreograph your next unforgettable expedition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
                  <p className="text-slate-600">
                    MemorableJourney<br/>
                    123 Travel Avenue,<br/>
                    Adventure District,<br/>
                    New Delhi, India - 110001
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone Number</h3>
                  <p className="text-slate-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Address</h3>
                  <p className="text-slate-600">info@memorablejourney.com</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-slate-600">
                    Monday - Friday: 9:00 AM - 7:00 PM<br/>
                    Saturday: 10:00 AM - 5:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl p-8 border border-white/20 shadow-xl shadow-slate-200/40 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-6">Send an Inquiry</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-3xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-3xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-3xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="+1 234 567 8900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Number of Travelers</label>
                  <input type="number" min="1" className="w-full px-4 py-3 rounded-3xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="2" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Destination</label>
                  <input type="text" className="w-full px-4 py-3 rounded-3xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="e.g. Bali, Dubai" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Travel Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-3xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-3xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Tell us about your dream trip..."></textarea>
              </div>

              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 text-white font-medium py-4 rounded-3xl transition-colors flex items-center justify-center gap-2">
                <Send className="h-5 w-5" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold focus:outline-none">
                  <h3 className="text-lg">{faq.question}</h3>
                  <span className="shrink-0 rounded-full bg-indigo-50/50 p-1.5 text-indigo-700 group-open:-rotate-180 transition-transform duration-300">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="p-6 pt-0 leading-relaxed text-slate-600 border-t border-slate-50">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
