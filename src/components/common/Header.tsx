import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { deleteToken, getToken } from '../../utils/localStorage';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsSignedIn(!!getToken());
  }, [location]);

  const logout = () => {
    deleteToken();
    navigate('/signin');
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <LeftSection>TODO MANAGER</LeftSection>
        <MiddleSection>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/todo">TODO-LIST</NavLink>
        </MiddleSection>

        {isSignedIn ? (
          <RightSection>
            <StyledButton onClick={logout}>LOG OUT</StyledButton>
          </RightSection>
        ) : (
          <RightSection>
            <NavLink to="/signin">SIGN IN</NavLink>
            <NavLink to="/signup">SIGN UP</NavLink>
          </RightSection>
        )}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.main`
  background-color: #03c75a;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;

const HeaderInner = styled.header`
  width: 1080px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 50px;
  color: white;
`;

const LeftSection = styled.div`
  font-size: 20px;
`;

const MiddleSection = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 15px;
  color: white;
`;

const RightSection = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledButton = styled.div`
  cursor: pointer;
`;
