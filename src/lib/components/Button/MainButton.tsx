import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import {colors} from '../../theme/colors';
import {Theme} from '../../theme/theme';
import {Text} from '../Text/Text';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export enum MB_SCHEME {
  main,
}

export enum BUTTON_SIZE {
  small,
  medium,
  large,
}

export interface MainButtonProps extends TouchableOpacityProps {
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  scheme?: MB_SCHEME;
  sizeScheme?: BUTTON_SIZE;
  onPress: () => any;
  style?: StyleProp<ViewStyle>;
  type: 'icon' | 'text';
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
}
export const Button = ({
  disabled,
  loading,
  title,
  onPress,
  style,
  type = 'text',
  scheme = MB_SCHEME.main,
  sizeScheme = BUTTON_SIZE.small,
  iconColor = colors.primary,
  iconName = 'home',
  iconSize,
  ...touchableProps
}: MainButtonProps) => {
  const disabledStyle = disabled ? 'disabled' : 'enabled';

  const contentType =
    type === 'text' ? (
      <Text text style={titleStyle[scheme]}>
        {title}
      </Text>
    ) : (
      <MIcon size={iconSize} name={iconName} color={iconColor} />
    );

  const content = loading ? (
    <View style={s.loaderWrapper}>
      <ActivityIndicator size="small" color={colors.primary} />
    </View>
  ) : (
    contentType
  );

  return (
    <Pressable
      onPress={onPress}
      style={[
        s.main,
        buttonSizeStyle[sizeScheme],
        buttonStyle[scheme][disabledStyle],
        style,
      ]}>
      {content}
    </Pressable>
  );
};

const s = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Theme.sizes.r4,
    backgroundColor: colors.inverseBlack40,
  },
  loaderWrapper: {
    height: 24,
    justifyContent: 'center',
  },
});

const buttonSizeStyle = {
  [BUTTON_SIZE.small]: {
    width: 50,
    height: 50,
  },
  [BUTTON_SIZE.medium]: {
    width: 150,
  },
  [BUTTON_SIZE.large]: {
    paddingVertical: Theme.sizes.v5,
    paddingHorizontal: Theme.sizes.h5,
  },
};

const buttonStyle = {
  [MB_SCHEME.main]: {
    enabled: {
      borderRadius: Theme.sizes.r4,
      opacity: 1,
    },
    disabled: {
      borderRadius: Theme.sizes.r4,
      opacity: 0.6,
    },
  },
};

const titleStyle = {
  [MB_SCHEME.main]: {
    color: colors.primary,
  },
};
