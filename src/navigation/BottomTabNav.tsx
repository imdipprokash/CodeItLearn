import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScr from '../screens/HomeScr';

const Tab = createBottomTabNavigator();

const BottomTabNav = (props: any) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScr} />
      <Tab.Screen name="Settings" component={HomeScr} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
