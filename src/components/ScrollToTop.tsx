import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lleva la ventana al tope en cada cambio de ruta (React Router no lo hace solo).
 * Si la URL trae un ancla (#seccion) no interfiere, para no romper el índice de contenidos.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
