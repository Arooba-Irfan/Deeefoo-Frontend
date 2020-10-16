import React from 'react';
import { ScrollView,SafeAreaView,StatusBar,Image, StyleSheet, Text, View,ImageBackground ,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import SignUp from './src/SignUp';
import SignIn from './src/SignIn';
import SplashScreen from './src/SplashScreen';

const App= () => {
  return(
    <>
      <SignIn/>
    </>
  );
};

const styles = StyleSheet.create();

export default App;