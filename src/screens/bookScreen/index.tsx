import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {BackHandler, InteractionManager, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewHttpErrorEvent,
} from 'react-native-webview/lib/WebViewTypes';
import {SCREEN_HEIGHT} from '../../lib/theme';
import {CommonRoutes} from '../../navigation/routes';
import {CommonRoutesParams} from '../../navigation/types';
import {Button, HeaderLayout, Loader} from '../../lib';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type TProps = NativeStackScreenProps<CommonRoutesParams, CommonRoutes.WEB_VIEW>;

export const BookScreen: React.FC<TProps> = React.memo(props => {
  const {
    navigation: {reset, goBack, canGoBack},
    route: {params},
  } = props;
  const webviewRef = useRef<WebView>(null);
  const {html = '', onBack, goBackTitle, keyArray, ...rest} = params || {};
  const indexes = keyArray?.map((el, index) => ({
    id: el,
    index,
  }));
  const [currentIndex, setcurrentIndex] = useState<number>(0);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (canGoBack()) {
          goBack();
        }
        return true;
      },
    );

    return () => subscription.remove();
  }, []);

  function onMessage(data: any) {
    console.log('i was triggered', data.nativeEvent.data);
    //currentindex into result from the html
    const index = keyArray?.findIndex(el => el === data.nativeEvent.data) || 0;
    setcurrentIndex(index);
  }

  function next() {
    if (keyArray && currentIndex === keyArray?.length - 1) return;
    const newIdx = currentIndex + 1;
    const obj = indexes?.find((el, idx) => idx === newIdx);
    console.log('----->>>>', currentIndex, obj);
    if (obj) {
      webviewRef.current?.postMessage(obj?.id);
      setcurrentIndex(obj?.index);
    }
  }

  function previous() {
    if (currentIndex <= 0) return;
    if (keyArray && currentIndex <= keyArray?.length - 1) {
      const newIdx = currentIndex - 1;
      const obj = indexes?.find((el, idx) => idx === newIdx);
      if (obj) {
        webviewRef.current?.postMessage(obj?.id);
        setcurrentIndex(obj?.index);
      }
    }
  }

  const handleError = (e: WebViewErrorEvent | WebViewHttpErrorEvent) => {
    InteractionManager.runAfterInteractions(() => {
      goBack();
    });
  };

  return (
    <HeaderLayout
      innerStyle={s.flex}
      goBackTitle={goBackTitle}
      headerTitle={goBackTitle}>
      <WebView
        ref={webviewRef}
        allowsBackForwardNavigationGestures
        javaScriptEnabled={true}
        onMessage={onMessage}
        startInLoadingState
        renderLoading={WebLoader}
        onError={handleError}
        onHttpError={handleError}
        source={{html}}
        style={s.flex}
        {...rest}
      />
      <View style={[s.buttonContainer, {marginBottom: insets.bottom + 10}]}>
        <Button
          onPress={previous}
          type={'icon'}
          iconName={'chevron-left'}
          iconSize={28}
        />
        <Button
          onPress={next}
          type={'icon'}
          iconName={'chevron-right'}
          iconSize={28}
        />
      </View>
    </HeaderLayout>
  );
});

const WebLoader = () => (
  <View style={s.loaderWrapper}>
    <Loader />
  </View>
);

const s = StyleSheet.create({
  flex: {
    flex: 1,
    paddingHorizontal: 16,
  },
  loaderWrapper: {
    height: '100%',
    paddingTop: SCREEN_HEIGHT * 0.33,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
  },
});
