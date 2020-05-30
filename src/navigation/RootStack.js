import React, { useEffect } from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import AuthStack from './AuthStack'
import DrawerTab from './DrawerTab'
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

const LoadingStack = createStackNavigator();

class RootStack extends React.Component {
  render() {
    return (
      <LoadingStack.Navigator headerMode="none" >
       {!this.props.getuser? <LoadingStack.Screen name="Authmain" component={AuthStack} />:
        <LoadingStack.Screen name="App" component={DrawerTab} />}
      </LoadingStack.Navigator>
    )
  }
}

const MapStateToProps=state=>{
  return{
    getAuth:state.auth.token,
    getuser:state.auth.userId
  }
}
