import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SignUp({ navigation }) {
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [pwd,setPwd] = useState("");
    const checkData=()=>{
        if (name==""){
            alert("Please enter your name");
        }
        else if(mail==""){
            alert("Please enter your email address");
        }
        else if(pwd==""){
            alert("Please enter a password")
        }
        else {
            navigation.navigate('Drawerkey');}
        }
    return (
        <ImageBackground source={require('../src/Images/peakpx.jpg')} style={styles.bgImage}>
            <View style={styles.overlay}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='navigate-before' size={26} color="#D5D5D5" style={{ margin: 20 }} onPress={()=>{navigation.navigate('SignIn')}}/>
                    <Text style={styles.head}>Sign Up</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={styles.title}>Find & Explore World Top Places</Text>
                    <View style={styles.inputContainer}>
                        <Icon name="person" size={24} color="#fff" style={styles.inputIcon} />
                        <TextInput style={styles.txtbox} placeholder='Enter Your Name' placeholderTextColor="white" onChange={setName}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="mail" size={24} color="#fff" style={styles.inputIcon} />
                        <TextInput style={styles.txtbox} placeholder='Your Email Address' placeholderTextColor="white" keyboardType='email-address' onChange={setMail}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={24} color="#fff" style={styles.inputIcon} />
                        <TextInput style={styles.txtbox} placeholder='Your Password' placeholderTextColor="white" onChange={setPwd} secureTextEntry={true}></TextInput>
                    </View>
                    <TouchableHighlight style={styles.signupButton} onPress={checkData}>
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                    </TouchableHighlight>
                    <View style={{ flexDirection: 'row',marginTop:30, width:"70%",alignItems:'center',justifyContent:'space-around'}}>
                        <TouchableHighlight style={styles.facebookButton}>
                            <Text style={styles.signupButtonText}>Facebook</Text>
                        </TouchableHighlight>
                        <Text style={styles.signupButtonText}>OR</Text>
                        <TouchableHighlight style={styles.googleButton}>
                            <Text style={styles.signupButtonText}>Google</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
};
export default SignUp;

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    head: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 190,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        width: "70%",
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 50
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        height: 40,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 0.5,
        borderRadius: 3,
        marginTop: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    inputIcon: {
        marginLeft: 10,
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
        fontWeight: 'bold',
    },
    facebookButton: {
        width: "40%",
        height: 40,
        backgroundColor: '#1877Fa',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleButton: {
        width: "40%",
        height: 40,
        backgroundColor: '#d63e4e',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

