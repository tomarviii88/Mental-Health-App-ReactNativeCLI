import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import FitnessScreen from '../screens/FitnessScreen';
import FitnessSubScreen from '../screens/FitnessSubScreen';
import FitnessContent from '../screens/FitnessContent';
import IndividualFitnessContent from '../screens/IndividualFitnessContent';

const FitnessStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FitnessScreen"
        component={FitnessScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="FitnessSubScreen"
        component={FitnessSubScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FitnessContent"
        component={FitnessContent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IndividualFitnessContent"
        component={IndividualFitnessContent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FitnessStackNavigator;
