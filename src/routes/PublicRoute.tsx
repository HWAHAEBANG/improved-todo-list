import React, { JSX } from 'react';
import { getToken } from '../utils/localStorage';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const PublicRoute: React.FC<Props> = ({ children }) => {

  if(getToken()) return <Navigate to='/todo'/>;

  return children;
};

export default PublicRoute;
