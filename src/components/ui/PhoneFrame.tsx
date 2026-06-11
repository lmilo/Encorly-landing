import type { ReactNode } from 'react';

/** Marco de dispositivo consistente para todos los mockups del sitio. */
const PhoneFrame = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div
    className={`relative rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2.5 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.75)] ${className}`.trim()}
  >
    {children}
  </div>
);

export default PhoneFrame;
