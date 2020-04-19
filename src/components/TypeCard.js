import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text ,TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import Card from './Card'
import Colors from '../constants/Colors';


const TypeCard = (props) => {
    return (
        <TouchableOpacity  
        style={{ backgroundColor: 'transparent',shadowOffset:.2,shadowOpacity:0 }}
        onPress={props.onPress} >
        <Card style={styles.cardCon} >
            <Image style={styles.img} source={props.src} />
            <View style={styles.txt} >
                <Text style={styles.label} >{props.labal}</Text>
            </View>
        </Card>
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    cardCon: {
        backgroundColor:Colors.primary,
        width: Dimensions.get('window').width * .4,
        height: Dimensions.get('window').width * .4,
        borderWidth:2,
        borderColor:"#fff"
    },
    img: {
        width: "100%",
        height: '80%',
    },
    txt: {
        alignSelf: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        height: '20%'

    },
    label: {
        fontSize: 13,
        textAlign: 'center',
        color:"#fff",

    },
    
})

export default TypeCard
