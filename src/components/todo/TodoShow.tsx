import { FC } from 'react';

interface Props {
  isEditMode: () => {};
}

const TodoShow: FC<Props> = ({ isEditMode }) => {
  const handleDelete = () => {
    alert('삭제');
  };

  return (
    <form>
      <p>투두내용</p>
      <button type="button" onClick={isEditMode}>
        수정
      </button>
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
    </form>
  );
};

export default TodoShow;
