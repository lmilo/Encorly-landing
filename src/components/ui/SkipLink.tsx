/** Enlace de salto para teclado/lectores de pantalla (oculto hasta recibir foco). */
const SkipLink = () => (
  <a
    href="#contenido"
    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-magenta-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-ink-950"
  >
    Saltar al contenido
  </a>
);

export default SkipLink;
