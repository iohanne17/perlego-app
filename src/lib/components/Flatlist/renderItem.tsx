import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {Text, TextColor} from '../Text/Text';
import {Spacer} from '../Spacer';
import {Theme} from '../../theme';
import {ArrivalProps} from '../../../mockData';

interface LibraryProps<T> {
  onPress: ((event: GestureResponderEvent, item: T) => void) | null | undefined;
  itemData: ListRenderItemInfo<T>;
  renderStyle?: StyleProp<ViewStyle>;
}

export const RenderItem = ({
  itemData,
  onPress,
  renderStyle,
}: LibraryProps<ArrivalProps>) => {
  const {item} = itemData;
  return (
    <Pressable
      style={[s.renderItem, renderStyle]}
      onPress={e => onPress && onPress(e, item)}>
      <Image
        source={{uri: item?.image}}
        style={s.renderImage}
        resizeMode={'cover'}
      />
      <Spacer height={8} />
      <View style={s.padding}>
        <Text caption color={TextColor.black}>
          {item.name}
        </Text>
        <Text caption_2 color={TextColor.fade}>
          {item?.author}
        </Text>
      </View>
    </Pressable>
  );
};

const s = StyleSheet.create({
  renderItem: {
    borderRadius: Theme.sizes.r2,
    elevation: 2,
    zIndex: 90,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 180,
    paddingVertical: Theme.sizes.v3,
  },
  renderImage: {
    height: 120,
    width: 160,
    alignSelf: 'center',
  },
  padding: {
    paddingHorizontal: 8,
  },
});
