import React from "react";
import { Text, View,StyleSheet } from "react-native";

function Contact(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Contact Us</Text>
        </View>
    )
}
export default Contact;

const styles=StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
})