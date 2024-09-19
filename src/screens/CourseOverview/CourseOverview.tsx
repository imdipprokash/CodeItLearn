import {
  Image,
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
});
