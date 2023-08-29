import * as Styled from './styled';

const LandingPage = () => {
  return (
    <Styled.LandingContainer>
      <Styled.LadingInner>
        <Styled.LandingBox>
          <Styled.StyledParagraph className="xl">Welcome!</Styled.StyledParagraph>
          <Styled.StyledParagraph className="md">
            Task Manager에 오신것을 환영합니다.
            <br />
            To-Do List로 더 생산적인 하루를 시작해보세요.
          </Styled.StyledParagraph>
          <Styled.StyledLink to="/todo">바로 만나보기</Styled.StyledLink>
        </Styled.LandingBox>
      </Styled.LadingInner>
    </Styled.LandingContainer>
  );
};

export default LandingPage;
