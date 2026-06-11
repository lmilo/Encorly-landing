import { useTranslation } from 'react-i18next';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { SpotifyLogo, TicketmasterLogo } from './ui/BrandIcons';

const Integrations = () => {
  const { t } = useTranslation();

  return (
    <Section id="integrations">
      <SectionHeading
        eyebrow={t('integrations.eyebrow')}
        title={t('integrations.title')}
        subtitle={t('integrations.subtitle')}
        align="left"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Spotify */}
        <Reveal className="ring-gradient group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1DB954]/[0.08] to-transparent p-8 md:p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1DB954]/15 text-[#1DB954]">
              <SpotifyLogo className="h-8 w-8" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1DB954]">
                {t('integrations.spotify_tag')}
              </span>
              <h3 className="text-2xl font-bold text-fg">{t('integrations.spotify_title')}</h3>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-fg-muted">{t('integrations.spotify_desc')}</p>
        </Reveal>

        {/* Ticketmaster */}
        <Reveal delay={0.1} className="ring-gradient group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#3A7DFF]/[0.08] to-transparent p-8 md:p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3A7DFF]/15 text-[#3A7DFF]">
              <TicketmasterLogo className="h-7 w-7" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#3A7DFF]">
                {t('integrations.ticketmaster_tag')}
              </span>
              <h3 className="text-2xl font-bold text-fg">{t('integrations.ticketmaster_title')}</h3>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-fg-muted">{t('integrations.ticketmaster_desc')}</p>
        </Reveal>
      </div>
    </Section>
  );
};

export default Integrations;
