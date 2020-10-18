import React from 'react';
import { StatusBar, StyleSheet, View,Image, KeyboardAvoidingView} from 'react-native';
import {Title} from 'react-native-paper';
import CommonInputs from '../components/CommonInputs';
import NavLink from '../components/NavLink';
import Curve from '../components/curve';
 
const SigninScreen=(props)=>{
    return(
        <View style={styles.container}>
            <StatusBar
                barStyle='dark-content'
                hidden={true}
            />
            <Curve/>
            <Title style={styles.text}>Sign In</Title>
            <CommonInputs
                BtnText='Sign In'
            />
            <NavLink
                navText="Don't have an account ? Click to Sign up"
                nav={props.navigation}
                navRoute='Signup'
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
});

export default SigninScreen;
// <Image source={require('../../assets/trans2.png')} style={styles.curve}/>