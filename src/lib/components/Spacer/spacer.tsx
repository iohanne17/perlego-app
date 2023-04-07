import React from 'react';
import {StyleProp, ViewStyle, View} from 'react-native';

interface Props {
  styles?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
}

export const Spacer = ({styles = {}, width, height, ...props}: Props) => {
  return <View style={[styles, {width, height}]} {...props} />;
};
