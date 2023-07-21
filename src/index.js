import React from 'react';
import { createRoot } from 'react-dom/client';
import MainRouter from './components/Router';
import GlobalStyles from './GlobalStyles';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <MainRouter />
  </React.StrictMode>
);
