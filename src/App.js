import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Navbar/Header";
import theme from "./theme/theme";
import Home from './Pages/HomePage/Home'
import Footer from "./Layouts/Footer/Footer";
import ServicePage from './Pages/ServicePages/ServicePage'
import CustomPage from "./Pages/ServicePages/CustomService";
import MobilePage from './Pages/ServicePages/MobilePage'

function App() {
return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
                <div className="App">
                <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path= '/service' component={ServicePage} />
                        <Route path='/customDevlopment' component={CustomPage} />
                        <Route path='/mobileApp' component={MobilePage} />
                    </Switch>
                </div>
            <Footer />
        </ThemeProvider>
    </BrowserRouter>
);
}

export default App;