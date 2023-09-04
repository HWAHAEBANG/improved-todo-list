import { ChangeEventHandler, FC, FormEvent, useState } from 'react';
import { styled } from 'styled-components';
import { Todo } from '../../types/todo';
import { todo as todoApi } from '../../apis/todo';

interface Props {
  setIsEditMode: (x: boolean) => void;
  todo: Todo;
  setTodo: (targetId: number, newTodo: Todo) => void;
}

const TodoModify: FC<Props> = ({ setIsEditMode, todo, setTodo }) => {
  const [inputValue, setInputValue] = useState(todo.todo);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoApi
      .updateTodo(todo.id, inputValue, todo.isCompleted)
      .then(reponse => {
        const updateTodo = reponse.data;
        setTodo(todo.id, updateTodo);
        setIsEditMode(false);
      })
      .catch(console.error);
  };

  const handleCancel = () => {
    setInputValue(todo.todo);
    setIsEditMode(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="할 일을 입력해주세요."
      />
      <div>
        <StyledButton type="submit">제출</StyledButton>
        <StyledButton type="button" onClick={handleCancel}>
          취소
        </StyledButton>
      </div>
    </StyledForm>
  );
};

export default TodoModify;

const StyledForm = styled.form`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  background-color: #f4f4f4;
  border: none;
  border-radius: 5px;
  outline: none;
  height: 38px;
  width: 800px;
  margin: 0;
  padding-left: 20px;
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
