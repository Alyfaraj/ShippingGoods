import { StyleSheet, Dimensions } from 'react-native'
const styles = StyleSheet.create({
    minCon: {
        flex: 1,
        justifyContent:'center' ,
        backgroundColor:'#fff'       
    },
    div: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical:Dimensions.get('screen').height*.05,

    }
})
export default styles;
