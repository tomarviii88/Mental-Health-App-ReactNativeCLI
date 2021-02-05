import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TherapistStackNavigation from './TherapistStackNavigation';
// import FitnessScreen from '../screens/FitnessScreen';
import {colors} from '../constants/theme';
import {View, Text} from 'react-native';
import HomeStackNavigator from './HomeStackNavigation';
import StoryScreen from '../screens/StoryScreen';
import FitnessStackNavigator from './FitnessStackNavigation';
// import FitnessStackNavigator from './FitnessStackNavigation'
// import VentItOut from '../screens/VentItOut'

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Feather name="home" size={size} color={color} />;
          } else if (route.name === 'Story') {
            return <Entypo name="open-book" size={size} color={color} />;
          } else if (route.name === 'Therapist') {
            return <Fontisto name="doctor" size={size} color={color} />;
          } else if (route.name === 'Fitness') {
            return <Entypo name="check" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.white2,
        tabStyle: {
          padding: 8,
        },
        style: {
          backgroundColor: colors.primary,
          marginTop: 0,
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
        },
        iconStyle: {
          margin: 8,
        },
      }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Story" component={StoryScreen} />
      <Tab.Screen name="Therapist" component={TherapistStackNavigation} />
      <Tab.Screen name="Fitness" component={FitnessStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
