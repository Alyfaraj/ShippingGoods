import React from 'react';
import Nav from './src/navigation/index';
import { Provider, connect } from 'react-redux'
import configStore from './src/store/configStore'
import SplashScreen from './src/screens/Splash';

//change 123
const store = configStore();

class App extends React.Component {

  state = {
    isloading: true
  }

 
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isloading: false })
    }, 3500);
   
  }
  render() {
    if (this.state.isloading) {
      return (
      <Provider store={store} >
      <SplashScreen />
      </Provider>)
    }
    return (
      <Provider store={store} >
        <Nav />
      </Provider>
    );
  }
}


export default App;
