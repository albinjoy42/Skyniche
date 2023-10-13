import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';

function SignIn({navigation}) {
    return (
        <ImageBackground source={require('../src/Images/peakpx.jpg')} style={styles.bgImage}>
            <View style={styles.overlay}>
                <Text style={styles.title}>Find & Explore World Top Places</Text>
                <TouchableHighlight style={styles.signinButton} onPress={()=>{navigation.navigate('SignUp')}}>
                    <Text style={styles.signinButtonText}>Sign In</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.signupButton}onPress={() => { navigation.navigate("SignUp")}}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )};
export default SignIn;

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        width: "70%",
        textAlign: 'center'
    },
    signinButton: {
        width: "60%",
        height: 40,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 0.5,
        borderRadius: 3,
        marginTop: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signinButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    signupButton: {
        width: "60%",
        height: 40,
        backgroundColor: '#d61e1e',
        borderRadius: 3,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
});
