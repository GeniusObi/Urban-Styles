import { useUserContext } from '@/context/userContext';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }: React.PropsWithChildren) => {
  const { getLocalStorageUser } = useUserContext();
  const user = getLocalStorageUser();
  const navigate = useNavigate();
  if (!user) {
    navigate('/login');
  }
  return <main>{children}</main>;
};

export default PrivateRoute;
