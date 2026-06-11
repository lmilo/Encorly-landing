import { motion, useScroll, useSpring } from 'motion/react';

/** Barra fina de progreso de lectura anclada al borde superior. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-vibe-gradient"
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
