import React, { useState } from "react";
import {
  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import "./App.css";
import Home from "./components/MainPage/Home";
import Contactos from "./pages/Contactos";
import Entrar from "./pages/Entrar";
import Registrar from "./pages/Registrar";
import AdminPanel from "./pages/AdminPanel";
import PersonalArea from "./pages/PersonalArea"
//import { Component } from "react";
//import { Switch } from "@prismane/core/*";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactos" element={<Contactos />} />
          <Route path="/Entrar" element={<Entrar />} />
          <Route path="/Registrar" element={<Registrar />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/PersonalArea" element={<PersonalArea />} />
        </Routes>
      </Router>
  );
};

export default App;
