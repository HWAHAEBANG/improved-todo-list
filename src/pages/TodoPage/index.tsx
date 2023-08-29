import { styled } from 'styled-components';
import TodoInput from '../../components/todo/TodoInput';
import TodoListSection from '../../components/todo/TodoListSection';

const TodoPage = () => {
  return (
    <TodoContainer>
      <TodoInner>
        <TodoInput />
        <TodoListSection />
      </TodoInner>
    </TodoContainer>
  );
};

export default TodoPage;

const TodoContainer = styled.main`
  background-color: red;
`;

const TodoInner = styled.section`
  background-color: yellow;
  width: 1080px;
  margin: 0 auto;
  padding-top: 50px;
  box-sizing: border-box;
  min-height: 100vh;
  /* display: flex; */
  /* flex-direction: column; */
`;
