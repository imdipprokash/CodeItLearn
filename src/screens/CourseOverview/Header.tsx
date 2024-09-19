import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArrowLeft, ArrowRight, LoveIcon} from '../../assets/images/svg';
import {Colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const Header = (props: Props) => {
  const nav = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          nav?.goBack();
        }}
        style={styles.iconViewStyle}>
        <ArrowLeft width={20} height={20} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Course Overview</Text>
      <View style={styles.iconViewStyle}>
        <LoveIcon color="#000" width={25} height={25} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  iconViewStyle: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: Colors.bgColor,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 1.0,
    elevation: 1,
  },
  textStyle: {
    fontFamily: 'NunitoRegular',
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
  },
});
