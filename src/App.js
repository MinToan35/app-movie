import React from "react";
import "swiper/css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./config/Routes";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
