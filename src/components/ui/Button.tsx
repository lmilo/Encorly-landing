import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap ' +
  'transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out ' +
  'active:scale-[0.97] focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-magenta-500 text-ink-950 hover:bg-magenta-400 ' +
    'shadow-[0_0_0_0_rgba(243,102,255,0)] hover:shadow-[0_8px_40px_-8px_rgba(243,102,255,0.7)]',
  secondary:
    'border border-white/15 bg-white/[0.03] text-fg hover:bg-white/[0.07] hover:border-white/25',
  ghost: 'text-fg-muted hover:text-fg',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-4 text-base',
};

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

/** Botón polimórfico (se renderiza como <button> o <a> con `as`). */
const Button = <T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}: ButtonProps<T>) => {
  const Tag = (as ?? 'button') as ElementType;
  return (
    <Tag className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
};

export default Button;
