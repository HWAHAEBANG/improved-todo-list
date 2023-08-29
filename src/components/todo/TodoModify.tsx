import { ChangeEventHandler, useState } from 'react';

const TodoModify = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    alert('제출');
  };

  const handleCancel = () => {
    alert('삭제');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="할 일을 입력해주세요."
      />
      <button type="submit">제출</button>
      <button type="button" onClick={handleCancel}>
        취소
      </button>
    </form>
  );
};

export default TodoModify;
