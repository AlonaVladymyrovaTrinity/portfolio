import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

// Set up a default colour pallete / theme for our whole app using material-ui ThemeProvider context component
const defaultTheme = createTheme({
  palette: {
    primary: { main: '#313866' },
    secondary: { main: '#974EC3' },
    mode: 'light',
  }, // Change "main" to set the primary color
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={defaultTheme}>
    {/* CSS baseline to set common spacing/sizing across all of our styling */}
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
