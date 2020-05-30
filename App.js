import React from 'react';
import Nav from './src/navigation/index';
import {Provider} from 'react-redux';
import configStore from './src/store/configStore';
import SplashScreen from './src/screens/Splash';

//config
const store = configStore();

class App extends React.Component {
  state = {
    isloading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({isloading: false});
    }, 3500);
  }
  render() {
    if (this.state.isloading) {
      return (
        <Provider store={store}>
          <SplashScreen />
        </Provider>
      );
    }
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}

export default App;
