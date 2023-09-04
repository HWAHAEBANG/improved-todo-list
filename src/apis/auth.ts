import { instance } from '../configs/axios';
import { AxiosPromise } from 'axios';
import { SignInResponse } from '../types/auth';

export default {
  signin(email: string, password: string): AxiosPromise<SignInResponse> {
    return instance({
      url: '/auth/signin',
      method: 'post',
      data: {
        email,
        password,
      },
    });
  },
  signup(email: string, password: string) {
    return instance({
      url: '/auth/signup',
      method: 'post',
      data: {
        email,
        password,
      },
    });
  },
};
