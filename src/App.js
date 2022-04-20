import React, { useState } from "react";
//Gloabl Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import InitialPages from "./Pages/InitialPages";
import Nav from "./components/Nav";
import Guide from "./components/LearnBy";
import Motivation from "./components/Motivation";
import Module1 from "./Pages/Module1";
import Module2 from "./Pages/Module2";
import Module3 from "./Pages/Module3";
import About from "./Pages/About";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <InitialPages />
          </Route>
          <Route path="/Guide">
            <Guide />
          </Route>
          <Route path="/Motivation">
            <Motivation />
          </Route>
          <Route path="/Module1">
            <Module1 />
          </Route>
          <Route path="/Module2">
            <Module2 />
          </Route>
          <Route path="/Module3">
            <Module3 />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
