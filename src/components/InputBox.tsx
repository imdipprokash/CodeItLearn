import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Sizes} from '../utils/Colors';

type Props = {
  title?: string;
  placeHolder?: string;
  secureTextEntry?: boolean;
};

const InputBox = ({secureTextEntry, title, placeHolder}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.textInputStyle}
        placeholder={placeHolder || 'Enter your '}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  mainContainer: {
    gap: 10,
  },
  titleTextStyle: {
    fontFamily: 'GowunBatangRegular',
    fontSize: 20,
    paddingLeft: 6,
    color: '#000',
  },
  textInputStyle: {
    fontFamily: 'GowunBatangRegular',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    height: Sizes.screenHeight * 0.058,
    paddingHorizontal: 8,
    borderColor: 'lightgray',
  },
});
