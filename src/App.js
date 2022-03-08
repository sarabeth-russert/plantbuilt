import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Profiles from "./components/Profiles.js";
import Footer from "./components/Footer.js";
// import theme from "./theme.js"

import { createTheme } from "@mui/material/styles";
// import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: "dark",
    success: { main: "#709425" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: "10px" },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/profiles">
            <Profiles />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
