import { FC } from 'react';
import { styled } from 'styled-components';

interface Props {
  setIsEditMode: (x: boolean) => void;
}

const TodoShow: FC<Props> = ({ setIsEditMode }) => {
  const handleDelete = () => {
    alert('삭제');
  };

  return (
    <StyledForm>
      <StyledParagraph>투두내용</StyledParagraph>
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
