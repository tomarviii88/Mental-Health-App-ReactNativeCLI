import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../constants/theme';
import {color} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import BlogMainScreen from './BlogMainScreen';
import JournalScreen from './JournalScreen';

function AddBlogScreen() {
  return <BlogMainScreen />;
}

function AddJournalScreen() {
  return <JournalScreen />;
}

const Tab = createMaterialTopTabNavigator();
function StoryScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20,
        },
        style: {backgroundColor: colors.primary},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Add Blog') {
            return <Feather name="home" size={size} color={color} />;
          } else if (route.name === 'My Journals') {
            return <Entypo name="book" size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name=" Blogs" component={AddBlogScreen} />
      <Tab.Screen name="Journals" component={AddJournalScreen} />
    </Tab.Navigator>
  );
}

export default StoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
