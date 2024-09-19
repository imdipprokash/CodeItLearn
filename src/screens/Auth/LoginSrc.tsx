import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Sizes} from '../../utils/Colors';
import InputBox from '../../components/InputBox';
import CustomBtn from '../../components/CustomBtn';

type Props = {};

const LoginSrc = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flexGrow: 1}}>
        <Image
          source={require('../../assets/images/png/Algotunes.png')}
          style={styles.imageStyle}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.titleTextStyle}>Login</Text>
          <InputBox title="Username" placeHolder="Enter your username" />
          <InputBox
            title="Password"
            placeHolder="Enter your password"
            secureTextEntry={true}
          />
          <CustomBtn />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginSrc;

const styles = StyleSheet.create({
  imageStyle: {
    top: 20,
    width: Sizes.screenWidth * 0.4,
    height: Sizes.screenHeight * 0.25,
    alignSelf: 'center',
  },
  titleTextStyle: {
    fontFamily: 'NunitoRegular',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#666',
    paddingTop: 6,
  },
  mainContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 1,
    bottom: -35,
    paddingHorizontal: 15,
    gap: 20,
  },
});
