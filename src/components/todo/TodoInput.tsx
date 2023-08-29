import { useState } from 'react';
import type { ChangeEventHandler /* , FormEventHandler */ } from 'react';
import { styled } from 'styled-components';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    alert('추가');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleChange}
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
`;
