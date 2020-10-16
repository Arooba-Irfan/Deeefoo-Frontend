import React from 'react';
import { ScrollView,SafeAreaView,StatusBar,Image, StyleSheet, Text, View,ImageBackground ,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SignUp= () => {
  return(
    <View>
      {/* <View style={{width:150,height:150,backgroundColor:'transparent',alignSelf:'flex-end'}}/> */}
      <KeyboardAvoidingView behavior='position'>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#C21313" translucent = {false}/>
    <Text style={styles.textStyle}>SIGN UP</Text>
    <TextInput 
      label="Username"
      theme={{colors:{primary:"#C21313"}}}
      style={{marginLeft:18,marginRight:18,marginTop:18}}
      mode='outlined'
      />
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
      SIGN UP
    </Button>
    <TouchableOpacity>
      <Text style={{ fontSize:20, marginLeft:70,marginTop:18,color:'#C21313'}}>Already have an account ?</Text>
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

export default SignUp;