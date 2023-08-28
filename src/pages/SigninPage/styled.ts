import { styled } from 'styled-components';

export const AuthContainer = styled.main`
  min-height: 100vh;
  margin-top: 50px;
`;

export const AuthInner = styled.section`
  background-color: white;
  width: 1080px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthBox = styled.form`
  background-color: #03c75a;
  width: 500px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.42);
`;

export const StyledInput = styled.input`
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  font-size: 20px;
  box-sizing: border-box;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.42);
`;

export const StyledButton = styled.button`
  background-color: #e9e9e9;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  font-size: 15px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.42);
  margin-top: 20px;
  cursor: pointer;
`;
