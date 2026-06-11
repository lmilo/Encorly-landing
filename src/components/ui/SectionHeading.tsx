import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
};

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', className = '' }: SectionHeadingProps) => {
  const isCenter = align === 'center';
  return (
    <Reveal className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`.trim()}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-balance text-4xl font-bold leading-[1.05] text-fg md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl text-base leading-relaxed text-fg-muted md:text-lg ${isCenter ? 'mx-auto' : ''}`.trim()}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
