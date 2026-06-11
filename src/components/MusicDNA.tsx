import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'motion/react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import PhoneFrame from './ui/PhoneFrame';
import musicDna from '../assets/mockups/music-dna.webp';

const EASE = [0.16, 1, 0.3, 1] as const;

const MusicDNA = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const dimensions = [
    { label: t('dna.dim_energy'), value: 0.82 },
    { label: t('dna.dim_dance'), value: 0.71 },
    { label: t('dna.dim_valence'), value: 0.64 },
    { label: t('dna.dim_tempo'), value: 0.76 },
  ];

  return (
    <Section id="dna" className="overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Mockup radar */}
        <Reveal className="relative mx-auto w-full max-w-[360px] lg:order-1">
          <div
            className="absolute -inset-6 -z-10 rounded-full opacity-[0.22] blur-2xl animate-spin-slow"
            style={{ background: 'conic-gradient(from 0deg, #9350FF, #F366FF, #7B34E8, #9350FF)' }}
            aria-hidden="true"
          />
          <div className="absolute -inset-8 -z-10 rounded-full bg-vibe-gradient opacity-[0.14] blur-[80px]" />
          <PhoneFrame>
            <img
              src={musicDna}
              alt="Pantalla del ADN musical de Encorely con radar de dimensiones"
              className="block w-full rounded-[1.4rem]"
              loading="lazy"
              decoding="async"
            />
          </PhoneFrame>
        </Reveal>

        {/* Copy + barras */}
        <div className="lg:order-2">
          <SectionHeadingInline
            eyebrow={t('dna.eyebrow')}
            title={t('dna.title')}
            desc={t('dna.desc')}
          />

          <div className="mt-10 flex flex-col gap-5">
            {dimensions.map((dim, i) => (
              <Reveal key={dim.label} delay={i * 0.08}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-fg">{dim.label}</span>
                  <span className="font-headings text-fg-muted tabular-nums">{dim.value.toFixed(2)}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full bg-vibe-gradient"
                    initial={reduce ? false : { width: 0 }}
                    whileInView={reduce ? undefined : { width: `${dim.value * 100}%` }}
                    style={reduce ? { width: `${dim.value * 100}%` } : undefined}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1, ease: EASE, delay: 0.1 + i * 0.08 }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-xs font-medium text-fg-subtle">{t('dna.note')}</p>
        </div>
      </div>
    </Section>
  );
};

const SectionHeadingInline = ({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) => (
  <Reveal className="flex flex-col gap-4">
    <span className="inline-flex w-fit items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
      {eyebrow}
    </span>
    <h2 className="text-balance text-4xl font-bold leading-[1.05] text-fg md:text-5xl">{title}</h2>
    <p className="max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">{desc}</p>
  </Reveal>
);

export default MusicDNA;
