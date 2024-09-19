import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabNav from './src/navigation/BottomTabNav';
import {createStackNavigator} from '@react-navigation/stack';
import CourseOverview from './src/screens/CourseOverview/CourseOverview';

const Stack = createStackNavigator();

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={BottomTabNav} />
        <Stack.Screen name="CourseOverview" component={CourseOverview} />
        <Stack.Screen name="Profile" component={BottomTabNav} />
        <Stack.Screen name="Settings" component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
