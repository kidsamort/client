import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../../router';

const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth);

  return isAuth ? (
    <Switch>
      {publicRoutes.map((route) => (
        <Route 
        path={route.path} 
        exact={route.exact} 
        component={route.element} 
        key={route.path} />
      ))}
      {privateRoutes.map((route) => (
        <Route 
        path={route.path} 
        exact={route.exact} 
        component={route.element} 
        key={route.path} />
      ))}
      <Redirect to={RouteNames.ERROR} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route 
        path={route.path} 
        exact={route.exact} 
        component={route.element} 
        key={route.path} />
      ))}
      <Redirect to={RouteNames.AUTH} />
    </Switch>
  );
};

export default AppRouter;
