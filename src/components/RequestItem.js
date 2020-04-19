import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Card from './Card'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import RequestType from '../constants/RequestType';


const HistoryItem = (props) => {

    let stateText = ''
    switch (props.state) {
        case 0:
            {
                stateText = RequestType.Request
                break;
            }
        case 1:
            {
                stateText = RequestType.Approval
                break;
            }
        case 2:
            {
                stateText = RequestType.Shipping
                break;
            }
        case 3:
            {
                stateText = RequestType.Delivery
                break;
            }

    }

    return (
        <TouchableOpacity style={styles.card} onPress={props.onItemPresed} >
            <Card style={styles.minCon} >
                <View style={styles.rowView} >
                    <Icon name="ios-calendar" size={24} color={Colors.primary} style={styles.distance} />
                    <Text style={{ fontSize: 16 }} >Date : </Text>
                    <Text style={{ fontSize: 18, color: Colors.primary }} >{props.date}</Text>
                </View>
                <View style={styles.rowView}>
                    <Icon name="ios-car" size={25} color={Colors.primary} style={styles.distance} />
                    <Text style={{ fontSize: 16 }} >State : </Text>
                    <Text style={{ fontSize: 18, color: Colors.primary }} >{stateText}</Text>
                </View>
                <View style={styles.rowView} >
                    <Icon name="ios-list" size={25} color={Colors.primary} style={styles.distance} />
                    <Text style={{ fontSize: 16 }}>Shipping Type : </Text>
                    <Text style={{ fontSize: 18, color: Colors.primary }} >{props.type}</Text>
                </View>
                <View style={styles.rowView} >
                    <Icon name="ios-map" size={25} color={Colors.primary} style={styles.distance} />
                    <Text style={{ fontSize: 16 }} >To : </Text>
                    <Text style={{ fontSize: 18, color: Colors.primary }} >{props.to}</Text>

                </View>
            </Card>
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    minCon: {
        padding: 10,
        height: "100%",
        justifyContent: 'space-evenly',
    },
    card: {
        margin: 10,
        flex: 1,
        height: Dimensions.get('window').height / 3.5
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    distance: {
        marginEnd: Dimensions.get('window').width * .016
    }

})


export default HistoryItem;
