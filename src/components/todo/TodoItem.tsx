import { useState } from 'react';
import TodoCheckbox from './TodoCheckbox';
import TodoModify from './TodoModify';
import TodoShow from './TodoShow';

const TodoItem = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div>
      <TodoCheckbox />
      {isEditMode ? (
        <TodoModify setIsEditMode={setIsEditMode} />
      ) : (
        <TodoShow setIsEditMode={setIsEditMode} />
      )}
    </div>
  );
};

export default TodoItem;
