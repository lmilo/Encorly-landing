import { useTranslation } from 'react-i18next';
import { Music4, ShieldCheck, Ticket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import AudioWave from './ui/AudioWave';

type Feature = {
  icon: LucideIcon;
  badge: string;
  title: string;
  desc: string;
  accent: string;
};

const Features = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: Music4,
      badge: t('features.discovery_badge'),
      title: t('features.discovery_title'),
      desc: t('features.discovery_desc'),
      accent: 'text-magenta-400',
    },
    {
      icon: ShieldCheck,
      badge: t('features.threshold_badge'),
      title: t('features.threshold_title'),
      desc: t('features.threshold_desc'),
      accent: 'text-violet-400',
    },
    {
      icon: Ticket,
      badge: t('features.events_badge'),
      title: t('features.events_title'),
      desc: t('features.events_desc'),
      accent: 'text-magenta-400',
    },
  ];

  return (
    <Section id="features">
      <SectionHeading eyebrow={t('features.eyebrow')} title={t('features.title')} subtitle={t('features.subtitle')} />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal
              key={f.title}
              delay={i * 0.1}
              className="ring-gradient group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-transform duration-300 ease-out hover:-translate-y-1.5"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-950 transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(243,102,255,0.25)]">
                  <Icon className={f.accent} size={26} strokeWidth={2} />
                </div>
                <span className="rounded-md border border-violet-500/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-300">
                  {f.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-fg">{f.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{f.desc}</p>

              <div className="mt-7 flex h-8 items-center gap-1 text-magenta-500/50 transition-colors duration-300 group-hover:text-magenta-500">
                <AudioWave bars={20} className="w-full opacity-70" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Features;
