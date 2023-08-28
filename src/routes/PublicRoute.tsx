import React, { JSX } from 'react';

interface Props {
  children: JSX.Element;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  return children;
};

export default PublicRoute;
