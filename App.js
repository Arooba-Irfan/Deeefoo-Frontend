import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DefaultTheme,Provider as PaperProvider} from 'react-native-paper';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#c21313',
  },
};

const navigator=createStackNavigator({
  Signup:SignupScreen,
  Signin:SigninScreen
},
{
  initialRouteName:'Signup',
  defaultNavigationOptions:{
    headerShown:false,
  }
});

const App = createAppContainer(navigator);

export default ()=>{
  return(
    <PaperProvider theme={theme}>
      <App/>
    </PaperProvider>
  )
}