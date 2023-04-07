import {Platform} from 'react-native';

export const colors = {
  shadowColor: '#00000080',
  transparent: 'transparent',
  background: '#FFFFFF',
  primary: '#FE812A',
  error: '#e34343',
  inverseWhite100: '#FFFFFF',
  inverseWhite80: '#FFFFFFCC',
  inverseWhite60: '#FFFFFF99',
  inverseWhite40: '#FFFFFF66',
  inverseWhite20: '#FFFFFF33',
  inverseWhite10: '#FFFFFF1A',
  inverseBlack100: '#000000',
  inverseBlack80: '#000000CC',
  inverseBlack60: '#00000099',
  inverseBlack40: '#00000066',
  inverseBlack20: '#00000033',
  inverseBlack10: '#0000001A',

  shadowButton: Platform.select({
    ios: {
      shadowOffset: {height: 10, width: 0},
      shadowRadius: 10,
      shadowColor: 'rgba(255,142,37, 1)',
      shadowOpacity: 0.2,
    },
  }),
};

export const darkColors = {
  shadowColor: '#00000080',
  transparent: 'transparent',
  background: '#1A1D21',
  inverseWhite100: '#000000',
  inverseWhite80: '#000000CC',
  inverseWhite60: '#00000099',
  inverseWhite40: '#00000066',
  inverseWhite20: '#00000033',
  inverseWhite10: '#0000001A',
  inverseBlack100: '#FFFFFF',
  inverseBlack80: '#FFFFFFCC',
  inverseBlack60: '#FFFFFF99',
  inverseBlack40: '#FFFFFF66',
  inverseBlack20: '#FFFFFF33',
  inverseBlack10: '#FFFFFF1A',
};
