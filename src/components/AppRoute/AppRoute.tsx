import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from '../../pages/Auth/Auth';
import Error from '../../pages/Error/Error';
import Home from '../../pages/Home/Home';
import Private from '../../pages/Private/Private';
// это пример как у меня было

const AppRoute = () => {
  const auth = true;
  return (
    <Routes>
      <Route path={'/auth'} element={<Auth />} />
      <Route path={'/error'} element={<Error />} />
      <Route path={'/'} element={<Home />} />
        {
          auth
            ?
            <>
            <Route path={'/private'} element={<Private />} />
            <Route path='*' element={<Navigate replace to={'/error'} />} />
            </>
            : <Route path='*' element={<Navigate replace to={'/auth'} />} />
        }
  </Routes>);
};

export default AppRoute;
