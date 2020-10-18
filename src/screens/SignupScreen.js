import React from 'react';
import { StatusBar, StyleSheet, View,Image, KeyboardAvoidingView } from 'react-native';
import {TextInput,Title} from 'react-native-paper';
import CommonInputs from '../components/CommonInputs';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';
import Curve from '../components/curve';

const SignUp=(props)=>{
    return(
        <View style={styles.container}>
            <StatusBar
                barStyle='dark-content'
                hidden={true}
            />
            <Curve/>
            <Title style={styles.text}>Sign Up</Title>
            <Spacer>
            <TextInput
                label="Username"
                mode="flat"
                placeholder="XXX"
                selectionColor="#c21313"
                autoCapitalize='none'
                autoCorrect={false}
            />
            </Spacer>
            <CommonInputs
                BtnText='Sign Up'
            />
            <NavLink
                navText="Already have an account ? Sign in instead"
                nav={props.navigation}
                navRoute='Signin'
           />
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        borderWidth:2,
        borderColor:'#000',
    },
    curve:{
        position:'absolute',
        top:0,
        right:0,
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "200",
        textTransform: 'uppercase',
        color: '#c21313',
    },
})
export default SignUp;
// <Image source={require('../../assets/trans2.png')} style={styles.curve}/>