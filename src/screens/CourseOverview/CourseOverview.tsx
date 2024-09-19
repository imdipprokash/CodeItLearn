import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors, Sizes} from '../../utils/Colors';
import Header from './Header';
import {StarIcon, TimeIcon} from '../../assets/images/svg';
import LessonsDtls from './LessonsDtls';

const CourseOverView = (props: any) => {
  const item = props?.route?.params;
  return (
    <SafeAreaView style={{backgroundColor: Colors.mainColor, flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          rowGap: 16,
        }}
        style={styles.mainContainer}>
        {/* Header */}
        <Header />
        {/* Hero Image */}
        <Image
          source={require('../../assets/images/png/banner_image_2.png')}
          style={{
            width: Sizes.screenWidth * 0.9,
            height: Sizes.screenHeight * 0.25,
            borderRadius: 16,
            alignSelf: 'center',
          }}
        />
        {/* Title */}
        <Text style={styles.titleStyle}>{item.title}</Text>

        {/* Course rating */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.durationStyle}>
            <TimeIcon width={20} height={20} color={'gray'} />
            <Text style={{color: 'gray', fontSize: 18, fontWeight: '600'}}>
              {item.duration} • {item.lessons} lessons
            </Text>
          </View>
          <View style={styles.ratingStyle}>
            <StarIcon width={20} height={20} color={Colors.activeColor} />
            <Text style={{color: 'gray', fontWeight: '700', fontSize: 18}}>
              {item.rating}
            </Text>
          </View>
        </View>

        {/*  Lessons dtls*/}
        <LessonsDtls />
      </ScrollView>
      {/* Footer */}
      <View style={styles.footerContainerStyle}>
        <View style={styles.itemViewStyle}>
          <Text style={styles.textStyle}>$399</Text>
        </View>
        <View
          style={[
            styles.itemViewStyle,
            {
              flexGrow: 1,
              alignItems: 'center',
              backgroundColor: Colors.activeColor,
            },
          ]}>
          <Text style={[styles.textStyle, {color: '#fff'}]}>Enroll Now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CourseOverView;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  titleStyle: {
    marginTop: 10,
    fontFamily: 'NunitoRegular',
    fontSize: 25,
    fontWeight: 'bold',
  },
  durationStyle: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  ratingStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#EBF5FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  footerContainerStyle: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 2,
    backgroundColor: Colors.mainColor,
    // width: Sizes.screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 80,

    elevation: 2,
  },
  itemViewStyle: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 1.0,
    elevation: 1,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.activeColor,
  },
});
