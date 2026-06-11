import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import type { PointerEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import onboardingMockup from '../assets/mockups/onboarding.webp';
import AudioWave from './ui/AudioWave';
import WaitlistForm from './WaitlistForm';
import PhoneFrame from './ui/PhoneFrame';
import { SpotifyLogo, TicketmasterLogo } from './ui/BrandIcons';

const EASE = [0.16, 1, 0.3, 1] as const;

const Hero = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  // Tilt sutil del mockup siguiendo el cursor (desactivado con reduced-motion).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 });

  const handlePointer = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType === 'touch') return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetTilt = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-fg-muted"
          >
            <span className="flex h-3.5 w-6 text-magenta-400">
              <AudioWave bars={4} />
            </span>
            {t('hero.eyebrow')}
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-7 text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-fg md:text-6xl lg:text-7xl"
          >
            {t('hero.title_lead')}{' '}
            <span className="text-gradient">{t('hero.title_highlight')}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted lg:mx-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
            className="mt-9 flex flex-col items-center gap-4 lg:items-start"
          >
            <WaitlistForm idPrefix="hero" align="left" className="w-full max-w-md" />
            <a
              href="#how"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {t('hero.cta_secondary')}
              <ChevronDown size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-10 flex flex-col items-center gap-4 lg:items-start"
          >
            <p className="text-xs font-medium text-fg-subtle">{t('hero.proof')}</p>
            <div className="flex items-center gap-5 text-fg-muted">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-fg-subtle">
                {t('hero.integrations_label')}
              </span>
              <SpotifyLogo className="h-6 w-6 text-[#1DB954]" />
              <TicketmasterLogo className="h-5 w-auto text-[#3A7DFF]" />
            </div>
          </motion.div>
        </div>

        {/* Mockup con profundidad */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[420px]"
          style={{ perspective: 1200 }}
          onPointerMove={handlePointer}
          onPointerLeave={resetTilt}
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-vibe-gradient opacity-30 blur-[90px]" />
          <motion.div
            style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className={reduce ? '' : 'will-change-transform'}
          >
            <PhoneFrame className="animate-bob backdrop-blur-sm">
              <img
                src={onboardingMockup}
                alt="Pantalla de onboarding de la app Encorely"
                className="block w-full rounded-[1.4rem]"
                width={420}
                height={860}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </PhoneFrame>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
