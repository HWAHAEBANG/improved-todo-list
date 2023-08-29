import { styled } from 'styled-components';
import TodoItem from './TodoItem';

const TodoListSection = () => {
  return (
    <TodoListWrap>
      <TodoItem />
    </TodoListWrap>
  );
};

export default TodoListSection;

const TodoListWrap = styled.section`
  /* background-color: blue; */
`;
