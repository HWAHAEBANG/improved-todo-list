// import {AxiosPromise} from 'axios';
import { instance } from '../configs/axios';
// import type { todoResponse, todosResponse } from '../types/todo';

export const todo = {
  creatTodo(todo: string) {
    return instance({
      url: '/todos',
      method: 'post',
      data: {
        todo,
      },
    });
  },
  readTodo() {
    //:AxiosPromise<>
    return instance({
      url: '/todos',
      method: 'get',
    });
  },
  updateTodo(id: number, todo: string, isCompleted: boolean) {
    //:AxiosPromise<>
    return instance({
      url: `/todos/${id}`,
      method: 'put',
      data: {
        todo,
        isCompleted,
      },
    });
  },
  deleteTodo(id: number) {
    return instance({
      url: `todos/${id}`,
      method: 'delete',
    });
  },
};
