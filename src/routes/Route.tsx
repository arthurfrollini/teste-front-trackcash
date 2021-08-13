import React from 'react';
import {
  RouteProps as ReactRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../contexts/auth';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export default function Route({
  component: Component,
  isPrivate = false,
  ...rest
}: RouteProps) {
  const { userData } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!userData ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
