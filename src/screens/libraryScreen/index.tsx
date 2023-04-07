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
import {ArrivalProps, arrivals, books} from '../../mockData';
import {LibraryRoutesParams} from '../../navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {html2} from '../../mockData/html';

interface Props extends NativeStackScreenProps<LibraryRoutesParams> {}

export const LibraryScreen = ({}: Props) => {
  const openBook = (e: GestureResponderEvent, item: ArrivalProps) => {
    openWebView({
      html: item?.html,
      keyArray: item?.keyArray,
      goBackTitle: item?.name,
    });
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
    elevation: 2,
    zIndex: 90,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 2,
  },
});
