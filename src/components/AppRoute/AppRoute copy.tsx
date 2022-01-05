import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';

const AppRoute = () => {
  const auth = true;
  return (
    <>
      <Switch>
        {publicRoutes.map((route) => {

            <Route
              path={route.path}
              component={route.element}
              exact={route.exact}
              key={route.path}
            />

        })}
        {auth ? (
          <>
            {privateRoutes.map((route) => {
     
                <Route
                  path={route.path}
                  component={route.element}
                  exact={route.exact}
                  key={route.path}
                />

            })}
            <Redirect to={'/error'} />
          </>
        ) : (
          <Redirect to={'/auth'} />
        )}
      </Switch>
    </>
  );
};

export default AppRoute;
