import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/Main/index';
import RequestScreen from '../screens/RequestDetails/index';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const MainStack = createStackNavigator();

const MainStackScreens = ({navigation}) => (
  <MainStack.Navigator
    screenOptions={{
      gestureEnabled: true,
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}>
    <MainStack.Screen
      name="MainScreen"
      component={MainScreen}
      options={{
        headerTitle: 'Home',
        headerLeft: () => (
          <Icon.Button
            backgroundColor={Colors.primary}
            name="md-menu"
            size={25}
            color="#fff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <MainStack.Screen
      name="Request"
      component={RequestScreen}
      options={({route}) => ({
        title: 'Shipping ' + route.params.type,
      })}
    />
  </MainStack.Navigator>
);

export default MainStackScreens;
