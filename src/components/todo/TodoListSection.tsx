import { styled } from 'styled-components';
import TodoItem from './TodoItem';
import { todosContext } from '../../contexts/todosContext';
import { useContext } from 'react';
import { Todo } from '../../types/todo';

const TodoListSection = () => {
  const { todos, setTodos } = useContext(todosContext);

  const setTodo = (targetId: number, newTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo.id === targetId) {
        return newTodo;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <TodoListWrap>
      {todos?.map(todo => <TodoItem key={todo.id} todo={todo} setTodo={setTodo} />)}
    </TodoListWrap>
  );
};

export default TodoListSection;

const TodoListWrap = styled.section`
  /* background-color: blue; */
`;
