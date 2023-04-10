import * as React from 'react';
import {View, StyleSheet, Image, GestureResponderEvent} from 'react-native';
import {
  Text,
  colors,
  Layout,
  Theme,
  Carousel,
  RenderItem,
  openWebView,
} from '../../lib';
import {ArrivalProps, books} from '../../mockData';
import {LibraryRoutesParams} from '../../navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommonRoutes} from '../../navigation/routes';

interface Props extends NativeStackScreenProps<LibraryRoutesParams> {}

export const LibraryScreen = ({navigation}: Props) => {
  const openBook = (e: GestureResponderEvent, item: ArrivalProps) => {
    navigation.navigate(CommonRoutes.BOOK_DETAIL, {...item});
  };

  return (
    <Layout style={s.layout}>
      <View style={s.container}>
        <View style={s.textStyleContainer}>
          <Text title_4 style={s.textStyle}>
            {'YOUR LIBRARY'}
          </Text>
        </View>
        <View style={s.section}>
          <Carousel
            contentContainerStyle={s.content}
            numColumns={2}
            data={books}
            renderItem={props => (
              <RenderItem
                itemData={props}
                onPress={openBook}
                renderStyle={s.renderItem}
              />
            )}
          />
        </View>
      </View>
    </Layout>
  );
};

const s = StyleSheet.create({
  layout: {
    paddingHorizontal: -16,
  },
  content: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  container: {
    marginTop: Theme.sizes.v4 + Theme.sizes.v4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
  textStyleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.inverseBlack80,
    borderRadius: Theme.sizes.r4,
    padding: Theme.sizes.h4,
  },
  section: {
    marginTop: Theme.sizes.v4,
  },
  renderItem: {
    borderRadius: Theme.sizes.r2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 2,
  },
});
