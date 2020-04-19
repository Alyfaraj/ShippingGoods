import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import styles from './styles';
import RequestsList from '../../components/RequestsList';
import { connect } from 'react-redux'
import { getRequests } from '../../actions/index';
import Colors from '../../constants/Colors';


class HistoryScreen extends Component {

    componentDidMount() {
        this.props.onLoadingRequest()
    }
    
 
    itemSelectedHandler = key => {
        const selectedRequest = this.props.requests.find(request => {
            return request.id === key
        })
        this.props.navigation.navigate('Track', { selectedRequest: selectedRequest })
    }


    render() { 

        if (this.props.isLoading) {
            return (
                <View style={styles.activeIndecator}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            );
        }

        if (!this.props.isLoading && this.props.requests.length === 0) {
            return (
                <View style={styles.NOtFound}>
                    <Text>No Requests found. Maybe start adding some!</Text>
                    <TouchableOpacity onPress={()=> this.props.onLoadingRequest()} >
                        <Text style={styles.tryAgain} >Refresh</Text>
                    </TouchableOpacity>
                    
                </View>
            );
        }


        return (
            <View style={styles.minCon} >
                <RequestsList
                    data={this.props.requests}
                    onItemSelected={this.itemSelectedHandler}
                />
            </View>
        )
    }
}
const mapactionsToDispatch = dispatch => {
    return {
        onLoadingRequest: () => dispatch(getRequests())
    }
}

const mapStateToprops = state => {
    return {
        requests: state.requests.requests,
        isLoading: state.ui.isLoadingHistory

    }
}

export default connect(mapStateToprops, mapactionsToDispatch)(HistoryScreen)