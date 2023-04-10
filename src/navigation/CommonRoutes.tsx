import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {Fragment} from 'react';
import {BookScreen} from '../screens/bookScreen';
import {DetailScreen} from '../screens/detailScreen';

import {CommonRoutes} from './routes';
import {CommonRoutesParams} from './types';

const Stack = createNativeStackNavigator<CommonRoutesParams>();
const config: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
};

export const CommonScreens = (
  <Fragment>
    <Stack.Screen
      name={CommonRoutes.WEB_VIEW}
      component={BookScreen}
      options={config}
    />
    <Stack.Screen
      name={CommonRoutes.BOOK_DETAIL}
      component={DetailScreen}
      options={config}
    />
  </Fragment>
);
