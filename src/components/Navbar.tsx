import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoEncorly from '../assets/logo/logo-color-bisel.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('navbar.features'), href: '#features' },
    { name: t('navbar.integrations'), href: '#integrations' },
    { name: t('navbar.values'), href: '#values' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-negro-puro/80 backdrop-blur-md border-b border-violeta-neon/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Usando la tipografía oficial */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src={logoEncorly}
              alt="Encorly"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-blanco-puro/70 hover:text-magenta-neon font-body transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Acciones: Idioma + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-blanco-puro/70">
              <Globe size={18} className="text-violeta-neon" />
              <select 
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="bg-transparent border-none focus:ring-0 cursor-pointer hover:text-magenta-neon transition-colors"
              >
                <option value="es" className="bg-negro-puro">ES</option>
                <option value="en" className="bg-negro-puro">EN</option>
              </select>
            </div>
            
            <button className="btn-primary">
              {t('navbar.cta')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blanco-puro p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-negro-puro border-b border-violeta-neon/20 px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-blanco-puro text-lg font-body"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full btn-primary">
            {t('navbar.cta')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;