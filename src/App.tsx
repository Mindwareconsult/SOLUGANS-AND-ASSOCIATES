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
      {/* 1. Global Transparent / Sticky Header */}
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* 2. Main Page Render */}
      <main className="flex-1 w-full">
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
