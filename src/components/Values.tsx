import { useTranslation } from 'react-i18next';
import { Heart, Users, Sparkles } from 'lucide-react';

const Values = () => {
  const { t } = useTranslation();

  const valuesData = [
    {
      title: t('values.connection'),
      icon: <Users className="text-violeta-neon" size={28} />,
    },
    {
      title: t('values.diversity'),
      icon: <Sparkles className="text-magenta-neon" size={28} />,
    },
    {
      title: t('values.experience'),
      icon: <Heart className="text-violeta-neon" size={28} />,
    }
  ];

  return (
    <section id="values" className="py-24 bg-negro-puro relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-headings font-bold text-blanco-puro mb-16">
          {t('values.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valuesData.map((val, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-violeta-neon/10 flex items-center justify-center mb-6 border border-violeta-neon/20 shadow-[0_0_15px_rgba(147,80,255,0.1)]">
                {val.icon}
              </div>
              <h3 className="text-xl font-headings font-bold text-blanco-puro">
                {val.title}
              </h3>
              {/* Línea decorativa inferior */}
              <div className="mt-4 h-0.5 w-8 bg-vibe-gradient rounded-full opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;