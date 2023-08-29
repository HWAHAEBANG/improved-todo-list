import TodoInput from '../../components/todo/TodoInput';
import TodoListSection from '../../components/todo/TodoListSection';
import * as Styled from './styled';

const TodoPage = () => {
  return (
    <Styled.TodoContainer>
      <Styled.TodoInner>
        <TodoInput />
        <TodoListSection />
      </Styled.TodoInner>
    </Styled.TodoContainer>
  );
};

export default TodoPage;
