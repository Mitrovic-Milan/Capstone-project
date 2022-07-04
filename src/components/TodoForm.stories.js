import TodoForm from './TodoForm';

export default {
  titel: 'Compoonets/TodoForm',
  component: TodoForm,
  argTypes: {onCreateTodo: {action: 'onCreateTodo'}},
};

const Template = args => <TodoForm {...args} />;

export const Default = Template.bind({});
