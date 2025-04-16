import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    colors: {
      primary: {
        main: '#0056b3',
        dark: '#004494',
        light: '#3378c5',
      },
      secondary: {
        main: '#00aa55',
        dark: '#008c46',
        light: '#33bb77',
      },
      neutral: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      accent: {
        main: '#ff6b35',
        dark: '#e55a2b',
        light: '#ff8c61',
      },
      warning: '#ffc107',
      error: '#dc3545',
      success: '#28a745',
      background: '#ffffff',
    },
    fonts: {
      body: 'Inter, system-ui, sans-serif',
      heading: 'Montserrat, system-ui, sans-serif',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    space: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    radii: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
  };
  
  export default theme;