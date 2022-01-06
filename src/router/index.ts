import Auth from '../pages/Auth/Auth'
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Private from '../pages/Private/Private';

export interface IRoute {
  path: string;
  element: React.ComponentType;
  exact?: boolean
}

export enum RouteNames {
  AUTH ='/auth',
  PRIVATE ='/private',
  ERROR ='/error',
  HOME ='/',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.AUTH, element: Auth, exact:true },
  { path: RouteNames.ERROR, element: Error, exact:true },
  { path: RouteNames.HOME, element: Home, exact:true },
]
export const privateRoutes: IRoute[] = [
  { path: RouteNames.PRIVATE, element: Private, exact:true },
]