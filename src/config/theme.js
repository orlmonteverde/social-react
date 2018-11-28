import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'

export const palette = {
  primary: {
    main: pink[400],
    light: pink[200],
    dark: pink[600],
    constrastText: '#000'
  },
  secondary: {
    main: purple[900],
    light: '#7c43bd',
    dark: '#12005e',
    constrastText: '#fff'
  }
}

export const theme = createMuiTheme({
  palette,
  typography: {
    useNextVariants: true
  }
})
