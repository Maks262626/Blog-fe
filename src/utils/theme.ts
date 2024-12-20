import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e', 
    },
    secondary: {
      main: '#1e1e2d'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
  },
});
export default darkTheme;
