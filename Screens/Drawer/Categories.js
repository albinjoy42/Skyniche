import React from "react";
import { Text, View,StyleSheet } from "react-native";

function Categories(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
        </View>
    )
}
export default Categories;

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