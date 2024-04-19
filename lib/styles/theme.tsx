import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { create } from '@mui/material/styles/createTransitions';

const themeCreator = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#54335D",
    },
    info: {
      main: "#E35D63",
    },
  },
  typography: {
    fontFamily: ["sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontSize: 13,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 13,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 13,
      fontWeight: 'bold',
    }
  }
});

export const theme = responsiveFontSizes(themeCreator);
