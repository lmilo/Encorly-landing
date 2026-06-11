import { useTranslation } from 'react-i18next';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import PhoneFrame from './ui/PhoneFrame';
import onboarding from '../assets/mockups/onboarding.webp';
import soundSwipe from '../assets/mockups/sound-swipe.webp';
import musicDna from '../assets/mockups/music-dna.webp';
import chat from '../assets/mockups/chat.webp';

const MOCKUPS = [onboarding, soundSwipe, musicDna, chat];

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [1, 2, 3, 4].map((n, i) => ({
    n,
    img: MOCKUPS[i],
    title: t(`how.step${n}_title`),
    desc: t(`how.step${n}_desc`),
  }));

  return (
    <Section id="how">
      <SectionHeading eyebrow={t('how.eyebrow')} title={t('how.title')} subtitle={t('how.subtitle')} />

      <div className="relative mt-16">
        {/* Línea conectora (solo desktop) */}
        <div
          className="absolute left-0 right-0 top-[7.5rem] hidden h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent lg:block"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="group">
              <div className="flex origin-bottom flex-col items-center text-center transition-transform duration-300 ease-out group-hover:scale-[1.05]">
                <div className="relative mb-7 w-full max-w-[220px]">
                  <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-vibe-gradient opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-40" />
                  {/* Área de imagen de altura fija → los 4 pasos ocupan el mismo cuadro */}
                  <PhoneFrame className="flex h-60 items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-magenta-500/40">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="max-h-full w-auto rounded-[1.4rem] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </PhoneFrame>
                  <span className="absolute -top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-magenta-500 font-headings text-sm font-bold text-ink-950 shadow-[0_0_20px_rgba(243,102,255,0.5)]">
                    {step.n}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-fg">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-muted">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
