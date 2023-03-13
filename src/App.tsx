import 'assets/index.css'

import { ThemeProvider } from '@mui/system'
import { AppRoutes } from 'routes'
import { theme } from 'theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
