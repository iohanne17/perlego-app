import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {LibraryScreen} from '../screens/libraryScreen';

import {CommonScreens} from './CommonRoutes';
import {LibraryRoutes} from './routes';
import {LibraryRoutesParams} from './types';

const Stack = createNativeStackNavigator<LibraryRoutesParams>();

const options = {headerShown: false};

const LibraryNavigator = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={options}
      initialRouteName={LibraryRoutes.LIBRARY_MAIN}>
      <Stack.Screen
        name={LibraryRoutes.LIBRARY_MAIN}
        component={LibraryScreen}
      />
    </Stack.Navigator>
  );
};

export default LibraryNavigator;
