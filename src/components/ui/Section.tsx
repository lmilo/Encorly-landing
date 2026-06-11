import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Contenedor interno con ancho máximo y padding horizontal */
  containerClassName?: string;
};

/** Envoltura de sección con ritmo vertical y ancho de contenido consistentes. */
const Section = ({ id, children, className = '', containerClassName = '' }: SectionProps) => (
  <section id={id} className={`relative py-24 md:py-32 ${className}`.trim()}>
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${containerClassName}`.trim()}>
      {children}
    </div>
  </section>
);

export default Section;
