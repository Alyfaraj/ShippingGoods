import React, { Component } from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { authenticate } from '../../actions/Auth'
import Colors from '../../constants/Colors';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'

class SplashScreen extends Component {

    tryLogin = async () => {
        const userData = await AsyncStorage.getItem('userAuth');
        if (!userData) {
            return;
        }
        const transformedData = JSON.parse(userData);
        const { token, userId } = transformedData;
        this.props.onAuth(token, userId)
    }

    componentDidMount() {
        this.tryLogin()
    }

    render() {
        return (
            <View style={styles.mincon} >
                <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

                <Image style={styles.image}
                    source={require('../../assets/shipping.png')}
                />
                <Text style={styles.text} >From anywhere to anywhere</Text>

            </View>
        )
    }
}


const MapDispatchToProps = dispatch => {
    return {
        onAuth: (token, id) => dispatch(authenticate(token, id))
    }
}


const MapStateToProps = state => {
    return {
        getAuth: state.auth.token,
        getuser: state.auth.userId
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(SplashScreen)