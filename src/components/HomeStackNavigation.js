import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import TrackPlayer from '../screens/TrackPlayer';
import TrackList from '../screens/TrackList';
// import TherapistProfile from '../screens/TherapistProfileScreen';
// import FitnessScreen from '../screens/FitnessScreen';
// import FitnessSubScreen from '../screens/FitnessSubScreen';
import ChatWithTink from '../screens/ChatWithTink';
import CreateMeme from '../screens/CreateMeme';
// import BubbleWrapGame from '../screens/BubbleWrapGame';
// import PunchGame from '../screens/PunchGame';

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={ChatWithTink}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateMeme"
        component={CreateMeme}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TrackList"
        component={TrackList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Track"
        component={TrackPlayer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
