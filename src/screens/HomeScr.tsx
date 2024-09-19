import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const HomeScr = (props: Props) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleTestStyle}>HomeScr</Text>
    </SafeAreaView>
  );
};

export default HomeScr;

const styles = StyleSheet.create({
  titleTestStyle: {
    fontFamily: 'NunitoRegular',
  },
});
