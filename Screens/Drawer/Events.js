import React from "react";
import { Text, View,StyleSheet } from "react-native";

function Events(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Public Events</Text>
        </View>
    )
}
export default Events;

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