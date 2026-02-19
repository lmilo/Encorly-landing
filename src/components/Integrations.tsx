import { useTranslation } from 'react-i18next';
import { Cpu, Zap } from 'lucide-react';

const Integrations = () => {
  const { t } = useTranslation();

  return (
    <section id="integrations" className="py-24 bg-negro-puro relative overflow-hidden">
      {/* Líneas de conexión decorativas en el fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-magenta-neon to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-violeta-neon to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headings font-bold text-blanco-puro mb-6">
            {t('integrations.title')}
          </h2>
          <p className="text-blanco-puro/60 font-body max-w-2xl mx-auto">
            {t('integrations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Card: Spotify */}
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#1DB954]/10 to-transparent border border-[#1DB954]/20 hover:border-[#1DB954]/50 transition-all duration-500">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 shrink-0 bg-[#1DB954]/20 rounded-2xl flex items-center justify-center border border-[#1DB954]/30">
                {/* ESPACIO PARA LOGO SPOTIFY */}
                <div className="w-8 h-8 bg-[#1DB954] rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-[#1DB954] uppercase mb-2 block">
                  {t('integrations.spotify_tag')}
                </span>
                <h3 className="text-2xl font-headings font-bold text-blanco-puro mb-4">Spotify API</h3>
                <p className="text-blanco-puro/60 font-body leading-relaxed">
                  {t('integrations.spotify_desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Card: Ticketmaster */}
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#026CDF]/10 to-transparent border border-[#026CDF]/20 hover:border-[#026CDF]/50 transition-all duration-500">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 shrink-0 bg-[#026CDF]/20 rounded-2xl flex items-center justify-center border border-[#026CDF]/30">
                {/* ESPACIO PARA LOGO TICKETMASTER */}
                <div className="w-10 h-10 bg-[#026CDF] rounded transform -rotate-12"></div>
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-[#026CDF] uppercase mb-2 block">
                  {t('integrations.ticketmaster_tag')}
                </span>
                <h3 className="text-2xl font-headings font-bold text-blanco-puro mb-4">Ticketmaster API</h3>
                <p className="text-blanco-puro/60 font-body leading-relaxed">
                  {t('integrations.ticketmaster_desc')}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Banner Técnico Inferior - El "Cerebro" */}
        <div className="mt-16 p-6 rounded-2xl bg-violeta-neon/5 border border-violeta-neon/20 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-3 text-blanco-puro/80 font-body text-sm">
            <Cpu size={20} className="text-violeta-neon" />
            <span>Backend: .NET 9 + PostgreSQL</span>
          </div>
          <div className="w-px h-4 bg-blanco-puro/10 hidden md:block"></div>
          <div className="flex items-center gap-3 text-blanco-puro/80 font-body text-sm">
            <Zap size={20} className="text-magenta-neon" />
            <span>Real-time: SignalR + Redis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;