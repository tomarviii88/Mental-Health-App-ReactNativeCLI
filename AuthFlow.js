import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/components/TabNavigation';
import LoginStackNavigation from './src/components/LoginStackNavigation';

const AuthFlow = () => {
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    console.log(auth);
  });
  return (
    <NavigationContainer>
      {!auth.isLogin ? <LoginStackNavigation /> : <TabNavigation />}
    </NavigationContainer>
  );
};

export default AuthFlow;
