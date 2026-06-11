import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Loader2 } from 'lucide-react';
import Button from './ui/Button';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistFormProps = {
  /** Prefijo único para los IDs (evita colisión entre varias instancias en la misma página) */
  idPrefix?: string;
  /** Alinea el texto auxiliar (privacidad/error) */
  align?: 'center' | 'left';
  className?: string;
};

const WaitlistForm = ({ idPrefix = 'waitlist', align = 'center', className = '' }: WaitlistFormProps) => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [hp, setHp] = useState(''); // honeypot anti-spam

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (hp) return; // bot
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setError(t('waitlist.error_invalid'));
      return;
    }

    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lang: i18n.language }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setError(t('waitlist.error_generic'));
    }
  };

  if (status === 'success') {
    return (
      <div
        className={`flex flex-col items-center gap-3 rounded-2xl border border-magenta-500/30 bg-magenta-500/[0.06] p-8 ${className}`.trim()}
        role="status"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-magenta-500 text-ink-950">
          <Check size={26} strokeWidth={3} />
        </div>
        <h3 className="text-xl font-bold text-fg">{t('waitlist.success_title')}</h3>
        <p className="text-sm text-fg-muted">{t('waitlist.success_desc')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`flex flex-col gap-3 ${className}`.trim()}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`${idPrefix}-email`} className="sr-only">
          {t('waitlist.placeholder')}
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={t('waitlist.placeholder')}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          disabled={status === 'loading'}
          aria-invalid={status === 'error'}
          className="h-13 flex-1 rounded-full border border-white/15 bg-white/[0.04] px-5 text-fg placeholder:text-fg-subtle transition-colors focus:border-magenta-400/60 focus-visible:outline-none disabled:opacity-60"
        />
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
        <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              {t('waitlist.button_loading')}
            </>
          ) : (
            t('waitlist.button')
          )}
        </Button>
      </div>

      <p aria-live="polite" className={`min-h-[1.25rem] text-sm ${align === 'left' ? 'text-left' : 'text-center'}`}>
        {status === 'error' ? (
          <span className="text-magenta-300">{error}</span>
        ) : (
          <span className="text-fg-subtle">{t('waitlist.privacy')}</span>
        )}
      </p>
    </form>
  );
};

export default WaitlistForm;
