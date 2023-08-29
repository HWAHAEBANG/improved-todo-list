import TodoCheckbox from './TodoCheckbox';
import TodoModify from './TodoModify';
import TodoShow from './TodoShow';

const TodoItem = () => {
  return (
    <div>
      <TodoCheckbox />
      <TodoShow />
      <TodoModify />
    </div>
  );
};

export default TodoItem;
