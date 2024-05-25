import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contribute from "./Components/Contribute";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contribute":
        return <Contribute />;
      default:
        return <Home />;
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="App" className="App">
      <Header handleNavigation={handleNavigation} />
      <div id="main-page">{renderPage()}</div>
      <Footer />
    </div>
  );
};

export default App;
