import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"
import Home from "./components/MainPage/Home";
import Contactos from "./pages/Contactos";
import Entrar from "./pages/Entrar";
import Registrar from "./pages/Registrar"
import AdminPanel from "./pages/AdminPanel"
import { AppAddUser } from "./components/CRUD/AppAddUser";

import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
import restProvider from 'ra-data-simple-rest'

const dataProvider = restProvider('http://localhost:5000'); // Подставьте базовый URL вашего API

// function App() {
//   return (
//     <Admin dataProvider={dataProvider}>
//       <Resource name="users" list={ListGuesser} />
//     </Admin>
//   );
// }
// export default App;

const App = () => {
  return (
    <>
        {/* <AppAddUser /> */}
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Entrar" element={<Entrar />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
