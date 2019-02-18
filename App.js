import React from 'react';
import { StyleSheet,  View } from 'react-native';
import { Root } from 'native-base';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Expo from 'expo';

import Home from "./components/screens/home/Home";
import Contact from "./components/screens/contact/Contact";
import About from "./components/screens/about/About";
 
 
class App extends React.Component { 
  state={
    isReady: false 
  }
  
  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
  });
  this.setState({isReady:true})
}

componentDidMount() {
  NavigationBar.setColor('#ffab8e')
}

componentDidMount() {
  NavigationBar.setColor('#ffab8e')
}

constructor (props){
  super (props)
    
  }
  render() {
    
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <View>
        <Home/> 
      </View>
    );
  }
}

  const AppNavigator = createStackNavigator(
    {
      Home: { screen: Home },
  
      About: { screen: About },
  
      Contact: { screen: Contact },
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
      }
  );

  const AppContainer = createAppContainer(AppNavigator);

  export default () =>
  <Root>
    <AppContainer />
  </Root>;

