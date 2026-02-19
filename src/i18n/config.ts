import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importación de los JSON con el Copywriting de Encorely
import esTranslation from './locales/es.json';
import enTranslation from './locales/en.json';

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources: {
      es: {
        translation: esTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    fallbackLng: 'es', // Idioma por defecto si no detecta uno compatible
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
  });

export default i18n;