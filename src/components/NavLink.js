import React from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink=({navText,nav,navRoute})=>{
    // console.log(props);
    return(
        <View>
        <Spacer>
        <TouchableOpacity
             onPress={()=>{nav.navigate(navRoute)}}>
                <Text style={styles.link}>{navText}</Text>
        </TouchableOpacity>
        </Spacer>
        </View>
    );
}

const styles=StyleSheet.create({
    link:{
        color:'#c21313',
        fontSize:18,
        marginLeft:"8%",
    }
});

export default withNavigation(NavLink);