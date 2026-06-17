import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, Mail } from 'lucide-react';
import GlobalBackground from '../components/ui/GlobalBackground';
import ScrollProgress from '../components/ui/ScrollProgress';
import SkipLink from '../components/ui/SkipLink';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { usePageTitle } from '../hooks/usePageTitle';
import logoColor from '../assets/logo/logo-color-bisel.webp';

const ContactPage = () => {
  usePageTitle('Contacto y Soporte');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('peticion');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [hp, setHp] = useState(''); // honeypot

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (hp) return; // bot
    
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, type, message }),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setType('peticion');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError('Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.');
    }
  };

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
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Soporte</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] text-fg md:text-5xl">Contacto y PQRS</h1>
          <p className="mt-4 text-sm text-fg-subtle max-w-xl mx-auto">
            ¿Tienes alguna petición, queja, reclamo o sugerencia? Escríbenos y te responderemos lo más pronto posible.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          
          {/* Información de contacto */}
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6 h-fit">
            <h2 className="text-lg font-bold text-fg">Contacto Directo</h2>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-magenta-400 shrink-0" size={20} />
              <div>
                <p className="text-sm font-semibold text-fg-muted">Correo electrónico</p>
                <a href="mailto:encorely.dev@edav.com.co" className="text-fg hover:text-magenta-300 transition-colors">
                  encorely.dev@edav.com.co
                </a>
              </div>
            </div>
            <p className="text-xs text-fg-subtle leading-relaxed mt-4">
              Nuestro equipo de soporte está disponible de lunes a viernes. Respondemos la mayoría de los correos en menos de 24 horas.
            </p>
          </div>

          {/* Formulario */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-10 h-full animate-fade-in-up">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-magenta-500/20 text-magenta-400 mb-6 border border-magenta-500/30">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-fg">¡Mensaje enviado!</h3>
                <p className="mt-3 text-fg-muted">Hemos recibido tu mensaje correctamente. Te responderemos pronto a tu correo.</p>
                <Button variant="secondary" className="mt-8" onClick={() => setStatus('idle')}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="text-xl font-bold text-fg mb-2">Envíanos un mensaje</h2>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-fg-muted">Nombre</label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Tu nombre completo"
                    className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 text-fg placeholder:text-fg-subtle transition-colors focus:border-magenta-400/60 focus-visible:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-fg-muted">Correo electrónico</label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="tu@correo.com"
                    className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 text-fg placeholder:text-fg-subtle transition-colors focus:border-magenta-400/60 focus-visible:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="type" className="text-sm font-semibold text-fg-muted">Tipo de solicitud (PQRS)</label>
                  <select
                    id="type"
                    required
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    className="h-12 w-full rounded-xl border border-white/15 bg-ink-950 px-4 text-fg transition-colors focus:border-magenta-400/60 focus-visible:outline-none"
                  >
                    <option value="peticion">Petición / Consulta general</option>
                    <option value="queja">Queja (Insatisfacción con un servicio)</option>
                    <option value="reclamo">Reclamo (Falla en el servicio)</option>
                    <option value="sugerencia">Sugerencia (Recomendación)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-fg-muted">Mensaje</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Escribe los detalles aquí..."
                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-4 text-fg placeholder:text-fg-subtle transition-colors focus:border-magenta-400/60 focus-visible:outline-none resize-y"
                  ></textarea>
                </div>

                {/* Honeypot: oculto para humanos, lo llenan los bots */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                {status === 'error' && (
                  <p className="text-sm text-magenta-300 text-center">{error}</p>
                )}

                <Button type="submit" variant="primary" size="lg" className="mt-4" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Enviando...' : (
                    <>
                      Enviar mensaje <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
