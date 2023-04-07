import {Dimensions, Platform} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

const windowSize = Dimensions.get('window');

export const SCREEN_WIDTH = windowSize.width;
export const SCREEN_HEIGHT = windowSize.height;

class ThemeClass {
  sizes = {
    safeTop: Math.max(initialWindowMetrics?.insets?.top || 20),
    safeBottom: Platform.select({
      ios: Math.max(initialWindowMetrics?.insets?.bottom || 20),
      default: 20,
    }),

    //icon sizes
    icon1: 16,
    icon2: 28,
    icon3: 24,
    icon4: 20,
    //sizing used for borderRdius
    r1: 8,
    r2: 16,
    r3: 24,
    r4: 25,
    //sizes for horizontal margins
    h1: 4,
    h2: 8,
    h3: 12,
    h4: 16,
    h5: 24,
    //sizes for vertical margins
    v1: 4,
    v2: 8,
    v3: 12,
    v4: 16,
    v5: 24,
    vmin1: 1,
    vmin3: 3,
    vmin: 4,
  };

  elevation = {
    el1: 2,
    el2: 4,
    el3: 8,
    el4: 16,
  };
}

export const Theme = new ThemeClass();
