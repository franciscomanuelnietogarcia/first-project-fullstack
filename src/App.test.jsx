import { test } from 'vitest';
import { render } from '@testing-library/react';
import { createRouter, createMemoryHistory } from 'react-router-dom';
import App from './App';

test('App component should render without errors', async () => {
  // Создаем экземпляр Router с использованием createRouter и createMemoryHistory
  const history = createMemoryHistory();
  const router = createRouter(history);

  // Рендерим компонент App внутри Router
  const { container } = render(router(() => <App />));

  // Проверяем, что компонент успешно отрендерился и не вызвал ошибок
  assert(container.firstChild !== null, 'App should render without errors');
});