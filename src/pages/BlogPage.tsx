import React from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blog';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
  onNavigate: (route: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost, onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-20">
      {/* Blog Hero */}
      <section className="border-b border-neutral-900 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span>Technical Insights &amp; Industry Advisory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
              Built Environment Insights for Nigeria
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
              Engineering guidelines, architectural cost planning strategies, and quality assurance principles from the Solugans technical team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Leading Article */}
      {BLOG_POSTS[0] && (
        <section className="py-12 border-b border-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article
              onClick={() => onSelectPost(BLOG_POSTS[0])}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8 cursor-pointer transition-all duration-300"
            >
              <div className="lg:col-span-7 aspect-[16/10] rounded-lg overflow-hidden bg-neutral-950">
                <img
                  src={BLOG_POSTS[0].coverImage}
                  alt={BLOG_POSTS[0].title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-104"
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <span className="font-bold uppercase tracking-wider text-orange-400">
                    {BLOG_POSTS[0].category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {BLOG_POSTS[0].readTime}
                  </span>
                  <span>·</span>
                  <span>{BLOG_POSTS[0].publishedDate}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors font-display leading-snug">
                  {BLOG_POSTS[0].title}
                </h2>

                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                  {BLOG_POSTS[0].excerpt}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                  <span>Read Full Technical Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Grid of Remaining Articles */}
      <section className="py-16 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {BLOG_POSTS.slice(1).map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="group bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-104"
                    />
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                      <span className="font-bold uppercase tracking-wider text-orange-400">
                        {post.category}
                      </span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors font-display">
                      {post.title}
                    </h3>

                    <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-white">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Banner */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Need Expert Technical Advice for Your Project?
          </h3>
          <p className="text-neutral-400 text-sm">
            Our engineering team in Awka is available for on-site consultations, feasibility reviews, and cost planning.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors"
            >
              Contact Our Engineering Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
