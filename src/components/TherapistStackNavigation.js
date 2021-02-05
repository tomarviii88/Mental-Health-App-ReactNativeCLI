import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import TherapistScreen from '../screens/TherapistScreen';
import TherapistProfileScreen from '../screens/TherapistProfileScreen';
import TherapistHomeScreen from '../screens/TherapistHomeScreen';

const TherapistStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="TherapistHome">
      <Stack.Screen
        name="TherapistHome"
        component={TherapistHomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Therapist"
        component={TherapistScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="TherapistProfile"
        component={TherapistProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default TherapistStackNavigation;
