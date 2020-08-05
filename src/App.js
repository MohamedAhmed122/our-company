import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import theme from "./theme/theme";
import Home from './Pages/HomePage/Home'
import Footer from "./Layouts/Footer/Footer";
import ServicePage from './Pages/ServicePages/ServicePage'
import CustomPage from "./Pages/ServicePages/CustomService";
import MobilePage from './Pages/ServicePages/MobilePage'
import WebPage from "./Pages/ServicePages/WebPage";
import AboutUS from "./Pages/About/AboutPage";
import Navbar from './Layouts/Navbar/Navbar'
import ContactPage from "./Pages/ContactPage.jsx/ContactPage";
import EstimatePage from './Pages/Estimation/EstimatePage'
import RevPage from "./Pages/Revolution/RevPage";

function App() {
return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
                <div className="App">
                <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path= '/services' component={ServicePage} />
                        <Route path='/customsoftware' component={CustomPage} />
                        <Route path='/mobileapps' component={MobilePage} />
                        <Route path='/websites' component={WebPage} />
                        <Route path='/about' component={AboutUS} />
                        <Route  path='/contact'component={ContactPage} />
                        <Route path='/estimate' component={EstimatePage}/> 
                        <Route path='/revolution' component={RevPage} />
                    </Switch>
                </div>
            <Footer />
        </ThemeProvider>
    </BrowserRouter>
);
}

export default App;