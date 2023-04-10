import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  GestureResponderEvent,
  ScrollView,
} from 'react-native';
import {
  Text,
  colors,
  Layout,
  Theme,
  Carousel,
  RenderItem,
  openWebView,
  HeaderLayout,
  TextColor,
  Button,
  Spacer,
} from '../../lib';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommonRoutesParams} from '../../navigation/types';
import {CommonRoutes} from '../../navigation/routes';
import {ArrivalProps} from '../../mockData';

type TProps = NativeStackScreenProps<
  CommonRoutesParams,
  CommonRoutes.BOOK_DETAIL
>;

const IMG_SIZE = 250;

export const DetailScreen = ({route: {params}}: TProps) => {
  const {name, author, summary, html, keyArray} = params;

  const openBook = (item: ArrivalProps) => {
    openWebView({
      html,
      keyArray,
      goBackTitle: name,
    });
  };

  return (
    <HeaderLayout innerStyle={s.flex} goBackTitle={name} headerTitle={''}>
      <View style={s.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={s.scroll}>
          <Image
            source={{uri: 'https://source.unsplash.com/user/c_v_r'}}
            style={s.image}
            resizeMode={'cover'}
          />
          <Text title_4>{name}</Text>
          <Text text color={TextColor.black}>
            {author}
          </Text>
          <Text caption_2 color={TextColor.black} style={s.summary}>
            {summary}
          </Text>
          <Spacer height={80} />
        </ScrollView>
      </View>
      <Button
        title={'Read Book'}
        onPress={() => openBook({...params})}
        type="text"
        textStyle={s.text}
        style={s.button}
      />
    </HeaderLayout>
  );
};

const s = StyleSheet.create({
  flex: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.inverseWhite10,
  },
  container: {
    marginTop: Theme.sizes.v2,
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
  image: {
    height: IMG_SIZE,
    width: IMG_SIZE + 50,
    elevation: Theme.elevation.el4,
    borderRadius: 25,
    marginBottom: Theme.sizes.v5,
  },
  summary: {
    marginTop: Theme.sizes.v5,
  },
  text: {
    color: colors.inverseWhite100,
  },
});
