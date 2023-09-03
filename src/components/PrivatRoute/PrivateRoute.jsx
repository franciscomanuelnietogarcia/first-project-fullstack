// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Element /> : <Navigate to="/Entrar" />}
//     />
//   );
// };

// export default PrivateRoute;

import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, isAuthenticated, ...rest }) => {
  if (isAuthenticated) {
    return <Route {...rest} element={element} />;
  } else {
    return <Navigate to="/Entrar" />;
  }
};

export default PrivateRoute;
