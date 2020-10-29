// import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    // secondary: {
    //   main: '#e53935',
    // },
    // error: {
    //   main: red.A400,
    // },
    background: {
      default: '#f5f5f5',
    },
  },
});

export default theme;
