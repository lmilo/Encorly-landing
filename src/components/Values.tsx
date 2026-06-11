import { useTranslation } from 'react-i18next';
import { UsersRound, Music2, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

type Value = { id: string; icon: LucideIcon };

const VALUES: Value[] = [
  { id: 'connection', icon: UsersRound },
  { id: 'diversity', icon: Music2 },
  { id: 'experience', icon: Sparkles },
];

const Values = () => {
  const { t } = useTranslation();

  return (
    <Section id="values">
      <SectionHeading eyebrow={t('values.eyebrow')} title={t('values.title')} />

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        {VALUES.map((val, i) => {
          const Icon = val.icon;
          return (
            <Reveal key={val.id} delay={i * 0.1} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-300 shadow-[0_0_24px_rgba(147,80,255,0.12)]">
                <Icon size={28} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-fg">{t(`values.${val.id}`)}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted">
                {t(`values.${val.id}_desc`)}
              </p>
              <div className="mt-5 h-0.5 w-10 rounded-full bg-vibe-gradient opacity-60" />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Values;
