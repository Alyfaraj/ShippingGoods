import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';

const AppNav = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNav;
