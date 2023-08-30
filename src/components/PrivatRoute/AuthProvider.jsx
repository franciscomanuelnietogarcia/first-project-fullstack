import React, { createContext, useState, useContext } from 'react';

// Создаем контекст аутентификации
export const AuthContext = createContext();

// Компонент-обертка для предоставления контекста аутентификации
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Кастомный хук для удобного доступа к контексту аутентификации
export const useAuth = () => {
  return useContext(AuthContext);
};
