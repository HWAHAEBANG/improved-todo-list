import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { styled } from 'styled-components';
import { todo } from '../../apis/todo';
import { todosContext } from '../../contexts/todosContext';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { setTodos } = useContext(todosContext);

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todo
      .creatTodo(inputValue)
      .then(response => {
        const newTodo = response.data;
        setTodos(prevState => [...prevState, newTodo]);
        setInputValue('');
      })
      .catch(error => {
        if (error.response.status === 400) {
          alert('입력이 비어있습니다.');
        }
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={changeInputValue}
        placeholder="할 일을 입력해주세요."
      />
      <StyledButton type="submit">추가</StyledButton>
    </StyledForm>
  );
};

export default TodoInput;

const StyledForm = styled.form`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 0;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  outline: none;
  height: 38px;
  width: 935px;
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
  cursor: pointer;
`;
