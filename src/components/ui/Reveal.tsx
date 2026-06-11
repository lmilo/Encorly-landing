import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Desplazamiento vertical inicial en px */
  y?: number;
  /** Retraso en segundos (útil para stagger manual) */
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'article';
};

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** Revela su contenido al entrar al viewport. Inerte con prefers-reduced-motion. */
const Reveal = ({ children, className, y = 28, delay = 0, as = 'div' }: RevealProps) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
