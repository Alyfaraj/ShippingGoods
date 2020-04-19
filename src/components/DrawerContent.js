import React from 'react'
import { StyleSheet, View, Button, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import FullButton from '../components/FullButton'
import DrawerItemm from './DrawerItem'
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Colors from '../constants/Colors';



// Drawer content
const DrawerContent = (props) => {

    
    return (
        <SafeAreaView style={styles.drawerWrapper}>
            <View>
                {props.children}
               
            </View>
            <FullButton title='Logout' onPress={() => props.onPress()} />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

    drawerWrapper: {
        flex: 1,
        padding: 9
    },
});


export default DrawerContent;