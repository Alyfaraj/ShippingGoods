import React, { Component } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import DefultInput from '../../components/Input'
import styles from './styles'
import { DatePicker } from 'native-base'
import Colors from '../../constants/Colors'
import Card from '../../components/Card'
import Icon from 'react-native-vector-icons/Ionicons';
import DropdownAlert from 'react-native-dropdownalert';

import { connect } from 'react-redux'
import { addRequest } from '../../actions/index'

class RequestScreen extends Component {
    state = {
        from: '',
        to: '',
        date: new Date()
    }

    setDate = (newDate) => {
        this.setState({ date: newDate });
    }

    change = (val) => {
        this.setState({ to: val })
    }
    changee = (val) => {
        this.setState({ from: val })
    }

    handelAddRequest = () => {
        if (this.state.from.trim() !== "" || this.state.to.trim() !== "") {
            this.props.onAddRequest(
                this.state.from,
                this.state.to,
                this.props.route.params.type,
                this.state.date)
            this.setState({
                from: '',
                to: ''
            })
            this.dropDownAlertRef.alertWithType('success', 'Success', 'Fetch data is complete.');
        }
        else {
            this.dropDownAlertRef.alertWithType('error', 'Error', "Please Enter Data");
        }
    } 

    render() {
        return (
            <View style={styles.minCon} >
                <DropdownAlert errorColor="#111" updateStatusBar={false} ref={ref => this.dropDownAlertRef = ref} />
                <DefultInput hintText="from" value={this.state.from} onChangeText={this.changee} />
                <DefultInput hintText="to" value={this.state.to} onChangeText={this.change} />
                <Card style={styles.card} >
                    <Icon name="ios-today" size={20} color={Colors.primary} />
                    <DatePicker
                        defaultDate={new Date()}
                        minimumDate={new Date()}
                        maximumDate={new Date(2020, 12, 31)}
                        textStyle={{ color: Colors.primary }}
                        onDateChange={this.setDate}
                    />
                </Card>
                <View style={styles.button} >
                    {this.props.isLoading ? <ActivityIndicator size={28} /> : <Button color={Colors.primary} title='done' onPress={this.handelAddRequest} />}
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.ui.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddRequest: (from, to, shippingType, date) => dispatch(addRequest(from, to, shippingType, date))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RequestScreen)