import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import { privacyPolicy, termsOfService } from './content/legal';
import './index.css';
import './i18n/config'; // <--- IMPORTANTE: Importar la configuración aquí

// Las páginas legales se cargan bajo demanda (no lastran el bundle inicial).
const LegalPage = lazy(() => import('./pages/LegalPage'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-ink-950" />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacidad" element={<LegalPage doc={privacyPolicy} />} />
          <Route path="/terminos" element={<LegalPage doc={termsOfService} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
