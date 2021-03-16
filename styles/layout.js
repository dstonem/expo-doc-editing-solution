import { Dimensions, Platform, StatusBar } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const layout = {
  window: {
    width,
    height
  },
  borderRadius: {
    inputTag: 6,
    heroImageBorderRadius: 30,
    questionOption: 10,
    weeklyAdCard: 20,
    weeklyAdCoverImage: 10
  },
  isSmallDevice: width < 375,
  device: {
    Platform,
    StatusBar,
    barHeights: Dimensions.get('screen').height - height
  },
  flexGrow: {
    flexGrow: 1
  }
};
