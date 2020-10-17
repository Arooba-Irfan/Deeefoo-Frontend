import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppLoading} from 'expo';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,borderWidth:2,borderColor:'#000'}}>
      <Image source={require('./assets/curve.png')}  style={styles.container}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'40%',
    width:'50%',
    position:'absolute',
    top:0,
    right:0,
    // justifyContent:'center',
    // alignItems:'center'
  },
});
