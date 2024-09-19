import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Sizes} from '../../utils/Colors';
import Header from './Header';
import SearchBar from './SearchBar';
import Banner from './Banner';
import PopularLessons from './PopularLessons';

type Props = {};

const HomeScr = (props: Props) => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.mainColor}}>
      <View style={styles.mainContainer}>
        {/* Header */}
        <Header />
        {/* Search Bar */}
        <SearchBar />
        {/* Banner */}
        <Banner />
        {/* Popular Lessons */}
        <PopularLessons />
      </View>
    </SafeAreaView>
  );
};

export default HomeScr;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    gap: 20,
  },
});
