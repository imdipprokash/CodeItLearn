import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors, Sizes} from '../../utils/Colors';
import {StarIcon, TimeIcon} from '../../assets/images/svg';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const PopularLessons = (props: Props) => {
  const nav = useNavigation<any>();
  const data = [
    {
      id: 1,
      title: 'Figma master class UI Design',
      lessons: 28,
      rating: 4.9,
      duration: '6h 30min',
      image: require('../../assets/images/png/banner_image_2.png'),
    },
    {
      id: 2,
      title: 'Web design for beginner UX Design  ',
      lessons: 14,
      rating: 4.8,
      duration: '8h 30min',
      image: require('../../assets/images/png/banner_image_1.png'),
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={[styles.lessonView, {paddingHorizontal: 16, gap: 10}]}
        onPress={() => {
          nav?.navigate('CourseOverview', item);
        }}>
        {/* Image */}
        <Image source={item.image} style={styles.imageStyle} />
        {/* Title */}
        <Text
          numberOfLines={2}
          style={[
            styles.subTitleStyle,
            {
              fontSize: 19,
              width: Sizes.screenWidth * 0.6,
            },
          ]}>
          {item.title}
          <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>
            {'\u00A0'}({item?.lessons} lesson)
          </Text>
        </Text>

        {/* Duration */}
        <View style={[styles.headerViewStyle]}>
          {/* Time */}
          <View style={styles.durationStyle}>
            <TimeIcon width={15} height={15} color={Colors.activeColor} />
            <Text style={{color: Colors.activeColor}}>{item.duration}</Text>
          </View>
          {/* Rating */}
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <StarIcon width={20} height={20} color={Colors.activeColor} />
            <Text style={{color: 'gray', fontWeight: '700', fontSize: 16}}>
              {item.rating}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{gap: 25}}>
      {/* Header */}
      <View style={styles.headerViewStyle}>
        <Text style={styles.subTitleStyle}>Popular Lessons</Text>
        <TouchableOpacity>
          <Text
            style={[
              styles.subTitleStyle,
              {color: Colors.activeColor, fontSize: 17},
            ]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* LessonList */}
      <FlatList
        style={{height: Sizes.screenHeight * 0.4}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PopularLessons;

const styles = StyleSheet.create({
  headerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitleStyle: {
    fontFamily: 'NunitoRegular',
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  lessonView: {
    width: Sizes.screenWidth * 0.7,
    height: Sizes.screenHeight * 0.33,
    backgroundColor: Colors.bgColor,
    marginEnd: 30,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  imageStyle: {
    width: Sizes.screenWidth * 0.6,
    height: Sizes.screenHeight * 0.2,
    borderRadius: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  durationStyle: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    backgroundColor: '#EBF5FF',
    padding: 4,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
});
