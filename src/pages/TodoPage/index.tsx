import { useEffect, useState } from 'react';
import TodoInput from '../../components/todo/TodoInput';
import TodoListSection from '../../components/todo/TodoListSection';
import * as Styled from './styled';
import { todo } from '../../apis/todo';
import { TodosPrivider } from '../../contexts/todosContext';
import { Todos } from '../../types/todo';

const TodoPage = () => {
  const [todos, setTodos] = useState<Todos>([]);

  useEffect(() => {
    todo
      .readTodo()
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Styled.TodoContainer>
      <Styled.TodoInner>
        <TodosPrivider value={{ todos, setTodos }}>
          <TodoInput />
          <TodoListSection />
        </TodosPrivider>
      </Styled.TodoInner>
    </Styled.TodoContainer>
  );
};

export default TodoPage;
