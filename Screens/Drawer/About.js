import React from "react";
import { Text, View,StyleSheet } from "react-native";

function About(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>About Us</Text>
        </View>
    )
}
export default About;

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