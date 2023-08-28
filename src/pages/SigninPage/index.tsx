import * as Styled from './styled';

const SigninPage = () => {
  const handleSubmit = () => {
    alert('로그인');
  };

  return (
    <Styled.AuthContainer>
      <Styled.AuthInner>
        <Styled.AuthBox onSubmit={handleSubmit}>
          <Styled.StyledInput type="text" placeholder="아이디" />
          <Styled.StyledInput type="password" placeholder="비밀번호" />
          <Styled.StyledButton>로그인</Styled.StyledButton>
        </Styled.AuthBox>
      </Styled.AuthInner>
    </Styled.AuthContainer>
  );
};

export default SigninPage;
