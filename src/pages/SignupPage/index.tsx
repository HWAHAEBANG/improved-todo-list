import { ChangeEvent, FormEvent, useState } from 'react';
import * as Styled from '../SigninPage/styled';
import {auth} from '../../apis/auth';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({ id: '', password: '' });

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth
      .signup(inputValue.id, inputValue.password)
      .then(() => {
        alert('회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다.');
        navigate('/signin');
      })
      .catch(() => alert('이미 존재하는 아이디 입니다.'));
  };

  return (
    <Styled.AuthContainer>
      <Styled.AuthInner>
        <Styled.AuthBox onSubmit={handleSubmit}>
          <Styled.StyledInput
            type="text"
            name="id"
            value={inputValue.id}
            placeholder="아이디"
            onChange={changeInputValue}
          />
          <Styled.StyledInput
            type="password"
            name="password"
            value={inputValue.password}
            placeholder="비밀번호"
            onChange={changeInputValue}
          />
          <Styled.StyledButton>회원가입</Styled.StyledButton>
        </Styled.AuthBox>
      </Styled.AuthInner>
    </Styled.AuthContainer>
  );
};

export default SignupPage;
