import { useTranslation } from 'react-i18next';
import logoBlancoEncorly from '../assets/logo/logo-blanco.png';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-negro-puro border-t border-blanco-puro/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand & Slogan */}
          <div className="text-center md:text-left">
            <img
              src={logoBlancoEncorly}
              alt="Encorly"
              className="h-10 w-auto mx-auto md:mx-0"
            />
            <p className="text-magenta-neon font-body italic text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex gap-8 text-blanco-puro/40 text-sm font-body">
            <a href="#" className="hover:text-blanco-puro transition-colors">{t('footer.contact')}</a>
            <a href="#" className="hover:text-blanco-puro transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-blanco-puro transition-colors">{t('footer.terms')}</a>
          </div>
        </div>

        {/* Separador y Copyright */}
        <div className="border-t border-blanco-puro/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blanco-puro/20 font-body">
          <p>{t('footer.rights')}</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-magenta-neon animate-pulse"></span>
            <span>Powered by .NET 9 & React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;