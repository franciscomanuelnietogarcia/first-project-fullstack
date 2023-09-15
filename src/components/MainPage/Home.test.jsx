import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('Home component should render correctly', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Используйте screen.getByText для поиска текста
  const titleElement = screen.getByText('Estudia', { exact: false });
  expect(titleElement).toBeInTheDocument();

  // Другие проверки здесь
});
