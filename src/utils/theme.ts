import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFD02',
    },
    secondary: {
      main: '#1A1A1A',
    },
    background: {
      default: '#FAFAFA',
      paper: '#282828',
    },
    text: {
      primary: '#FAFAFA',
      secondary: '#FFFD02',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
  },
});
export default darkTheme;
