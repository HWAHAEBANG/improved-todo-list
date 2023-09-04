import * as Styled from './styled';
import auth from '../../apis/auth';
import { ChangeEvent, FormEvent, useState } from 'react';
import { setToken } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({ id: '', password: '' });
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth
      .signin(inputValue.id, inputValue.password)
      .then(response => {
        setToken(response.data.access_token);
        navigate('/todo');
      })
      .catch(error => error.log(error));
  };

  return (
    <Styled.AuthContainer>
      <Styled.AuthInner>
        <Styled.AuthBox onSubmit={handleSubmit}>
          <Styled.StyledInput
            type="text"
            name="id"
            placeholder="아이디"
            onChange={changeInputValue}
          />
          <Styled.StyledInput
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={changeInputValue}
          />
          <Styled.StyledButton>로그인</Styled.StyledButton>
        </Styled.AuthBox>
      </Styled.AuthInner>
    </Styled.AuthContainer>
  );
};

export default SigninPage;
