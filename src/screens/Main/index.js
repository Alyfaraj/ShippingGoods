import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import styles from './styles';
import TypeCard from '../../components/TypeCard';
import Colors from '../../constants/Colors';

class MainScreen extends Component {
  handelOpenDetailsScreen = type => {
    this.props.navigation.navigate('Request', {type: type});
  };

  render() {
    return (
      <View style={styles.minCon}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

        <View style={styles.div}>
          <TypeCard
            labal="Shipping Electronics"
            src={require('../../assets/electronics.jpg')}
            onPress={() => {
              this.handelOpenDetailsScreen('Electronics');
            }}
          />
          <TypeCard
            labal="Shipping Foods"
            src={require('../../assets/friuts.jpg')}
            onPress={() => {
              this.handelOpenDetailsScreen('Foods');
            }}
          />
        </View>
        <View style={styles.div}>
          <TypeCard
            labal="Shipping Furnitures"
            src={require('../../assets/table.jpg')}
            onPress={() => {
              this.handelOpenDetailsScreen('Furnitures');
            }}
          />
          <TypeCard
            labal="Shipping Pets"
            src={require('../../assets/pets.jpg')}
            onPress={() => {
              this.handelOpenDetailsScreen('Pets');
            }}
          />
        </View>
      </View>
    );
  }
}
export default MainScreen;
