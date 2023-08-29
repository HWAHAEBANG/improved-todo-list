import { useState } from 'react';
import type { ChangeEventHandler /* , FormEventHandler */ } from 'react';

const TodoInput = () => {
  const [intputValue, setInputValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    alert('추가');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={intputValue}
        onChange={handleChange}
        placeholder="할 일을 입력해주세요."
      />
      <button>추가</button>
    </form>
  );
};

export default TodoInput;
