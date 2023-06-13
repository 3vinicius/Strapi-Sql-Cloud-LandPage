import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { Home } from './templates/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyThemeProvider>
    <Home />
  </MyThemeProvider>,
);
