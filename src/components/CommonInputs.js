import React from 'react';
import { View, StyleSheet,KeyboardAvoidingView} from 'react-native';
import { Button, TextInput} from 'react-native-paper';
import Spacer from './Spacer';

const CommonInputs = ({BtnText}) => {
    // const [screen, setScreen] = useState(false);
    return (
        <View>
            <Spacer>
                <TextInput
                    label='Email'
                    mode='flat'
                    placeholder='user@gmail.com'
                    selectionColor="#c21313"
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <TextInput
                    label='Password'
                    secureTextEntry
                    mode='flat'
                    placeholder='password'
                    selectionColor="#c21313"
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Button
                    mode="contained"
                    dark
                    onPress={() => console.log('Pressed')}>
                    {BtnText}
                </Button>
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginLeft: 15,
        fontSize: 18,
    },
    icon: {
        textAlign: 'center',
        color: "#6495ED",
    }

});

export default CommonInputs;

// {errorMessage ?
                //     <Text style={styles.error}>{errorMessage}</Text> :
                //     null}