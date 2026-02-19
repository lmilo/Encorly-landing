import { useTranslation } from 'react-i18next';
import { Music, ShieldCheck, Ticket } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('features.discovery_title'),
      desc: t('features.discovery_desc'),
      icon: <Music className="text-magenta-neon" size={32} />,
      badge: "Sound-Swipe"
    },
    {
      title: t('features.threshold_title'),
      desc: t('features.threshold_desc'),
      icon: <ShieldCheck className="text-violeta-neon" size={32} />,
      badge: "Anti-Ghosting"
    },
    {
      title: t('features.events_title'),
      desc: t('features.events_desc'),
      icon: <Ticket className="text-magenta-neon" size={32} />,
      badge: "Live Hub"
    }
  ];

  return (
    <section id="features" className="py-24 bg-negro-puro relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headings font-bold text-blanco-puro mb-4">
            {t('navbar.features')}
          </h2>
          <div className="h-1.5 w-24 bg-vibe-gradient mx-auto rounded-full"></div>
        </div>

        {/* Grid de Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-blanco-puro/5 border border-blanco-puro/10 hover:border-magenta-neon/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Espacio para imagen/icono decorativo */}
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-negro-puro rounded-2xl border border-blanco-puro/10 group-hover:border-magenta-neon/30 group-hover:shadow-[0_0_15px_rgba(243,102,255,0.2)] transition-all">
                  {feature.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-violeta-neon border border-violeta-neon/30 px-2 py-1 rounded-md">
                  {feature.badge}
                </span>
              </div>

              <h3 className="text-2xl font-headings font-bold text-blanco-puro mb-4">
                {feature.title}
              </h3>
              
              <p className="text-blanco-puro/60 font-body leading-relaxed mb-6">
                {feature.desc}
              </p>

              {/* Placeholder para un visual pequeño o ilustración */}
              <div className="w-full h-32 bg-negro-puro/40 rounded-xl border border-dashed border-blanco-puro/10 flex items-center justify-center">
                <span className="text-[10px] text-blanco-puro/20 italic">[ Visual Placeholder ]</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-magenta-neon/5 blur-[100px] -z-10"></div>
    </section>
  );
};

export default Features;