import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/Auth/index';



const AuthStack=createStackNavigator();

const AuthStackScreens=()=>(
<AuthStack.Navigator headerMode='none' >
<AuthStack.Screen name="Auth" component={AuthScreen} />    
</AuthStack.Navigator>
);

export default AuthStackScreens