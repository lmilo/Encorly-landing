import { Music, Music2, Music3, Music4, AudioLines } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Note = {
  Icon: LucideIcon;
  top: string;
  left: string;
  size: number;
  color: string;
  anim: 'drift' | 'bob';
  duration: string;
  delay: string;
};

// Notas repartidas por todo el viewport (capa fija → vivas mientras se hace scroll).
const NOTES: Note[] = [
  { Icon: Music4, top: '6%', left: '7%', size: 32, color: 'text-magenta-400/15', anim: 'drift', duration: '19s', delay: '0s' },
  { Icon: AudioLines, top: '11%', left: '46%', size: 30, color: 'text-violet-300/10', anim: 'bob', duration: '6.5s', delay: '-3s' },
  { Icon: Music2, top: '16%', left: '88%', size: 40, color: 'text-violet-300/12', anim: 'drift', duration: '23s', delay: '-6s' },
  { Icon: Music3, top: '24%', left: '26%', size: 22, color: 'text-magenta-300/13', anim: 'bob', duration: '5.5s', delay: '-1s' },
  { Icon: Music, top: '31%', left: '66%', size: 26, color: 'text-violet-400/12', anim: 'drift', duration: '20s', delay: '-8s' },
  { Icon: Music2, top: '37%', left: '12%', size: 28, color: 'text-violet-400/14', anim: 'bob', duration: '6s', delay: '-2s' },
  { Icon: Music4, top: '43%', left: '92%', size: 24, color: 'text-magenta-400/12', anim: 'drift', duration: '18s', delay: '-11s' },
  { Icon: Music3, top: '49%', left: '40%', size: 34, color: 'text-magenta-300/10', anim: 'drift', duration: '22s', delay: '-5s' },
  { Icon: AudioLines, top: '55%', left: '78%', size: 38, color: 'text-violet-300/12', anim: 'drift', duration: '24s', delay: '-9s' },
  { Icon: Music, top: '61%', left: '6%', size: 30, color: 'text-violet-400/12', anim: 'bob', duration: '7s', delay: '-3s' },
  { Icon: Music2, top: '67%', left: '54%', size: 22, color: 'text-magenta-300/13', anim: 'bob', duration: '5s', delay: '-4s' },
  { Icon: Music4, top: '72%', left: '90%', size: 26, color: 'text-magenta-400/14', anim: 'drift', duration: '18s', delay: '-4s' },
  { Icon: Music3, top: '78%', left: '30%', size: 28, color: 'text-violet-400/11', anim: 'drift', duration: '21s', delay: '-7s' },
  { Icon: AudioLines, top: '84%', left: '68%', size: 32, color: 'text-violet-300/12', anim: 'drift', duration: '23s', delay: '-13s' },
  { Icon: Music2, top: '88%', left: '14%', size: 24, color: 'text-magenta-300/13', anim: 'bob', duration: '6s', delay: '-2s' },
  { Icon: Music, top: '93%', left: '84%', size: 30, color: 'text-violet-400/12', anim: 'bob', duration: '7.5s', delay: '-1s' },
  { Icon: Music4, top: '96%', left: '48%', size: 22, color: 'text-magenta-400/12', anim: 'drift', duration: '19s', delay: '-10s' },
  { Icon: Music3, top: '3%', left: '70%', size: 26, color: 'text-violet-300/11', anim: 'drift', duration: '20s', delay: '-6s' },
];

const GlobalBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    {/* Base tintada: glows tenues repartidos por todo el alto (ya no negro plano) */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(760px 580px at 18% 10%, rgba(147,80,255,0.06), transparent 60%),' +
          'radial-gradient(720px 560px at 82% 26%, rgba(220,69,238,0.045), transparent 60%),' +
          'radial-gradient(800px 620px at 28% 48%, rgba(123,52,232,0.05), transparent 62%),' +
          'radial-gradient(740px 580px at 78% 66%, rgba(147,80,255,0.045), transparent 60%),' +
          'radial-gradient(780px 600px at 42% 88%, rgba(220,69,238,0.04), transparent 62%),' +
          '#08070E',
      }}
    />

    {/* Auroras en movimiento lento, muy sutiles y repartidas */}
    <div className="absolute left-[-8%] top-[2%] h-[40vh] w-[36vw] rounded-full bg-violet-500/10 blur-[150px] animate-aurora" />
    <div
      className="absolute right-[-6%] top-[34%] h-[38vh] w-[34vw] rounded-full bg-magenta-500/[0.07] blur-[150px] animate-aurora"
      style={{ animationDelay: '-6s' }}
    />
    <div
      className="absolute left-[20%] top-[64%] h-[38vh] w-[34vw] rounded-full bg-violet-500/[0.07] blur-[150px] animate-aurora"
      style={{ animationDelay: '-11s' }}
    />
    <div
      className="absolute right-[18%] bottom-[-6%] h-[36vh] w-[32vw] rounded-full bg-magenta-500/[0.06] blur-[150px] animate-aurora"
      style={{ animationDelay: '-3s' }}
    />

    {/* Notas musicales derivando */}
    {NOTES.map((n, i) => {
      const Icon = n.Icon;
      return (
        <Icon
          key={i}
          size={n.size}
          strokeWidth={1.6}
          className={`absolute ${n.color}`}
          style={{
            top: n.top,
            left: n.left,
            animation: `${n.anim} ${n.duration} ease-in-out infinite`,
            animationDelay: n.delay,
          }}
        />
      );
    })}
  </div>
);

export default GlobalBackground;
