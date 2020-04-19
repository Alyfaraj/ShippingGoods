import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
    minCon: {
        flex: 1,
        backgroundColor:'#fff',
    },
    activeIndecator:{       
        marginTop:Dimensions.get('screen').height/2.5
    },
    NOtFound:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    tryAgain:{
        fontWeight:'600',
        color:Colors.primary,
        fontSize:16
    }
  
    
})
export default styles;
