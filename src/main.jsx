import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import LoadingSpinner from './components/ui/LoadingSpinner';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <HashRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </HashRouter>
  </StrictMode>
);
