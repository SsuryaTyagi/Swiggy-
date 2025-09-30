import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
// main.jsx
import RestaurantProvider, { RestContext } from './assets/Component/Context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </BrowserRouter>
  </StrictMode>,
);
