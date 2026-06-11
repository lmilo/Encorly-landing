import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import type { PanInfo } from 'motion/react';
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'motion/react';
import { Heart, X, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import AudioWave from './ui/AudioWave';

type Song = {
  id: number;
  title: string;
  artist: string;
  tags: string[];
  from: string;
  to: string;
};

const SONGS: Song[] = [
  { id: 1, title: 'Midnight City Vibes', artist: 'The Synthetics', tags: ['Alta energía', 'Synthwave'], from: '#7B34E8', to: '#F366FF' },
  { id: 2, title: 'Golden Hour', artist: 'Luna Prado', tags: ['Chill', 'Indie'], from: '#F366FF', to: '#FFA45B' },
  { id: 3, title: 'Concrete Jungle', artist: 'BAJO/MUNDO', tags: ['Hype', 'Trap'], from: '#9350FF', to: '#3A7DFF' },
  { id: 4, title: 'Bailando en Marte', artist: 'Cumbia Cósmica', tags: ['Fiesta', 'Cumbia'], from: '#F366FF', to: '#9350FF' },
];

const SWIPE_THRESHOLD = 110;

type CardHandle = { fling: (dir: 1 | -1) => void };

type CardProps = {
  song: Song;
  pos: number; // 0 = frente
  isFront: boolean;
  onDecide: (dir: 1 | -1) => void;
  reduce: boolean;
  likeLabel: string;
  skipLabel: string;
};

const SwipeCard = forwardRef<CardHandle, CardProps>(
  ({ song, pos, isFront, onDecide, reduce, likeLabel, skipLabel }, ref) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-13, 13]);
  const likeOpacity = useTransform(x, [30, 120], [0, 1]);
  const nopeOpacity = useTransform(x, [-120, -30], [1, 0]);

  const fling = (dir: 1 | -1) => {
    if (reduce) {
      onDecide(dir);
      return;
    }
    animate(x, dir * 700, { duration: 0.32, ease: [0.16, 1, 0.3, 1] }).then(() => onDecide(dir));
  };

  useImperativeHandle(ref, () => ({ fling }));

  const onDragEnd = (_e: unknown, info: PanInfo) => {
    if (info.offset.x > SWIPE_THRESHOLD) fling(1);
    else if (info.offset.x < -SWIPE_THRESHOLD) fling(-1);
  };

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x: isFront ? x : 0, rotate: isFront ? rotate : 0, zIndex: 10 - pos }}
      drag={isFront && !reduce ? 'x' : false}
      dragSnapToOrigin
      dragElastic={0.6}
      onDragEnd={onDragEnd}
      initial={false}
      animate={{ scale: 1 - pos * 0.05, y: pos * 16, opacity: pos > 2 ? 0 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/12 bg-ink-850 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.8)]">
        {/* Carátula */}
        <div
          className="relative flex flex-1 items-center justify-center"
          style={{ background: `linear-gradient(140deg, ${song.from}, ${song.to})` }}
        >
          <div className="flex h-12 w-28 items-center text-white/90">
            <AudioWave bars={16} paused={!isFront} />
          </div>

          {isFront && (
            <>
              <motion.div
                style={{ opacity: likeOpacity }}
                className="absolute left-4 top-4 flex items-center gap-1.5 rounded-lg border-2 border-magenta-400 px-3 py-1 text-sm font-extrabold uppercase tracking-wide text-magenta-300"
              >
                <Heart size={16} /> {likeLabel}
              </motion.div>
              <motion.div
                style={{ opacity: nopeOpacity }}
                className="absolute right-4 top-4 flex items-center gap-1.5 rounded-lg border-2 border-white/70 px-3 py-1 text-sm font-extrabold uppercase tracking-wide text-white/80"
              >
                <X size={16} /> {skipLabel}
              </motion.div>
            </>
          )}
        </div>

        {/* Info */}
        <div className="bg-ink-850 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate font-headings text-lg font-bold text-fg">{song.title}</h3>
              <p className="truncate text-sm text-fg-muted">{song.artist}</p>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-magenta-500 text-ink-950">
              <Play size={16} fill="currentColor" />
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {song.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-violet-500/15 px-2.5 py-1 text-xs font-semibold text-violet-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});
SwipeCard.displayName = 'SwipeCard';

let uidCounter = SONGS.length;

const SoundSwipeDemo = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion() ?? false;
  const [deck, setDeck] = useState(() => SONGS.map((s) => ({ ...s, uid: s.id })));
  const frontRef = useRef<CardHandle>(null);

  const onDecide = () => {
    setDeck((d) => {
      const [top, ...rest] = d;
      return [...rest, { ...top, uid: ++uidCounter }];
    });
  };

  const visible = deck.slice(0, 3);

  return (
    <Section id="demo">
      <SectionHeading eyebrow={t('demo.eyebrow')} title={t('demo.title')} subtitle={t('demo.subtitle')} />

      <Reveal className="mt-14 flex flex-col items-center">
        <div className="relative h-[420px] w-full max-w-[300px]">
          {visible
            .map((song, i) => ({ song, i }))
            .reverse()
            .map(({ song, i }) => (
              <SwipeCard
                key={song.uid}
                ref={i === 0 ? frontRef : undefined}
                song={song}
                pos={i}
                isFront={i === 0}
                onDecide={onDecide}
                reduce={reduce}
                likeLabel={t('demo.like')}
                skipLabel={t('demo.skip')}
              />
            ))}
        </div>

        {/* Controles */}
        <div className="mt-8 flex items-center gap-5">
          <button
            onClick={() => frontRef.current?.fling(-1)}
            aria-label={t('demo.skip')}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-fg-muted transition-colors hover:border-white/40 hover:text-fg active:scale-95"
          >
            <X size={24} />
          </button>
          <button
            onClick={() => frontRef.current?.fling(1)}
            aria-label={t('demo.like')}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-magenta-500 text-ink-950 shadow-[0_8px_30px_-6px_rgba(243,102,255,0.7)] transition-transform hover:scale-105 active:scale-95"
          >
            <Heart size={26} fill="currentColor" />
          </button>
        </div>
        <p className="mt-5 text-sm text-fg-subtle">{t('demo.hint')}</p>
      </Reveal>
    </Section>
  );
};

export default SoundSwipeDemo;
