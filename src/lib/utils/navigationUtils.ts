import {NavigationContainerRef} from '@react-navigation/native';
import React from 'react';

import {AllRoutes} from '../../navigation/routes';
import {AllRoutesParams} from '../../navigation/types';

export const navigationRef =
  React.createRef<NavigationContainerRef<AllRoutesParams>>();
export const isReadyRef = React.createRef();

export const navigate = (name: AllRoutes, params?: any) => {
  navigationRef.current?.navigate(name as never, params as never);
};

export const navRef = navigationRef.current;
