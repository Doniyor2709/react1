import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blue from "./pages/covidsec/covid";
function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About/>
      <Blue/>
    </Fragment>
  );
}

export default App;
