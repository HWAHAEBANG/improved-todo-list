import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LandingContainer = styled.main`
  background-color: #eeeeee;
`;

export const LadingInner = styled.section`
  width: 1080px;
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 50px;
  box-sizing: border-box;
`;

export const LandingBox = styled.div`
  width: 1080px;
  margin: 100px auto;
  text-align: left;
`;

export const StyledParagraph = styled.p`
  color: #03c75a;

  &.sm {
    font-size: 15px;
  }

  &.md {
    font-size: 25px;
    color: black;
    margin: 50px 0;
  }

  &.lg {
    font-size: 50px;
  }

  &.xl {
    font-size: 100px;
    font-weight: 700;
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  background-color: #03c75a;
  padding: 15px;
  border-radius: 5px;
`;
