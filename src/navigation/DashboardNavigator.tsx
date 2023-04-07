import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {HomeScreen as DashboardScreen} from '../screens/homeScreen';

import {CommonScreens} from './CommonRoutes';
import {DashboardRoutes} from './routes';
import {DashboardRoutesParams} from './types';

const Stack = createNativeStackNavigator<DashboardRoutesParams>();

const options = {headerShown: false};

export const DashboardNavigator = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={options}
      initialRouteName={DashboardRoutes.MAIN}>
      <Stack.Screen name={DashboardRoutes.MAIN} component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
