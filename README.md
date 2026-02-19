# 🎸 Encorly Music DNA Landing Page

![Estado](https://img.shields.io/badge/Status-Production--Ready-magenta?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Una solución de interfaz inmersiva y de alto impacto diseñada específicamente para la comunidad musical global. Este proyecto se enfoca en la captación de usuarios mediante una experiencia visual "Dark Mode Neón" y una arquitectura de componentes escalable.

---

## 🎯 Objetivo del Proyecto
Desarrollar una landing page de alto impacto visual que resuelva la fricción entre el descubrimiento del concepto de **Encorly** y el registro del usuario, optimizando la narrativa para inversionistas y priorizando una estética moderna.

## 🚀 Key Features

* **Responsive Music-First Architecture:** Layout dinámico que se adapta de una visualización inmersiva (Desktop) a una navegación vertical fluida (Mobile).
* **Dynamic UI Components:** * *Smart Navbar:* Sistema de gestión de idioma (i18n) con soporte para cambio dinámico ES/EN sin recarga.
    * *Interactive Feature Cards:* Sistema de tarjetas con efectos de iluminación neón y profundidad de capas para resaltar la propuesta de valor.
* **Performance Focused:** Desarrollado sobre Vite y Tailwind v4 para asegurar tiempos de carga mínimos y una fluidez óptima en dispositivos móviles.
* **Conversion Oriented:** Call-to-actions estratégicos diseñados para dirigir el flujo de usuario hacia la lista de espera (Waitlist).

## 🛠️ Stack Tecnológico

* **Core:** [React.js](https://reactjs.org/)
* **Bundler:** [Vite](https://vitejs.dev/)
* **Styles:** [Tailwind CSS](https://tailwindcss.com/) para un diseño atómico y utilitario de última generación.
* **Localization:** [i18next](https://www.i18next.com/) para una arquitectura de contenido global.
* **Icons:** [Lucide React](https://lucide.dev/) para iconografía funcional ligera.

---

## 📦 Estructura de Archivos

```text
src/
 ├── components/
 │   ├── Navbar.tsx     # Navegación y Localización
 │   ├── Hero.tsx       # Propuesta de valor principal
 │   ├── Features.tsx   # Pilares: The Deck y El Umbral de los 100
 │   └── Integrations.tsx # Ecosistema (Spotify/Ticketmaster)
 ├── i18n/              # Diccionarios y configuración ES/EN
 └── App.tsx            # Orquestador principal de la landing
