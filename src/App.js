import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'
// import theme from "./theme.js"

import { createTheme } from '@mui/material/styles';
// import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiPaper : {
      styleOverrides: {
        rounded: { borderRadius: "10px"}
      }
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Main />
    </ThemeProvider>
  )
}

export default App
