import createTheme from '@mui/material/styles/createTheme'

export const theme = createTheme({
  palette: {
    mode: 'light',
    secondary: {
      main: '#f50057'
    }
  },
  components: {
    MuiTab: {
      styleOverrides: {
        selected: {
          color: 'red !important'
        }
      }
    }
  }
})
