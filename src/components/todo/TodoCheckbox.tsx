import { FC } from 'react';
import { Todo } from '../../types/todo';
import { todo as todoApi } from '../../apis/todo';

interface Props {
  todo: Todo;
  setTodo: (targetId: number, newTodo: Todo) => void;
}

const TodoCheckbox: FC<Props> = ({ todo, setTodo }) => {
  const handleCheck = () => {
    todoApi
      .updateTodo(todo.id, todo.todo, !todo.isCompleted)
      .then(response => {
        const updatedData = response.data;
        setTodo(todo.id, updatedData);
      })
      .catch(console.error);
  };

  return <input type="checkbox" checked={todo.isCompleted} onChange={handleCheck} />;
};

export default TodoCheckbox;
