import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

// Default colour pallete / theme for whole app using material-ui ThemeProvider context component
const defaultTheme = createTheme({
  palette: {
    primary: { main: '#070840' }, // You can change "main" to set the primary color
    secondary: { main: '#7324fb' }, // You can change "main" to set the secondary color
    // Custom button color
    custom: {
      main: {
        backgroundImage:
          'linear-gradient(to right, #c81ee8, #896dff, #3a93ff, #00aeff, #42c1f9)', // Custom button gradient color
        color: 'white', // Text color
      },
    },
    mode: 'light',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '1.25rem', // Border radius for all button
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
