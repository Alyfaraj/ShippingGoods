import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
    minCon: {
        flex: 1,
       
    },
  
    button:{
        alignSelf:'center',
        justifyContent:'center',
        width:'80%',
        marginTop:30,
        
    
    },
    card:{
        padding:15,
        marginHorizontal:'10%',
        marginTop:'40%',
        flex:1
    },
    Text:{
        marginBottom:"10%",
        fontSize:26,
        fontWeight:'bold',
        marginHorizontal:"3%",
        color:Colors.primary
    },
    Hello:{
        fontSize:26,
        fontWeight:'bold',
        marginHorizontal:"3%",
        color:Colors.primary,
        marginTop:"15%"
    },
    createAccount:{
        fontSize:16,
        color:Colors.primary,
        
    }

    
})
export default styles;
