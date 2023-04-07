import * as React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {
  Text,
  colors,
  Layout,
  Theme,
  Spacer,
  TextColor,
  Images,
  Carousel,
  RenderItem,
} from '../../lib';
import {arrivals} from '../../mockData/newArrivals';
import {best} from '../../mockData';

export function HomeScreen() {
  return (
    <Layout>
      <View style={s.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.row}>
            <View style={s.titleContainer}>
              <Text text>{`Good Morning`}</Text>
              <Spacer height={Theme.sizes.v1 - 8} />
              <Text title_4 color={TextColor.black}>
                {'Marie Anoinette'}
              </Text>
            </View>
            <Image
              source={Images.dashboardImage}
              style={s.image}
              resizeMode={'contain'}
            />
          </View>
          <View style={s.textStyleContainer}>
            <Text title_4 style={s.textStyle}>
              {'PERLEGO APP'}
            </Text>
          </View>
          <View style={s.section}>
            <Text text_semibold style={s.sectionTextStyle}>
              {'NEW ARRIVALS'}
            </Text>
            <Carousel
              data={arrivals}
              horizontal
              renderItem={props => (
                <RenderItem itemData={props} onPress={() => {}} />
              )}
            />
          </View>
          <View style={s.section}>
            <Text text_semibold style={s.sectionTextStyle}>
              {'BEST BOOKS'}
            </Text>
            <Carousel
              data={best}
              horizontal
              renderItem={props => (
                <RenderItem itemData={props} onPress={() => {}} />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}

const s = StyleSheet.create({
  container: {
    marginTop: Theme.sizes.v4 + Theme.sizes.v4,
  },
  titleContainer: {
    marginTop: Theme.sizes.v4 + Theme.sizes.v4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 150,
    width: 150,
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
  sectionTextStyle: {
    textAlign: 'left',
    marginBottom: Theme.sizes.v3,
  },
  renderItem: {
    borderRadius: Theme.sizes.r2,
    elevation: 2,
    zIndex: 90,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 180,
  },
  renderImage: {
    height: 120,
    width: 160,
    alignSelf: 'flex-start',
  },
});
