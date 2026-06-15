import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SikderLogo from './SikderLogo';

interface NavbarProps {
  onAboutClick?: () => void;
  onHomeClick?: () => void;
  onCompanyClick?: (companyId: string) => void;
  onHomeSectionClick?: (sectionId: string) => void;
  onProductsClick?: () => void;
  onServicesClick?: () => void;
  onProjectsClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAboutClick, onHomeClick, onCompanyClick, onHomeSectionClick, onProductsClick, onServicesClick, onProjectsClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, title: string, path: string) => {
    if (title === 'About Us') {
      e.preventDefault();
      onAboutClick?.();
    } else if (title === 'Home') {
      e.preventDefault();
      onHomeClick?.();
    } else if (title === 'Products') {
      e.preventDefault();
      onProductsClick?.();
    } else if (title === 'Services') {
      e.preventDefault();
      onServicesClick?.();
    } else if (title === 'Projects') {
      e.preventDefault();
      onProjectsClick?.();
    } else if (path.startsWith('#') && path !== '#companies') {
      e.preventDefault();
      onHomeSectionClick?.(path.substring(1));
    }
  };

  const navLinks = [
    { title: 'Home', path: '#' },
    {
      title: 'Companies',
      path: '#companies',
      dropdown: [
        { title: 'Sikder Electric & Engineering', path: '#electric', id: 'electric' },
        { title: 'Sikder Elevator Solution', path: '#elevator', id: 'elevator' },
        { title: 'Sikder Building Technology', path: '#building', id: 'building' },
        { title: 'Sikder Agro Farm Limited', path: '#agro', id: 'agro' },
      ],
    },
    { title: 'About Us', path: '#about' },
    { title: 'Products', path: '#products' },
    { title: 'Services', path: '#services' },
    { title: 'Projects', path: '#projects' },
    { title: 'Contact Us', path: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-purple/95 shadow-lg py-1 border-b border-brand-green/30 backdrop-blur-md' : 'bg-brand-purple py-2 shadow-xl'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center w-full h-10 md:h-12">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onHomeClick?.();
              }}
              className="flex items-center group transition-transform duration-300 hover:scale-[1.03]"
            >
              <SikderLogo variant="light" className="h-9 md:h-11" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.path}
                   onClick={(e) => handleLinkClick(e, link.title, link.path)}
                  className="flex items-center gap-1 font-bold text-[10px] transition-colors uppercase tracking-[0.2em] text-white/90 hover:text-brand-green"
                >
                  {link.title}
                  {link.dropdown && <ChevronDown size={14} />}
                </a>

                {link.dropdown && (
                  <AnimatePresence>
                    {(activeDropdown === link.title) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border-t-2 border-brand-purple py-2"
                      >
                        {link.dropdown.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.path}
                            onClick={(e) => {
                              e.preventDefault();
                              if (sub.id) onCompanyClick?.(sub.id);
                            }}
                            className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-purple hover:bg-brand-light hover:text-brand-green transition-colors"
                          >
                            {sub.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <button 
              onClick={() => onAboutClick?.()}
              className="px-6 py-2.5 bg-brand-purple text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full border border-brand-green/50 hover:bg-brand-green hover:text-brand-purple hover:border-brand-green cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ml-4 shadow-sm hover:shadow-brand-green/20"
            >
              About Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-brand-purple/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.title} className="flex flex-col gap-4">
                  <a
                    href={link.path}
                    className="text-lg font-bold text-white uppercase tracking-widest flex justify-between items-center group"
                    onClick={(e) => {
                      handleLinkClick(e, link.title, link.path);
                      if (!link.dropdown) setIsOpen(false);
                    }}
                  >
                    {link.title}
                    {link.dropdown && <ChevronDown size={18} className="text-brand-green" />}
                  </a>
                  {link.dropdown && (
                    <div className="ml-4 flex flex-col gap-4 border-l border-brand-green/30 pl-6">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.path}
                          className="text-white/60 py-1 text-sm font-medium tracking-wide transition-all hover:text-brand-green hover:translate-x-1"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            if (sub.id) onCompanyClick?.(sub.id);
                          }}
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <button className="w-full bg-brand-green text-brand-purple font-bold py-4 px-8 text-xs uppercase tracking-[0.2em] rounded-2xl shadow-2xl">
                  Get a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
