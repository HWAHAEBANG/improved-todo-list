import axios from 'axios';
import { getToken } from '../utils/localStorage';

export const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  timeout: 4000,
});

// Axios 인스턴스의 interceptors를 이용하여 요청을 인터셉트하고 수정하는 역할을 합니다.
// 여기서는 request 인터셉터를 사용하여 모든 요청 전에 실행될 코드를 정의합니다.
instance.interceptors.request.use(
  config => {
    //config: Axios 요청 설정 객체
    const token = getToken();

    // if문을 추가했기 때문에 토큰이 필요없는 요청에도 가능
    if (token) config.headers.Authorization = `Bearer ${token}`;
    //요청의 Authorization 헤더에 JWT 토큰을 추가하여 인증을 수행합니다.
    return config; // 설정이 적용된 config 객체를 반환하여 원래의 요청이 헤더 설정과 함께 전달될 수 있도록
  },
  error => {
    console.error(error);
  },
);
