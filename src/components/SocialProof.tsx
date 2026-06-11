import { useTranslation } from 'react-i18next';
import Reveal from './ui/Reveal';

const GENRES = [
  'Reggaetón', 'Indie', 'Techno', 'Rock', 'Pop', 'Trap', 'House', 'Jazz',
  'Salsa', 'K-Pop', 'Punk', 'R&B', 'Cumbia', 'Metal', 'Afrobeat', 'Hyperpop',
];

const SocialProof = () => {
  const { t } = useTranslation();

  const stats = [
    { value: t('proof.stat1_value'), label: t('proof.stat1_label') },
    { value: t('proof.stat2_value'), label: t('proof.stat2_label') },
    { value: t('proof.stat3_value'), label: t('proof.stat3_label') },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <Reveal className="mx-auto mb-12 max-w-2xl px-5 text-center">
        <h2 className="text-2xl font-bold text-fg md:text-3xl">{t('proof.title')}</h2>
        <p className="mt-3 text-fg-muted">{t('proof.subtitle')}</p>
      </Reveal>

      {/* Marquee de géneros (doble para loop continuo) */}
      <div
        className="relative flex select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
        aria-hidden="true"
      >
        <ul className="flex shrink-0 items-center gap-4 pr-4" style={{ animation: 'marquee 38s linear infinite' }}>
          {[...GENRES, ...GENRES].map((g, i) => (
            <li
              key={i}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-fg-muted"
            >
              {g}
            </li>
          ))}
        </ul>
      </div>

      {/* Stats de producto (honestas, sin métricas de usuarios infladas) */}
      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 px-5 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <div className="text-gradient font-headings text-4xl font-extrabold md:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm text-fg-muted">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
