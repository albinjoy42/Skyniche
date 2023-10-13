import React from "react";
import { Text, View,StyleSheet } from "react-native";

function Blog(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Blog</Text>
        </View>
    )
}
export default Blog;

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