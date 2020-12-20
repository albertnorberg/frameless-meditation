import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#6eddcd',
      main: '#36AB9C',
      dark: '#007b6e',
      contrastText: '#fff',
    },
    secondary: {
      main: blue[500],
    },
  },
});