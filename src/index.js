import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

// Set up a default colour pallete / theme for our whole app using material-ui ThemeProvider context component
const defaultTheme = createTheme({
  palette: {
    primary: { main: '#070840' }, // Change "main" to set the primary color
    secondary: { main: '#7324fb' }, // Change "main" to set the secondary color
    custome: {
      main: {
        backgroundImage:
          'linear-gradient(to right, #c81ee8, #896dff, #3a93ff, #00aeff, #42c1f9)',
        color: 'white', // Text color
      },
    },
    mode: 'light',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '1.25rem', // Border radius here
        },
      },
    },
  },
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
