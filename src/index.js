import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CountriesProvider } from './context/CountriesContext';
import { ModeProvider } from './context/ModeContext'

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
