import React, { JSX } from 'react';
import { getToken } from '../utils/localStorage';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  if (!getToken()) return <Navigate to="/signin" />;

  return children;
};

export default ProtectedRoute;
