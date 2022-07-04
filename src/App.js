import {useState} from 'react';
import styled from 'styled-components';

import TodoForm from './components/TodoForm.js';
import TodoFormStories from './components/TodoForm.stories.js';
import TodoItem from './components/TodoItem.js';

export default function App() {
  return (
    <Grid>
      <Scroller>
        {TodoFormStories.map((todo, index) => (
        ))}
      </Scroller>
      :(
      <div>No todos.Start BY ADDING NEW TODOS.</div>
      )
      <TodoForm onCreateTodo={addTodo} />
    </Grid>
  );

  function addTodo(description) {}
}

const Grid = styled.main`
  display: grid;
  align-comtent: start;
`;
