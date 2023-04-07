import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import {ViewStyle} from 'react-native';
import {CommonRoutes, CoreRoutes, MainRoutes} from './routes';
import DashboardNavigator from './DashboardNavigator';
import LibraryNavigator from './LibraryNavigator';
import {CustomTabbarIcon} from './components/CustomTabbarIcon';
import {colors} from '../lib/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoreRoutesParams} from './types';
import {BookScreen} from '../screens/bookScreen';

const Tab = createBottomTabNavigator();

const tabNavigatorScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.inverseBlack100,
};

const Stack = createNativeStackNavigator<CoreRoutesParams>();
const options = {headerShown: false};

const CoreNavigator = () => {
  return (
    <Stack.Navigator screenOptions={options} initialRouteName={CoreRoutes.HOME}>
      <Stack.Screen name={CoreRoutes.HOME} component={MainNavigatorUI} />
      <Stack.Screen
        name={CommonRoutes.WEB_VIEW}
        component={BookScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

const MainNavigatorUI = () => (
  <Tab.Navigator
    screenOptions={tabNavigatorScreenOptions}
    initialRouteName={MainRoutes.DASHBOARD}>
    <Tab.Screen
      name={MainRoutes.DASHBOARD}
      component={DashboardNavigator}
      options={params => ({
        tabBarIcon: ({focused}) => (
          <CustomTabbarIcon
            title={'Dashboard'}
            name={'home'}
            focused={focused}
          />
        ),
        tabBarStyle: isTabStyleVisible(params),
      })}
    />
    <Tab.Screen
      name={MainRoutes.LIBRARY}
      component={LibraryNavigator}
      options={params => ({
        tabBarIcon: ({focused}) => (
          <CustomTabbarIcon title={'Library'} name={'book'} focused={focused} />
        ),
        tabBarStyle: isTabStyleVisible(params),
      })}
    />
  </Tab.Navigator>
);

const isTabStyleVisible = ({
  route,
}: {
  route: Partial<Route<string>>;
}): ViewStyle | undefined => {
  let tabBarVisible: ViewStyle | undefined = undefined;
  const name = getFocusedRouteNameFromRoute(route);

  const screensWithoutBottomPanel: string[] = [CommonRoutes.WEB_VIEW];

  if (name && screensWithoutBottomPanel.includes(name)) {
    tabBarVisible = {display: 'none'};
  }

  return tabBarVisible;
};

export const MainNavigator = () => {
  return <CoreNavigator />;
};
