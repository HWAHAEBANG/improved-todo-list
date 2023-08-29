import { useState } from 'react';
import TodoCheckbox from './TodoCheckbox';
import TodoModify from './TodoModify';
import TodoShow from './TodoShow';
import { styled } from 'styled-components';

const TodoItem = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <TodoItemBox>
      <TodoCheckbox />
      {isEditMode ? (
        <TodoModify setIsEditMode={setIsEditMode} />
      ) : (
        <TodoShow setIsEditMode={setIsEditMode} />
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
