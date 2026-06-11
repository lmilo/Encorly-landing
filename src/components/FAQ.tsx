import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const FAQ = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  const items = [1, 2, 3, 4, 5].map((n) => ({ q: t(`faq.q${n}`), a: t(`faq.a${n}`) }));

  return (
    <Section id="faq">
      <SectionHeading eyebrow={t('faq.eyebrow')} title={t('faq.title')} />

      <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-fg">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-violet-300 transition-transform duration-300 ease-out ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-fg-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQ;
