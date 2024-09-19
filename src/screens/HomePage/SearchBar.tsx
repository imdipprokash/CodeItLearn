import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../../assets/images/svg';
import {Colors} from '../../utils/Colors';

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <SearchIcon width={35} height={35} />
      <TextInput style={styles.inputStyle} placeholder="Search now..." />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.bgColor,
    padding: 6,
    borderRadius: 10,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  inputStyle: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
  },
});
