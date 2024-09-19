import {Dimensions} from 'react-native';

export const Colors = {
  bgColor: '#FFFFFF',
  activeColor: '#4393F4',
  inActiveColor: '#d9d9d9',
  mainColor: '#F9FBFF',
};

export const Sizes = {
  small: Dimensions.get('screen').height * 0.02,
  large: Dimensions.get('screen').height * 0.04,
  extraLarge: Dimensions.get('screen').height * 0.06,
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
};
