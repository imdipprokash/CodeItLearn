import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScr from './src/screens/HomeScr';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNav from './src/navigation/BottomTabNav';

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
