import React, {useLayoutEffect} from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {Theme} from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  innerStyle?: StyleProp<ViewStyle>;
  headerTitle?: string;
  goBackTitle?: string;
  goBackIcon?: string;
  keyboardAvoid?: boolean;
  keyboardVerticalOffset?: number;
  withBottomPanel?: boolean;
  customRightButton?: React.ReactNode;
  goBack?: () => void;
  children: React.ReactNode;
}

export const HeaderLayout: React.FC<Props> = ({
  innerStyle,
  children,
  headerTitle,
}) => {
  const navigation = useNavigation();
  const handleBack = () => {
    if (navigation?.canGoBack()) {
      navigation?.goBack();
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colors.inverseWhite100,
      },
      headerTitle,
      headerLeft: () => {
        return (
          <Pressable
            onPress={handleBack}
            style={{paddingHorizontal: Theme.sizes.h1}}>
            <Ionicons
              name={'arrow-back'}
              size={Theme.sizes.icon3}
              color={colors.primary}
            />
          </Pressable>
        );
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={s.safeArea}>
      <View style={innerStyle}>{children}</View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.inverseWhite100,
    paddingTop: Platform.select({
      ios: undefined,
      default: 50,
    }),
  },
});
