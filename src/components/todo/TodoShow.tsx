import { FC } from 'react';

interface Props {
  setIsEditMode: (x: boolean) => void;
}

const TodoShow: FC<Props> = ({ setIsEditMode }) => {
  const handleDelete = () => {
    alert('삭제');
  };

  return (
    <form>
      <p>투두내용</p>
      <button type="button" onClick={() => setIsEditMode(true)}>
        수정
      </button>
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
    </form>
  );
};

export default TodoShow;
