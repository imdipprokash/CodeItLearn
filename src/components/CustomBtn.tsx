import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Sizes} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const CustomBtn = (props: Props) => {
  const nav = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => nav.navigate('MainScreen')}>
      <Text style={styles.titleTextStyle}>Login</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  mainContainer: {
    width: Sizes.screenWidth * 0.8,
    height: 55,
    paddingVertical: 10,
    backgroundColor: Colors.activeColor,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  titleTextStyle: {
    fontFamily: 'NunitoRegular',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
