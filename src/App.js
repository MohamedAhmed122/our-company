import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Navbar/Header";
import theme from "./theme/theme";
import Home from './Pages/HomePage/Home'
import Footer from "./Layouts/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
