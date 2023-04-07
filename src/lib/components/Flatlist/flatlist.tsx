import React, {useCallback, useMemo, useRef} from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface CarouselProps<T> extends FlatListProps<T> {
  data: T[];
  horizontal?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  renderItem: ListRenderItem<T> | null | undefined;
}

export function Carousel<T>({
  horizontal = false,
  contentContainerStyle,
  renderItem,
  ...props
}: CarouselProps<T>) {
  const refCarousel = useRef<FlatList>(null);
  const keyExtractor = useCallback(
    (item: T, index: number) => `${index}-${item?.id}-`,
    [],
  );

  return (
    <FlatList
      renderItem={renderItem}
      ref={refCarousel}
      horizontal={horizontal}
      contentContainerStyle={contentContainerStyle}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      keyExtractor={keyExtractor}
      {...props}
    />
  );
}

export default Carousel;
