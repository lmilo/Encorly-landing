import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoEncorely from '../assets/logo/logo-color-bisel.webp';
import Button from './ui/Button';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const lang = i18n.language.startsWith('en') ? 'en' : 'es';

  const navLinks = [
    { name: t('navbar.how'), href: '#how' },
    { name: t('navbar.features'), href: '#features' },
    { name: t('navbar.dna'), href: '#dna' },
    { name: t('navbar.values'), href: '#values' },
    { name: t('navbar.faq'), href: '#faq' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`glass-panel mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-5 ${
          scrolled ? 'is-scrolled' : ''
        }`}
      >
        <a href="#top" className="flex shrink-0 items-center" aria-label="Encorely">
          <img src={logoEncorely} alt="Encorely" className="h-9 w-auto" />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle lang={lang} onChange={(l) => i18n.changeLanguage(l)} />
          <Button as="a" href="#waitlist" variant="primary" size="md">
            {t('navbar.cta')}
          </Button>
        </div>

        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="p-2 text-fg lg:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="glass-panel is-scrolled mx-auto mt-2 max-w-6xl rounded-2xl px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-lg font-medium text-fg-muted transition-colors hover:text-fg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <LangToggle lang={lang} onChange={(l) => i18n.changeLanguage(l)} />
            <Button
              as="a"
              href="#waitlist"
              variant="primary"
              size="md"
              className="flex-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.cta')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const LangToggle = ({ lang, onChange }: { lang: string; onChange: (l: string) => void }) => (
  <div
    role="group"
    aria-label="Idioma / Language"
    className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 text-xs font-semibold"
  >
    {(['es', 'en'] as const).map((l) => (
      <button
        key={l}
        onClick={() => onChange(l)}
        aria-pressed={lang === l}
        className={`rounded-full px-3 py-1.5 uppercase transition-colors duration-200 ${
          lang === l ? 'bg-magenta-500 text-ink-950' : 'text-fg-muted hover:text-fg'
        }`}
      >
        {l}
      </button>
    ))}
  </div>
);

export default Navbar;
