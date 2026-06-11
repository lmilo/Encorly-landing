# 🎶 Encorely — Landing

Landing page de **Encorely**, la app de _social music matching_ que conecta fans de
conciertos según su ADN musical de Spotify para que nadie vaya solo a un show.

Estética **dark neón** (magenta `#F366FF` + violeta `#9350FF`), enfocada en convertir al
visitante en suscriptor de la lista de espera.

## 🛠️ Stack

- **React 19** + **Vite 7** + **TypeScript**
- **Tailwind CSS v4** (tokens en `src/index.css` vía `@theme`)
- **motion** para animaciones y scroll-reveal (respeta `prefers-reduced-motion`)
- **i18next** — español / inglés
- **Lucide** para iconografía

## 🚀 Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción a /dist
npm run lint
```

## 🧱 Estructura

```text
src/
 ├── components/
 │   ├── ui/            # Primitivos: Section, Button, Reveal, Aurora, AudioWave, SectionHeading, BrandIcons
 │   ├── Navbar.tsx
 │   ├── Hero.tsx
 │   ├── HowItWorks.tsx # Cómo funciona (4 pasos con mockups)
 │   ├── Features.tsx
 │   ├── MusicDNA.tsx   # Diferenciador: radar + dimensiones
 │   ├── Integrations.tsx
 │   ├── SocialProof.tsx
 │   ├── Values.tsx
 │   ├── Waitlist.tsx   # Formulario de captura
 │   └── FAQ.tsx
 ├── i18n/              # Diccionarios ES/EN
 └── assets/            # logos + mockups
netlify/functions/
 └── subscribe.ts       # Inscribe el correo en Brevo
```

## 📨 Waitlist (Brevo + Netlify)

La captura de correos usa una **Netlify Function** que inscribe el contacto en **Brevo**.
La API key vive en variables de entorno, nunca en el frontend.

1. Crea una API key en [Brevo](https://app.brevo.com) › _SMTP & API › API Keys_.
2. En Netlify › _Site settings › Environment variables_, define:
   - `BREVO_API_KEY` — tu API key (obligatoria).
   - `BREVO_LIST_ID` — ID numérico de la lista de waitlist (opcional).
3. Para desarrollo local, copia `.env.example` a `.env` (ya está en `.gitignore`).

El despliegue se hace en **Netlify** (`netlify.toml` ya configurado: build, functions y redirect SPA).
```
