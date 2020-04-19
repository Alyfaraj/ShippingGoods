import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
    mincon: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width: '40%',
        height: '14%'
    },
    text:{
        marginTop:"2%",
        color:"#fff",
        fontSize:20,
        
    }

})
export default styles;
