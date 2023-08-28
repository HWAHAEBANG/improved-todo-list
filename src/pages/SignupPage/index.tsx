import * as Styled from '../SigninPage/styled';

const SignupPage = () => {
  const handleSubmit = () => {
    alert('회원가입');
  };

  return (
    <Styled.AuthContainer>
      <Styled.AuthInner>
        <Styled.AuthBox onSubmit={handleSubmit}>
          <Styled.StyledInput type="text" placeholder="아이디" />
          <Styled.StyledInput type="password" placeholder="비밀번호" />
          <Styled.StyledButton>회원가입</Styled.StyledButton>
        </Styled.AuthBox>
      </Styled.AuthInner>
    </Styled.AuthContainer>
  );
};

export default SignupPage;
