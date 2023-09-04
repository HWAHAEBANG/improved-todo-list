import { Dispatch, SetStateAction, createContext } from 'react';
import { Todos } from '../types/todo';

interface TodosContext {
  todos: Todos;
  setTodos: Dispatch<SetStateAction<Todos>>; // ?
}

export const todosContext = createContext<TodosContext>({
  todos: [],
  setTodos: () => null, // ?
});

export const TodosPrivider = todosContext.Provider;
