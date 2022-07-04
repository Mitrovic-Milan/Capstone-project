import styled from 'styled-components';

import ScreenReaderOnly from './';

export default function TodoForm({}) {
  return (
    <Form onSubmit={''} aria-laballedby="form-title">
      <label htmlFor="todo-input">Todo description</label>
      <input maxLength={30} id="todo-input" name="todo" />
      <button>
        <ScreenReaderOnly id="form-title">Create new todo</ScreenReaderOnly>
        <span aria-hidden>+</span>
      </button>
    </Form>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const description = form.elements.todo.value.trim();
}
//if (description.length > 0) {
//  onCreateTodo(description);

form.reset();

const Form = styled.form`
  display: grid;
  gap: 6px;
  grid-template-colums: auto 48px;
  background: white;

  label {
    grid-column: span 2;
  }
`;
