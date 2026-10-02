/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExecutiveLeadershipPage } from './pages/ExecutiveLeadershipPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';

import { PROJECTS_DATA, ProjectItem } from './data/projects';
import { SERVICES_DATA, ServiceDetail } from './data/services';
import { BLOG_POSTS, BlogPost } from './data/blog';
import { updatePageSEO } from './utils/seo';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Synchronize route with URL hash for back/forward support & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();

      if (!hash || hash === 'home') {
        setCurrentRoute('home');
      } else if (
        hash === 'about/leadership' || 
        hash === 'about/md-profile' || 
        hash === 'about/executive' || 
        hash === 'leadership' || 
        hash === 'md-profile'
      ) {
        setCurrentRoute('about-leadership');
      } else if (hash === 'about') {
        setCurrentRoute('about');
      } else if (hash === 'services') {
        setCurrentRoute('services');
      } else if (hash.startsWith('services/') || hash.startsWith('service/') || hash.startsWith('service-')) {
        let rawSlug = hash
          .replace(/^services\//, '')
          .replace(/^service\//, '')
          .replace(/^service-/, '')
          .replace(/^\/+|\/+$/g, '');

        const aliasMap: Record<string, string> = {
          'civil-engineering': 'building-construction',
          'civil': 'building-construction',
          'construction': 'building-construction',
          'mechanical-engineering': 'mechanical-fabrication',
          'mechanical': 'mechanical-fabrication',
          'procurement': 'procurement-technical-support',
          'architecture': 'architectural-design',
          'electrical': 'electrical-engineering',
          'quality-assurance': 'quality-control',
          'qa-qc': 'quality-control'
        };
        const resolvedSlug = aliasMap[rawSlug] || rawSlug;
        const found = SERVICES_DATA.find((s) => s.slug === resolvedSlug);
        if (found) {
          setSelectedService(found);
          setCurrentRoute('service-detail');
        } else {
          setCurrentRoute('services');
        }
      } else if (hash === 'projects' || hash === 'portfolio') {
        setCurrentRoute('projects');
      } else if (hash.startsWith('projects/') || hash.startsWith('project/')) {
        const slug = hash
          .replace(/^projects\//, '')
          .replace(/^project\//, '')
          .replace(/^\/+|\/+$/g, '');
        const found = PROJECTS_DATA.find((p) => p.slug === slug);
        if (found) {
          setSelectedProject(found);
          setCurrentRoute('project-detail');
        } else {
          setCurrentRoute('projects');
        }
      } else if (hash === 'blog' || hash === 'insights' || hash === 'articles') {
        setCurrentRoute('blog');
      } else if (hash.startsWith('blog/') || hash.startsWith('insights/') || hash.startsWith('insight/')) {
        const slug = hash
          .replace(/^blog\//, '')
          .replace(/^insights\//, '')
          .replace(/^insight\//, '')
          .replace(/^\/+|\/+$/g, '');
        const found = BLOG_POSTS.find((b) => b.slug === slug);
        if (found) {
          setSelectedPost(found);
          setCurrentRoute('blog-detail');
        } else {
          setCurrentRoute('blog');
        }
      } else if (hash === 'contact' || hash === 'quote' || hash === 'get-a-quote') {
        setCurrentRoute('contact');
      } else if (hash === 'careers' || hash === 'jobs') {
        setCurrentRoute('careers');
      } else {
        setCurrentRoute('home');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initial parse
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update dynamic page SEO meta tags and browser document title on route transitions
  useEffect(() => {
    switch (currentRoute) {
      case 'home':
        updatePageSEO({
          title: 'Solugans & Associates Engineering Ltd | Construction, Architecture & Engineering in Awka',
          description: 'Solugans & Associates Engineering Ltd provides architectural design, engineering consultancy, building construction, project management, and procurement services in Awka, Anambra State, Nigeria.',
          canonicalPath: '',
          ogImage: '/assets/images/PROJECTS/COMMERCIAL%20BUILDING/IMG-20250917-WA0004.jpg',
        });
        break;
      case 'about':
        updatePageSEO({
          title: 'About Solugans & Associates | Leading Engineering Firm in Awka',
          description: '10+ years of engineering excellence in Anambra State. Discover our mission, core values, board of directors, technical team, and plant inventory.',
          canonicalPath: 'about',
          ogImage: '/assets/images/RETAINING%20WALL%20WORK/team%20work.JPG',
        });
        break;
      case 'about-leadership':
        updatePageSEO({
          title: 'Executive Leadership & MD Profile | Engr. Samuel O. Ugorji | Solugans & Associates',
          description: 'Profile of Engr. Samuel O. Ugorji (FNSE, COREN Registered), Managing Director and Chief Executive Officer of Solugans & Associates Engineering Ltd in Awka.',
          canonicalPath: 'about/leadership',
          ogImage: '/SCEO.jpg',
        });
        break;
      case 'services':
        updatePageSEO({
          title: 'Engineering & Construction Services | Solugans & Associates Awka',
          description: 'Comprehensive architectural design, civil engineering, turnkey building construction, tubular steel space frames, solar mini-grids, and quantity surveying in Anambra State.',
          canonicalPath: 'services',
        });
        break;
      case 'service-detail':
        if (selectedService) {
          updatePageSEO({
            title: `${selectedService.title} | Solugans & Associates Engineering Ltd`,
            description: selectedService.shortSummary || selectedService.overview,
            canonicalPath: `services/${selectedService.slug}`,
            ogImage: selectedService.thumbnailImage,
          });
        }
        break;
      case 'projects':
        updatePageSEO({
          title: 'Engineering & Construction Portfolio | Solugans & Associates Awka',
          description: 'Explore our verified built projects, structural engineering records, and active sites across Awka, Aguleri, Ngozika Estate, and Anambra State.',
          canonicalPath: 'projects',
          ogImage: '/assets/images/PROJECTS/COMMERCIAL%20BUILDING/IMG-20250917-WA0004.jpg',
        });
        break;
      case 'project-detail':
        if (selectedProject) {
          updatePageSEO({
            title: `${selectedProject.title} | Solugans & Associates Engineering Ltd`,
            description: selectedProject.summary || selectedProject.theBrief || 'Project executed by Solugans & Associates in Awka.',
            canonicalPath: `projects/${selectedProject.slug}`,
            ogImage: selectedProject.coverImage,
          });
        }
        break;
      case 'blog':
        updatePageSEO({
          title: 'Engineering Insights & Technical Guides | Solugans & Associates',
          description: 'Expert engineering articles, construction compliance guides, and technical insights from civil engineers and architects in Anambra State.',
          canonicalPath: 'blog',
        });
        break;
      case 'blog-detail':
        if (selectedPost) {
          updatePageSEO({
            title: `${selectedPost.title} | Solugans & Associates Insights`,
            description: selectedPost.excerpt,
            canonicalPath: `blog/${selectedPost.slug}`,
            ogImage: selectedPost.coverImage,
          });
        }
        break;
      case 'contact':
        updatePageSEO({
          title: 'Contact Solugans & Associates | Quotations & Site Inspection Awka',
          description: 'Contact Solugans & Associates Engineering Ltd at Aroma Junction, Awka. Request project quotations, feasibility assessments, or site inspections. Call +234 803 227 4204.',
          canonicalPath: 'contact',
        });
        break;
      case 'careers':
        updatePageSEO({
          title: 'Careers & Engineering Vacancies | Solugans & Associates Awka',
          description: 'Join our multidisciplinary engineering team in Awka, Anambra State. Explore careers in civil engineering, site supervision, and architecture.',
          canonicalPath: 'careers',
        });
        break;
      default:
        break;
    }
  }, [currentRoute, selectedProject, selectedService, selectedPost]);

  const navigateTo = (route: string) => {
    if (route.startsWith('service-')) {
      const slug = route.replace('service-', '');
      window.location.hash = `/services/${slug}`;
    } else {
      window.location.hash = `/${route}`;
    }
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
    window.location.hash = `/projects/${project.slug}`;
  };

  const handleSelectService = (service: ServiceDetail) => {
    setSelectedService(service);
    window.location.hash = `/services/${service.slug}`;
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.location.hash = `/blog/${post.slug}`;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      {/* Accessible Skip to Content Link for Keyboard and Screen Reader Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-orange-600 focus:text-white focus:rounded-md focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white text-xs font-semibold uppercase tracking-wider transition-all"
      >
        Skip to main content
      </a>

      {/* 1. Global Transparent / Sticky Header */}
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* 2. Main Page Render Landmark */}
      <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProject={handleSelectProject}
            onSelectService={handleSelectService}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'about-leadership' && (
          <ExecutiveLeadershipPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'services' && (
          <ServicesPage
            onSelectService={handleSelectService}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'service-detail' && (
          <ServiceDetailPage
            service={selectedService || SERVICES_DATA[0]}
            onBack={() => navigateTo('services')}
            onSelectProject={handleSelectProject}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'projects' && (
          <ProjectsPage
            onSelectProject={handleSelectProject}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'project-detail' && (
          <ProjectDetailPage
            project={selectedProject || PROJECTS_DATA[0]}
            onBack={() => navigateTo('projects')}
            onSelectProject={handleSelectProject}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'blog' && (
          <BlogPage
            onSelectPost={handleSelectPost}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'blog-detail' && (
          <BlogDetailPage
            post={selectedPost || BLOG_POSTS[0]}
            onBack={() => navigateTo('blog')}
            onSelectPost={handleSelectPost}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage />
        )}

        {currentRoute === 'careers' && (
          <CareersPage onNavigate={navigateTo} />
        )}
      </main>

      {/* 3. Global Dark Architectural Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Global Floating Controls */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
