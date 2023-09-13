import React, { useState } from "react";
import {BrowserRouter ,  Route,  Routes} from "react-router-dom";
import "./App.css";
import Home from "./components/MainPage/Home";
import Contactos from "./pages/Contactos";
import Courses from "./pages/Courses";
import Entrar from "./pages/Entrar";
import Registrar from "./pages/Registrar";
import AdminPanel from "./pages/AdminPanel";
import PersonalArea from "./pages/PersonalArea"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
  
    <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactos" element={<Contactos />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Entrar" element={<Entrar />} />
          <Route path="/Registrar" element={<Registrar />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/PersonalArea" element={<PersonalArea />} />
        </Routes>
    </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
