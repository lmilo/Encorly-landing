import { useTranslation } from 'react-i18next';
import onboardingMockup from '../assets/mockups/onboarding.png'; // ajusta la extensión si no es .png

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Círculos de luz de fondo para dar profundidad (Vibe de concierto) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-violeta-neon/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-magenta-neon/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Lado Izquierdo: Copywriting */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headings font-bold text-blanco-puro leading-tight tracking-tighter animate-fade-in-up">
              {t('hero.title')}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-blanco-puro/60 font-body max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary text-lg py-4 px-10 shadow-[0_0_20px_rgba(243,102,255,0.3)] hover:shadow-[0_0_35px_rgba(243,102,255,0.6)]">
                {t('hero.cta')}
              </button>
              
              <button className="border border-blanco-puro/20 hover:bg-blanco-puro/5 text-blanco-puro font-bold py-4 px-10 rounded-full transition-all">
                {/* Texto opcional o enlace secundario */}
                Learn more
              </button>
            </div>

            {/* Badges de Integración (Pequeños) */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 opacity-50 grayscale hover:grayscale-0 transition-all">
               {/* Espacio para pequeños logos de Spotify/Ticketmaster */}
               <div className="h-6 w-20 bg-blanco-puro/10 rounded animate-pulse"></div>
               <div className="h-6 w-24 bg-blanco-puro/10 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Lado Derecho: Mockup */}
          <div className="flex-1 relative w-full max-w-[560px] mx-auto">
            {/* Glow de fondo suave */}
            <div className="absolute -inset-6 bg-vibe-gradient opacity-25 blur-3xl rounded-[2rem] -z-10" />

            {/* Card contenedora */}
            <div className="relative rounded-[2rem] border border-blanco-puro/10 bg-negro-puro/30 backdrop-blur-sm p-3 md:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <img
                src={onboardingMockup}
                alt="Mockup onboarding de Encorly"
                className="block w-full h-auto max-h-[78vh] object-contain rounded-[1.5rem]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;