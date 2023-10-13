import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Packages() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Packages</Text>
        </View>
    )
}
export default Packages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
})