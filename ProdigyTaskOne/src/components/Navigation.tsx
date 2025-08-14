import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${isScrolled 
        ? 'bg-nav-background-scrolled backdrop-blur-md shadow-lg border-b border-nav-border' 
        : 'bg-nav-background'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Responsive Landing Page
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="
                    text-nav-text hover:text-nav-text-hover
                    px-3 py-2 rounded-md text-sm font-medium
                    transition-all duration-300 ease-in-out
                    hover:bg-primary/10 hover:scale-105
                    relative group
                  "
                >
                  {item.name}
                  <span className="
                    absolute bottom-0 left-0 w-0 h-0.5 bg-primary
                    transition-all duration-300 ease-in-out
                    group-hover:w-full
                  "></span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="
                bg-primary hover:bg-primary/90 text-primary-foreground
                px-6 py-2 rounded-full font-medium
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-lg
                animate-pulse-glow
              "
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-nav-text hover:text-nav-text-hover p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-nav-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-nav-background border-t border-nav-border">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="
                    text-nav-text hover:text-nav-text-hover
                    block px-3 py-2 rounded-md text-base font-medium
                    transition-colors duration-300 ease-in-out
                    hover:bg-primary/10 w-full text-left
                  "
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="
                  bg-primary hover:bg-primary/90 text-primary-foreground
                  w-full mt-3 rounded-full font-medium
                  transition-all duration-300 ease-in-out
                "
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;