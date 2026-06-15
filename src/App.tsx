/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import PartnerMarquee from './components/PartnerMarquee.tsx';
import CompaniesGrid from './components/CompaniesGrid.tsx';
import AboutBrief from './components/AboutBrief.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Leadership from './components/Leadership.tsx';
import Departments from './components/Departments.tsx';
import ProjectGallery from './components/ProjectGallery.tsx';
import ProductsGrid from './components/ProductsGrid.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import AboutProfilePage from './components/AboutProfilePage.tsx';
import ConstructionProjectsPage from './components/ConstructionProjectsPage.tsx';
import ElevatorSolutionsPage from './components/ElevatorSolutionsPage.tsx';
import ElectricEngineeringPage from './components/ElectricEngineeringPage.tsx';
import AgroFarmPage from './components/AgroFarmPage.tsx';
import ServicesPage from './components/ServicesPage.tsx';
import ProjectsPage from './components/ProjectsPage.tsx';
import DynamicCounters from './components/DynamicCounters.tsx';
import FeaturedProjectsCarousel from './components/FeaturedProjectsCarousel.tsx';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  type View = 'home' | 'about' | 'construction-projects' | 'elevator-solutions' | 'electric-engineering' | 'agro-farm' | 'products' | 'services' | 'projects';
  const [currentView, setCurrentView] = useState<View>('home');

  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-white">
      <Navbar 
        onAboutClick={() => {
          setCurrentView('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        onHomeClick={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        onProductsClick={() => {
          setCurrentView('products');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onServicesClick={() => {
          setCurrentView('services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onProjectsClick={() => {
          setCurrentView('projects');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onCompanyClick={(companyId) => {
          if (companyId === 'building') {
            setCurrentView('construction-projects');
          } else if (companyId === 'elevator') {
            setCurrentView('elevator-solutions');
          } else if (companyId === 'electric') {
            setCurrentView('electric-engineering');
          } else if (companyId === 'agro') {
            setCurrentView('agro-farm');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onHomeSectionClick={(sectionId) => {
          if (sectionId === 'products') {
            setCurrentView('products');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (sectionId === 'services') {
            setCurrentView('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (sectionId === 'projects') {
            setCurrentView('projects');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setCurrentView('home');
            setTimeout(() => {
              const element = document.getElementById(sectionId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }
        }}
      />
      
      <main>
        {currentView === 'products' && (
          <div className="pt-12">
            <ProductsGrid />
          </div>
        )}

        {currentView === 'services' && (
          <ServicesPage 
            onBack={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCompanyClick={(companyId) => {
              if (companyId === 'building') {
                setCurrentView('construction-projects');
              } else if (companyId === 'elevator') {
                setCurrentView('elevator-solutions');
              } else if (companyId === 'electric') {
                setCurrentView('electric-engineering');
              } else if (companyId === 'agro') {
                setCurrentView('agro-farm');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'projects' && (
          <ProjectsPage 
            onBack={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCompanyClick={(companyId) => {
              if (companyId === 'building') {
                setCurrentView('construction-projects');
              } else if (companyId === 'elevator') {
                setCurrentView('elevator-solutions');
              } else if (companyId === 'electric') {
                setCurrentView('electric-engineering');
              } else if (companyId === 'agro') {
                setCurrentView('agro-farm');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'about' && (
          <AboutProfilePage onBack={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}
        
        {currentView === 'construction-projects' && (
          <ConstructionProjectsPage onBack={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}
        
        {currentView === 'elevator-solutions' && (
          <ElevatorSolutionsPage onBack={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}

        {currentView === 'electric-engineering' && (
          <ElectricEngineeringPage onBack={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}

        {currentView === 'agro-farm' && (
          <AgroFarmPage onBack={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}

        {currentView === 'home' && (
          <>
            <Hero 
              onExploreClick={() => {
                const element = document.getElementById('companies');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onContactClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
            
            {/* Dynamic Counters section */}
            <DynamicCounters />

            <PartnerMarquee />
            
            {/* Companies Sections */}
            <CompaniesGrid onCompanyClick={(companyId) => {
              if (companyId === 'building') {
                setCurrentView('construction-projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (companyId === 'elevator') {
                setCurrentView('elevator-solutions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (companyId === 'electric') {
                setCurrentView('electric-engineering');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (companyId === 'agro') {
                setCurrentView('agro-farm');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }} />

            {/* Featured Projects Slider */}
            <FeaturedProjectsCarousel 
              onExploreProject={(category) => {
                if (category === 'building') {
                  setCurrentView('construction-projects');
                } else if (category === 'elevator') {
                  setCurrentView('elevator-solutions');
                } else if (category === 'electric') {
                  setCurrentView('electric-engineering');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Products */}
            <ProductsGrid />
            
            {/* About Brief */}
            <AboutBrief onExplore={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />

            {/* Connect / Contact Us Section */}
            <ContactSection />
          </>
        )}
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/8801317462251"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[60] bg-brand-green text-white p-5 rounded-3xl shadow-3xl hover:bg-brand-purple hover:rotate-6 transition-all duration-300 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-purple text-white text-[10px] font-bold uppercase tracking-widest py-3 px-6 rounded-full shadow-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-brand-green/30">
          Corporate Liaison
        </span>
      </motion.a>
    </div>
  );
}

