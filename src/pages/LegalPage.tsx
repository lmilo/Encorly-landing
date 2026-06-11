import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { LegalDoc } from '../content/legal';
import GlobalBackground from '../components/ui/GlobalBackground';
import ScrollProgress from '../components/ui/ScrollProgress';
import SkipLink from '../components/ui/SkipLink';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import logoColor from '../assets/logo/logo-color-bisel.webp';

const LegalPage = ({ doc }: { doc: LegalDoc }) => {
  usePageTitle(doc.title);

  return (
    <div className="min-h-screen antialiased">
      <GlobalBackground />
      <ScrollProgress />
      <SkipLink />

      {/* Header mínimo */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="glass-panel is-scrolled mx-auto flex h-16 max-w-4xl items-center justify-between rounded-2xl px-4 sm:px-5">
          <Link to="/" className="flex shrink-0 items-center" aria-label="Encorely — inicio">
            <img src={logoColor} alt="Encorely" className="h-9 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main id="contenido" className="mx-auto max-w-3xl px-5 pt-32 pb-24 sm:px-6 lg:pt-36">
        {/* Cabecera del documento */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] text-fg md:text-5xl">{doc.title}</h1>
        <p className="mt-4 text-sm text-fg-subtle">Última actualización: {doc.lastUpdated}</p>

        <div className="mt-8 flex flex-col gap-4">
          {doc.intro.map((p, i) => (
            <p key={i} className="leading-relaxed text-fg-muted">
              {p}
            </p>
          ))}
        </div>

        {/* Índice de contenidos */}
        <nav
          aria-label="Índice"
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-6"
        >
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-fg-subtle">Contenido</h2>
          <ol className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {doc.sections.map((s, i) => (
              <li key={i}>
                <a
                  href={`#seccion-${i}`}
                  className="text-sm text-fg-muted transition-colors hover:text-magenta-300"
                >
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Secciones */}
        <div className="mt-12 flex flex-col gap-10">
          {doc.sections.map((s, i) => (
            <section key={i} id={`seccion-${i}`} className="scroll-mt-28">
              <h2 className="text-xl font-bold text-fg md:text-2xl">{s.heading}</h2>
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="mt-3 leading-relaxed text-fg-muted">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-4 flex flex-col gap-2.5">
                  {s.list.map((item, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-fg-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vibe-gradient" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Volver */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-magenta-300 transition-colors hover:text-magenta-400"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
