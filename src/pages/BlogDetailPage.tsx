import React from 'react';
import { BlogPost, BLOG_POSTS } from '../data/blog';
import { ArrowLeft, Clock, Calendar, CheckCircle2, User, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface BlogDetailPageProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
  onNavigate: (route: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  post,
  onBack,
  onSelectPost,
  onNavigate
}) => {
  // Related articles
  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="w-full pt-28 pb-20">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-orange-500" />
          <span>Back to Insights</span>
        </button>
      </div>

      {/* Header */}
      <header className="border-b border-neutral-900 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
            <span className="font-bold uppercase tracking-wider text-orange-500">
              {post.category}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>·</span>
            <span>{post.publishedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-neutral-300">
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-orange-400">
              <User className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white">{post.author.name}</div>
              <div className="text-neutral-400">{post.author.role}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Key Takeaways Callout Box */}
        <div className="bg-neutral-900/70 border border-orange-500/30 rounded-xl p-6 sm:p-7 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
            Executive Summary / Key Takeaways
          </div>
          <ul className="space-y-2.5">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-8 text-neutral-300 leading-relaxed text-base sm:text-lg font-normal">
          {post.content.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Author / Solugans Advisory Footnote */}
        <div className="pt-8 border-t border-neutral-800 p-6 bg-neutral-900/40 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-bold text-white font-display">
              Published by Solugans &amp; Associates Engineering Ltd
            </div>
            <p className="text-xs text-neutral-400">
              RC 1207219 · Corporate Secretariat: No. 5 Secretariat Road, Aroma Junction, Awka.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors min-h-[44px] flex items-center justify-center cursor-pointer shadow-md"
          >
            Consult With Our Engineers
          </button>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-neutral-900 mt-16">
        <h3 className="text-xl font-bold text-white font-display mb-6">
          Related Technical Articles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((rPost) => (
            <div
              key={rPost.id}
              onClick={() => onSelectPost(rPost)}
              className="bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-800 p-5 rounded-lg cursor-pointer transition-colors space-y-2 group"
            >
              <div className="text-xs text-orange-400 font-bold uppercase">
                {rPost.category}
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors font-display line-clamp-2">
                {rPost.title}
              </h4>
              <p className="text-xs text-neutral-400 line-clamp-2">
                {rPost.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
