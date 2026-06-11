import { useEffect } from 'react';

const DEFAULT_TITLE = 'Encorely — Nunca vuelvas a ir solo a un concierto';

/** Actualiza document.title por ruta (la SPA no lo hace sola). */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Encorely` : DEFAULT_TITLE;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
}
