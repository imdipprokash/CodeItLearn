import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {Sizes} from '../../utils/Colors';
import Swiper from 'react-native-swiper';

type Props = {};

const Banner = (props: Props) => {
  return (
    <View style={{height: Sizes.screenHeight * 0.2}}>
      <Swiper
        style={styles.wrapper}
        autoplay
        showsButtons={false}
        showsPagination={false}>
        <View style={{width: Sizes.screenWidth}}>
          <View style={styles.mainContainerStyle}>
            <Image
              source={require('../../assets/images/png/banner_image_1.png')}
              style={styles.imageStyle}
            />
          </View>
        </View>
        <View style={styles.mainContainerStyle}>
          <Image
            source={require('../../assets/images/png/banner_image_2.png')}
            style={styles.imageStyle}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  wrapper: {},
  mainContainerStyle: {
    width: Sizes.screenWidth * 0.93,
    height: Sizes.screenHeight * 0.2,
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: 'red',
  },
  imageStyle: {
    flex: 1,
    width: Sizes.screenWidth * 0.93,
  },
});
