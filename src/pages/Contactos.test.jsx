import React from 'react';
import { contactosViTest } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import Contactos from './Contactos';

const test = contactosViTest();

test('Contactos component should render correctly', async () => {
  const { getByText } = render(<Contactos />);

  // Проверка наличия заголовка - Comprobando la presencia del encabezado 
  const headerElement = getByText('Sobre nosotros');
  expect(headerElement).toBeInTheDocument();

  // Проверка наличия текстового контента - Comprobando la presencia contenido del texto
  const contentElement = getByText(
    'Bienvenidos a CoursDev, una plataforma de aprendizaje en línea dedicada a proporcionar cursos de alta calidad sobre desarrollo de software y tecnología.'
  );
  expect(contentElement).toBeInTheDocument();

});
