import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Music } from 'lucide-react';
import logoBlanco from '../assets/logo/logo-blanco.webp';

type FooterLink = { label: string; href?: string; to?: string };

const Footer = () => {
  const { t } = useTranslation();

  const navLinks: FooterLink[] = [
    { label: t('navbar.how'), href: '/#how' },
    { label: t('navbar.features'), href: '/#features' },
    { label: t('navbar.dna'), href: '/#dna' },
    { label: t('navbar.faq'), href: '/#faq' },
  ];
  const legalLinks: FooterLink[] = [
    { label: t('footer.contact'), to: '/contacto' },
    { label: t('footer.privacy'), to: '/privacidad' },
    { label: t('footer.terms'), to: '/terminos' },
  ];
  const socials = [
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'X', href: '#', icon: Twitter },
    { label: 'TikTok', href: '#', icon: Music },
  ];

  return (
    <footer className="border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src={logoBlanco} alt="Encorely" className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm italic text-magenta-300">{t('footer.tagline')}</p>
          </div>

          <FooterCol title={t('footer.nav_title')} links={navLinks} />
          <FooterCol title={t('footer.legal_title')} links={legalLinks} />

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-fg-subtle">
              {t('footer.social_title')}
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-fg-muted transition-colors duration-200 hover:border-magenta-500/40 hover:text-magenta-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-8">
          <p className="text-xs text-fg-subtle">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

const linkClass = 'text-sm text-fg-muted transition-colors duration-200 hover:text-fg';

const FooterCol = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <div>
    <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-fg-subtle">{title}</h4>
    <ul className="flex flex-col gap-3">
      {links.map((l) => (
        <li key={l.label}>
          {l.to ? (
            <Link to={l.to} className={linkClass}>
              {l.label}
            </Link>
          ) : (
            <a href={l.href} className={linkClass}>
              {l.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
