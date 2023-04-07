import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {colors} from './lib/theme/colors';
import {isReadyRef, navigationRef} from './lib/utils/navigationUtils';
import {MainNavigator} from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const MainApp = () => {
  const onReadyNav = useCallback(() => {
    // @ts-ignore
    isReadyRef.current = true;
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={onReadyNav}
        theme={DefaultTheme}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.transparent}
        />
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainApp;
