import { FC, useState } from 'react';
import TodoCheckbox from './TodoCheckbox';
import TodoModify from './TodoModify';
import TodoShow from './TodoShow';
import { styled } from 'styled-components';
import { Todo } from '../../types/todo';

interface Props {
  todo: Todo;
  setTodo: (targetId: number, newTodo: Todo) => void;
}

const TodoItem: FC<Props> = ({ todo, setTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <TodoItemBox>
      <TodoCheckbox todo={todo} setTodo={setTodo} />
      {isEditMode ? (
        <TodoModify setIsEditMode={setIsEditMode} todo={todo} setTodo={setTodo} />
      ) : (
        <TodoShow setIsEditMode={setIsEditMode} todo={todo} />
      )}
    </TodoItemBox>
  );
};

export default TodoItem;

const TodoItemBox = styled.div`
  background-color: white;
  height: 40px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  padding: 10px;
`;
