import React, { useState } from "react";
import {
  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import { Navigate  } from "react-router-dom";
import "./App.css";
import Home from "./components/MainPage/Home";
import Contactos from "./pages/Contactos";
import Entrar from "./pages/Entrar";
import Registrar from "./pages/Registrar";
import AdminPanel from "./pages/AdminPanel";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactos" element={<Contactos />} />
          <Route path="/Entrar" element={<Entrar />} />
          <Route path="/Registrar" element={<Registrar />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
        </Routes>
      </Router>
  );
};

export default App;
