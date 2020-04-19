import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'


const DrawerItem = props => {
    return (
        <TouchableOpacity onPress={() => props.onPress()} style={styles.item} >
            <Text style={styles.Text} >{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        borderColor:"#000",
        borderWidth:.8,
        margin:2,
        marginBottom:"3%"
        

    },
    Text: {
        fontSize: 18,
        margin:5,
        alignSelf:'center'
    }
})

export default DrawerItem