import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScr from '../screens/HomePage/HomeScr';
import {
  AcademicIcon,
  ActiveHomeIcon,
  PageIcon,
  ProfileIcon,
} from '../assets/images/svg';
import {Colors} from '../utils/Colors';

const Tab = createBottomTabNavigator();

const BottomTabNav = (props: any) => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.mainContainer}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 75,
          backgroundColor: Colors.bgColor,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingTop: Platform.OS === 'ios' ? 15 : 0,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScr}
        options={{
          tabBarIcon: ({focused}) => (
            <ActiveHomeIcon
              color={focused ? Colors.activeColor : Colors.inActiveColor}
              width={30}
              height={30}
            />
          ),
        }}
      />
      {/* AcademicIcon */}
      <Tab.Screen
        name="AcademicIcon"
        component={HomeScr}
        options={{
          tabBarIcon: ({focused}) => (
            <AcademicIcon
              color={focused ? Colors.activeColor : Colors.inActiveColor}
              width={35}
              height={35}
            />
          ),
        }}
      />
      {/* PageIcon */}
      <Tab.Screen
        name="PageIcon"
        component={HomeScr}
        options={{
          tabBarIcon: ({focused}) => (
            <PageIcon
              color={focused ? Colors.activeColor : Colors.inActiveColor}
              width={30}
              height={30}
            />
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={HomeScr}
        options={{
          tabBarIcon: ({focused}) => (
            <ProfileIcon
              color={focused ? Colors.activeColor : Colors.inActiveColor}
              width={30}
              height={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({
  mainContainer: {
    height: 400,
  },
});
