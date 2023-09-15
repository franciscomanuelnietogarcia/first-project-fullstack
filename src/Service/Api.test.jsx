import { test } from 'vitest';
import { fetchData, fetchAdvantages, fetchCards } from './Api'; // Замените 'yourModule' на путь к вашему модулю

test('fetchData should fetch data from a URL', async () => {
  const data = await fetchData('http://localhost:5000/');

  // Проверка, что data не пустое и имеет ожидаемую структуру
  assert(data !== null && typeof data === 'object', 'Data should not be null and should be an object');
});

test('fetchAdvantages should fetch advantages data', async () => {
  const advantages = await fetchAdvantages();

  // Проверка, что advantages не пустое и имеет ожидаемую структуру
  assert(advantages !== null && Array.isArray(advantages), 'Advantages should not be null and should be an array');
});

test('fetchCards should fetch cards data', async () => {
  const cards = await fetchCards();

  // Проверка, что cards не пустое и имеет ожидаемую структуру
  assert(cards !== null && Array.isArray(cards), 'Cards should not be null and should be an array');
});
