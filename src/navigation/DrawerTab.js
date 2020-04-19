import React from 'react'
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { StyleSheet, View, Button, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import MainStack from './MainStack'
import HistoryStack from './HistoryStack'
import FullButton from '../components/FullButton'
import DrawerContent from '../components/DrawerContent';
import { connect } from 'react-redux';
import { logout } from '../actions/Auth';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();
const DrawerScreen = props => {

  
  const drawerCon =
    (<DrawerContent onPress={() => props.onlogout()} >
      <View>
        <DrawerItem
          activeTintColor="#fff"
          activeBackgroundColor={Colors.primary}
          style={{ borderWidth: 1, borderColor: "#000" }}
          label="MainApp"
          onPress={() => props.navigation.navigate('MainApp')}
        />
        <DrawerItem
          style={{ borderWidth: 1, borderColor: "#000" }}
          label="History"
          onPress={() => props.navigation.navigate('History')
          }
        />

      </View>
    </DrawerContent>)


  return (
    <Drawer.Navigator initialRouteName="MainApp"
      drawerContent={() => drawerCon}
      drawerType='back' >
      <Drawer.Screen name="MainApp" component={MainStack} />
      <Drawer.Screen name="History" component={HistoryStack} />
    </Drawer.Navigator>
  );
}


const maptoprops = dispatch => {
  return {
    onlogout: () => {
      dispatch(logout())
    }
  }
}

export default connect(null, maptoprops)(DrawerScreen);