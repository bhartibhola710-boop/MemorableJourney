import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const articles = [
  {
    title: 'The Elite 10: Destinations Defining 2026',
    excerpt: 'This year’s vanguard of travel showcases unparalleled destinations characterized by vibrant cultural tapestry and transcendent landscapes.',
    date: 'January 15, 2026',
    category: 'Travel Guides'
  },
  {
    title: 'The Art of Packing: A Global Traveler’s Handbook',
    excerpt: 'Master the delicate art of packing with efficiency and grace, ensuring you are impeccably prepared for every global endeavor.',
    date: 'February 10, 2026',
    category: 'Travel Tips'
  },
  {
    title: 'Idyllic Coastal Escapes for the Modern Family',
    excerpt: 'Discover tranquil shores that masterfully balance exhilarating familial activities with serene, restorative accommodations.',
    date: 'March 5, 2026',
    category: 'Family Travel'
  },
  {
    title: 'Luxurious Journeys on a Considered Budget',
    excerpt: 'Strategic insights that empower you to traverse the globe elegantly without compromising the grandeur of the experience.',
    date: 'April 18, 2026',
    category: 'Budget Travel'
  },
  {
    title: 'The Unrivaled Merits of Curated Guided Tours',
    excerpt: 'Delve into the profound advantages of entrusting your expedition to the meticulous care of professional local artisans.',
    date: 'May 12, 2026',
    category: 'Travel Advice'
  }
];

export default function Blog() {
  return (
    <div className="py-12 md:py-20 bg-white">
      <SEO 
        title="Travel Blog | MemorableJourney" 
        description="Read our latest travel articles, destination guides, and essential tips for your next adventure."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-6 tracking-tight">Latest Travel Articles</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Immerse yourself in our curated collection of contemporary travel trends, insightful tips, and evocative destination chronicles crafted by seasoned explorers.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article, idx) => (
            <article key={idx} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-900/10 hover:border-indigo-100 transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1.5 bg-indigo-100 text-indigo-900 px-2.5 py-0.5 rounded-full font-medium">
                  <Tag className="h-4 w-4" />
                  {article.category}
                </div>
              </div>
              
              <h2 className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 mb-4 group-hover:text-indigo-700 transition-colors">
                <Link to="#">{article.title}</Link>
              </h2>
              
              <p className="text-slate-600 leading-relaxed max-w-3xl mb-6">
                {article.excerpt}
              </p>
              
              <Link to="#" className="inline-flex items-center text-indigo-700 font-medium hover:text-indigo-900 transition-colors">
                Read Full Article <span className="ml-1 tracking-normal hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
