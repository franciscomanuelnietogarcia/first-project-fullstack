import { test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import AddModalCours from './AddModalCours';

test('AddModalCours component should render correctly', async () => {
  const newCourse = {
    title: '',
    desc: '',
    price: '',
    time: '',
    cover: '',
  };

  const { getByText, getByLabelText } = render(
    <AddModalCours show={true} onHide={() => {}} onSubmit={() => {}} newCourse={newCourse} setNewCourse={() => {}} />
  );

  // Проверка наличия заголовка
  const titleElement = getByText('Añadir nuevo courso');
  expect(titleElement.textContent).toBe('Añadir nuevo courso');

  // Проверка наличия формы и её элементов
  const formElement = getByText('Title');
  expect(formElement.textContent).toBe('Title');

  // Проверка наличия кнопки "Cancelar"
  const cancelButtonElement = getByText('Cancelar');
  expect(cancelButtonElement.textContent).toBe('Cancelar');

  // Проверка наличия кнопки "Añadir Course"
  const addButtonElement = getByText('Añadir Course');
  expect(addButtonElement.textContent).toBe('Añadir Course');

  // Тестирование взаимодействия с формой (например, ввод текста)
  const titleInput = getByLabelText('Title');
//   fireEvent.change(titleInput, { target: { value: 'Test course' } });
//   expect(titleInput.value).toBe('Test course');
});