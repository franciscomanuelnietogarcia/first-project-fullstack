import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import Home from './components/MainPage/Home';
import Entrar from './pages/Entrar';
import AdminPanel from './pages/Entrar';
import Logout from '../pages/Logout';

export const useRoutes = () => {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/entrar" element={<Entrar />} />
      
      <Route element={<PrivateRoute />}>
        <Route path='/adminPanel' element={<AdminPanel />} />
        <Route path="/logout" element={<Logout />} />
      </Route>

    </Routes>
  )
}

export default useRoutes
