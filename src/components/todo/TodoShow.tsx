import { FC, useContext } from 'react';
import { styled } from 'styled-components';
import { Todo } from '../../types/todo';
import { todo as todoApi } from '../../apis/todo';
import { todosContext } from '../../contexts/todosContext';

interface Props {
  setIsEditMode: (x: boolean) => void;
  todo: Todo;
}

const TodoShow: FC<Props> = ({ setIsEditMode, todo }) => {
  const { todos, setTodos } = useContext(todosContext);

  const handleDelete = () => {
    todoApi
      .deleteTodo(todo.id)
      .then(() => {
        const deletedTodos = todos.filter(target => todo.id !== target.id);
        setTodos(deletedTodos);
      })
      .catch();
  };

  return (
    <StyledForm>
      <StyledParagraph>{todo.todo}</StyledParagraph>
      <div>
        <StyledButton type="button" onClick={() => setIsEditMode(true)}>
          수정
        </StyledButton>
        <StyledButton type="button" onClick={handleDelete}>
          삭제
        </StyledButton>
      </div>
    </StyledForm>
  );
};

export default TodoShow;

const StyledForm = styled.form`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const StyledParagraph = styled.p`
  height: 40px;
  margin: 0;
  line-height: 40px;
`;

const StyledButton = styled.button`
  background-color: #03c75a;
  border-radius: 5px;
  border: none;
  padding: 5px 20px;
  margin: 0 5px;
  height: 40px;
  color: white;
`;
