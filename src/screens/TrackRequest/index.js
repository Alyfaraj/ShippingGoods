import React, { Component } from 'react'
import { View, Text } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import Colors from '../../constants/Colors';
import RequestType from '../../constants/RequestType';


const labels = [RequestType.Request, RequestType.Approval, RequestType.Shipping, RequestType.Delivery];
const customStyles = {
    stepIndicatorSize: 35,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: Colors.primary,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: Colors.primary,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: Colors.primary,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: Colors.primary,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: Colors.primary,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 15,
    currentStepLabelColor: Colors.primary
}


class TrackScreen extends Component {
    state = {
        currentPosition: this.props.route.params.selectedRequest.state
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1, backgroundColor: "#fff" }} >
                <StepIndicator
                    stepCount={4}
                    customStyles={customStyles}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                />
            </View>
        )
    }
}


export default TrackScreen