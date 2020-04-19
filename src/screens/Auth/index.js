import React, { Component } from 'react'
import { Text, View, StatusBar, ScrollView, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import FullButton from '../../components/FullButton'
import DefultInput from '../../components/Input'
import styles from './styles'
import { signUp, login } from '../../actions/Auth';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';

class AuthScreen extends Component {
    state = {
        swithToSignup: false,
        email: '',
        password: ''
    }

    handelEmail = val => {
        this.setState(
            {
                email: val
            }
        )
    }


    handelPass = val => {
        this.setState(
            {
                password: val
            }
        )
    }

    signUpHandeler = () => {

        if (this.state.email.trim() !== "" || this.state.password.trim() !== "") {
            if (this.state.swithToSignup) {
                this.props.onSignUp(this.state.email, this.state.password)

            }
            else {
                this.props.onLogin(this.state.email, this.state.password)
            }
        } else {
            alert('please fail')
        }
    }


    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <ScrollView style={{ backgroundColor: "#FFF" }} >
                    <View style={styles.minCon} >
                        <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

                        <Text style={styles.Hello} >Hello,</Text>
                        <Text style={styles.Text} >Shipping Your Goods Now.</Text>
                        <DefultInput hintText="Email" value={this.state.email} onChangeText={this.handelEmail} />
                        <DefultInput secureText={true} hintText="Password" value={this.state.password} onChangeText={this.handelPass} />
                        <View style={styles.button} >
                            {this.props.isLoading ? <ActivityIndicator size={24} /> : <FullButton title={this.state.swithToSignup ? "SignUp" : "Login"}
                                onPress={this.signUpHandeler} />}
                            <View style={{ flexDirection: 'row', marginTop: "2%", alignSelf: 'center' }} >
                                <Text style={{ fontSize: 16 }} >{this.state.swithToSignup ? "Already have account" : "Don't have account?"}</Text>
                                <TouchableOpacity onPress={() => this.setState({ swithToSignup: !this.state.swithToSignup })} >
                                    <Text style={styles.createAccount} > {this.state.swithToSignup ? "Login" : "Create Account"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>


        )
    }
}

const mapToDispatchProps = dispatch => {
    return {
        onSignUp: (email, password) => { dispatch(signUp(email, password)) },
        onLogin: (email, password) => { dispatch(login(email, password)) }

    }
}


const mapStateToProps = state => {
    return {
        isLoading: state.ui.isLoading
    }
}


export default connect(mapStateToProps, mapToDispatchProps)(AuthScreen)