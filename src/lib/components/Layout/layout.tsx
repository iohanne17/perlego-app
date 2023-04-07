import React, {Fragment} from 'react';
import {StyleProp, ViewStyle, StyleSheet} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {Theme, colors} from '../../theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  edges?: readonly Edge[] | undefined;
}

export const Layout = ({style = {}, children, edges}: Props) => {
  const layoutStyle = StyleSheet.flatten([s.main, style]);

  return (
    <SafeAreaView style={layoutStyle} edges={edges}>
      <Fragment>{children}</Fragment>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: Theme.sizes.h4,
    backgroundColor: colors.background,
  },
});
