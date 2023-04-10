import {OpenWebViewProps} from '../lib';
import {ArrivalProps} from '../mockData';

import {
  CommonRoutes,
  CoreRoutes,
  MainRoutes,
  DashboardRoutes,
  LibraryRoutes,
} from './routes';

export type CoreRoutesParams = CommonRoutesParams & {
  [CoreRoutes.HOME]: undefined;
};

export type MainRoutesParams = {
  [MainRoutes.DASHBOARD]: undefined;
  [MainRoutes.LIBRARY]: undefined;
};

export type CommonRoutesParams = {
  [CommonRoutes.WEB_VIEW]: OpenWebViewProps;
  [CommonRoutes.BOOK_DETAIL]: ArrivalProps;
};

export type DashboardRoutesParams = MainRoutesParams &
  CommonRoutesParams & {
    [DashboardRoutes.MAIN]: undefined;
  };

export type LibraryRoutesParams = MainRoutesParams &
  CommonRoutesParams & {
    [LibraryRoutes.LIBRARY_MAIN]: undefined;
  };

export type AllRoutesParams =
  | CoreRoutesParams
  | MainRoutesParams
  | DashboardRoutesParams
  | LibraryRoutesParams;
