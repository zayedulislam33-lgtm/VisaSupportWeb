import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Canada Announces New Rules for International Students in 2024",
    excerpt: "The IRCC has introduced caps on study permits and changes to PGWP eligibility. Here is what you need to know.",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=400&q=80",
    category: "Canada News"
  },
  {
    id: 2,
    title: "UK Increases Salary Threshold for Skilled Worker Visas",
    excerpt: "Understanding the new minimum salary requirements for sponsorship and how it affects your application.",
    date: "Nov 05, 2023",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=400&q=80",
    category: "UK Immigration"
  },
  {
    id: 3,
    title: "Top 5 Occupations in Demand in Australia for PR",
    excerpt: "Healthcare, Engineering, and IT sectors are booming. Find out if your profession is on the skilled list.",
    date: "Nov 20, 2023",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80",
    category: "Migration Tips"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-2">Latest Updates</h2>
                <h3 className="text-3xl font-bold text-gray-900">Immigration News & Insights</h3>
            </div>
            <a href="#" className="hidden md:flex items-center text-brand-600 font-bold hover:text-brand-800">
                View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
                    <div className="h-48 overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded-full text-brand-700">
                            {post.category}
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center text-gray-400 text-xs mb-3">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-brand-600 transition-colors cursor-pointer line-clamp-2">{post.title}</h4>
                        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                        <a href="#" className="inline-flex items-center text-brand-600 font-bold text-sm hover:underline mt-auto">
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;