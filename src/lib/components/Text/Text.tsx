import React from 'react';
import {
  Text as BaseText,
  Platform,
  StyleSheet,
  TextProps as RNTextProps,
} from 'react-native';

import {colors} from '../../theme/colors';

export enum TextVariant {
  title = 'title',
  title_2 = 'title_2',
  title_4 = 'title_4',
  title_5 = 'title_5',
  text = 'text',
  text_semibold = 'text_semibold',
  caption = 'caption',
  caption_2 = 'caption_2',
}
const textVariants = Object.keys(TextVariant);

export enum TextColor {
  main = 'colorMain',
  primary = 'primary',
  error = 'error',
  black = 'black',
  white = 'white',
  fade = 'fade',
}

export type TextProps = RNTextProps & {
  color?: TextColor;
  children?: any;
} & {
  [str in TextVariant]?: boolean;
};

export const Text = React.forwardRef<
  BaseText,
  React.PropsWithChildren<TextProps>
>((props, ref): JSX.Element => {
  const {children, color = TextColor.main, style, ...rest} = props;

  const variant: TextVariant =
    (Object.keys(rest).find(
      p => textVariants.includes(p) && props[p as TextVariant],
    ) as TextVariant) || TextVariant.text_semibold;

  const allStyles = StyleSheet.flatten([
    TextStyles.base,
    TextStyles[variant],
    TextStyles[color],
    style,
  ]);

  return (
    <BaseText ref={ref} style={allStyles} {...rest}>
      {children}
    </BaseText>
  );
});

Text.defaultProps = {
  color: TextColor.main,
};

/* eslint-disable react-native/no-unused-styles */
export const TextStyles = StyleSheet.create({
  base: {
    // Fix for android nested fonts https://github.com/facebook/react-native/issues/20398
    ...Platform.select({
      ios: {},
      android: {
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
    }),
    letterSpacing: -0.22,
  },
  [TextVariant.title]: {
    fontFamily: 'SchibstedGrotesk-Black',
    fontSize: 18,
    lineHeight: 20,
  },
  [TextVariant.title_2]: {
    fontFamily: 'SchibstedGrotesk-Black',
    fontSize: 40,
    lineHeight: 42,
  },
  [TextVariant.title_4]: {
    fontFamily: 'SchibstedGrotesk-Black',
    fontSize: 22,
    lineHeight: 32,
  },
  [TextVariant.title_5]: {
    fontFamily: 'SchibstedGrotesk-Black',
    fontSize: 17,
    lineHeight: 28,
  },
  [TextVariant.text]: {
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 17,
    lineHeight: 24,
  },
  [TextVariant.text_semibold]: {
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 17,
    lineHeight: 24,
  },
  [TextVariant.caption]: {
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 16,
    lineHeight: 24,
  },
  [TextVariant.caption_2]: {
    fontFamily: 'SchibstedGrotesk-Medium',
    fontSize: 14,
    lineHeight: 16,
  },
  [TextColor.primary]: {
    color: colors.primary,
  },
  [TextColor.main]: {
    color: colors.primary,
  },
  [TextColor.error]: {
    color: colors.error,
  },
  [TextColor.black]: {
    color: colors.inverseBlack100,
  },
  [TextColor.white]: {
    color: colors.inverseWhite100,
  },
  [TextColor.fade]: {
    color: colors.inverseBlack60,
  },
});
