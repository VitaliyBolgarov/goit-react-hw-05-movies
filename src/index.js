import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { ToTop } from './components/ScrollToTop/ToTop';
import { theme } from './Styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <ThemeProvider theme={theme}>
        <App />
        <ToTop />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);