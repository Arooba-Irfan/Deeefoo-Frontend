import React from 'react';
import { ScrollView,SafeAreaView,StatusBar,Image, StyleSheet, Text, View,ImageBackground ,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SignIn= () => {
  return(
    <View>
      <View style={{borderColor:'#000'}}>
          <Image source={require('../assets/trans2.png')} style={{width:'40%',position:'absolute',top:0,right:0}}/>
        </View>
      <KeyboardAvoidingView behavior='position'>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#C21313" translucent = {false}/>
    <Text style={styles.textStyle}>SIGN IN</Text>
    <TextInput 
      label="Email"
      theme={{colors:{primary:"#C21313"}}}
      style={{marginLeft:18,marginRight:18,marginTop:18}}
      mode='outlined'
      />
      <TextInput 
      label="Password"
      theme={{colors:{primary:"#C21313"}}}
      style={{marginLeft:18,marginRight:18,marginTop:18}}
      mode='outlined'
      />
      <Button 
      mode="contained" 
      style={{marginLeft:18,marginRight:18,marginTop:18}}
      onPress={() => console.log('Pressed')}
      color='#C21313'
      >
      SIGN IN
    </Button>
    <TouchableOpacity>
      <Text style={{ fontSize:20, marginLeft:100,marginTop:18,color:'#C21313'}}>Don't have an account ?</Text>
    </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>  
  );
};

const styles = StyleSheet.create({
  textStyle:{
    fontSize:40,
    marginLeft:120,
    marginTop:230,
    color:'#C21313'
  }
});

export default SignIn;