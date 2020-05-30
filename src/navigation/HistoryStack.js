import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HistoryScreen from '../screens/History/index';
import TrackScreen from '../screens/TrackRequest/index';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const HistoryStack = createStackNavigator();

const HistoryStackScreens = ({navigation}) => (
  <HistoryStack.Navigator
    screenOptions={{
      gestureEnabled: true,
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}>
    <HistoryStack.Screen
      name="History"
      component={HistoryScreen}
      options={{
        headerTitle: 'History',
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
    <HistoryStack.Screen name="Track" component={TrackScreen} />
  </HistoryStack.Navigator>
);

export default HistoryStackScreens;
