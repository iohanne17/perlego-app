import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Fragment} from 'react';
import {BookScreen} from '../screens/bookScreen';

import {CommonRoutes} from './routes';
import {CommonRoutesParams} from './types';

const Stack = createNativeStackNavigator<CommonRoutesParams>();

export const CommonScreens = (
  <Fragment>
    <Stack.Screen
      name={CommonRoutes.WEB_VIEW}
      component={BookScreen}
      options={{headerShown: true}}
    />
  </Fragment>
);
