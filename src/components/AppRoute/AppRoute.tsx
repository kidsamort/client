import React from 'react';
import { Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const isAuth = false;

  return isAuth ? (
    <Routes>
      <PublicRoute/>
      <PrivateRoute/>
      <Navigate to={'/error'} />
    </Routes>
  ) : (
    <Routes>
      <PublicRoute/>
      <Navigate to={'/auth'} />
    </Routes>
  );
};

export default AppRouter;
