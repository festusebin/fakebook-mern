import { createMuiTheme } from '@material-ui/core/styles'
import { blue, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#9cb2ce',
      main: '#4267b2',
      dark: '#29487d',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
      contrastText: '#000000',
    },
      openTitle: blue['700'],
      protectedTitle: orange['700'],
      type: 'light'
    }
  })

  export default theme  