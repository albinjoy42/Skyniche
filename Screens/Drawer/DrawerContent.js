import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function DrawerContent({ navigation }) {
    const closedrawer = () => {
        navigation.dispatch(DrawerActions.closeDrawer());
    }
    return (
        <View style={styles.container}>
            <View style={styles.drawerlistcontainer}>
            <View style={{marginTop:10,paddingLeft:190}}>
                <View style={{borderColor:"#ffffff",borderWidth:1,width:23,borderRadius:5}}>
                <Icon name="close" size={20} color="#ffffff" onPress={closedrawer}/>
                </View>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <Icon name='home' color='#ffffff' size={20} />
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Home')}>Home</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <Icon name='search' color='#ffffff' size={20} />
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Search')}>Advanced Search</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <Icon name='calendar-month' color='#ffffff' size={20} />
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Events')}>Public Events</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <Icon name='sell' color='#ffffff' size={20} />
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Packages')}>Packages</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <Icon name='format-bold' color='#ffffff' size={20} />
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Blog')}>Blog</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <Icon name='groups' color='#ffffff' size={20} />
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('About')}>About Us</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <Icon name='contact-mail' color='#ffffff' size={20} />
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Contact')}>Contact Us</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <Icon name='category' color='#ffffff' size={20} />
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Categories')}>Categories</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <Icon name='login' color='#ffffff' size={20} />
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('SignIn')}>Login / Register</Text>
                </View>
            </View>
        </View>
    )
}
export default DrawerContent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    drawerlistcontainer: {
        flexDirection: 'column',
        width: "100%",
        marginLeft: 30,
    },
    drawerlistitemcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "75%",
        height: 75,
    },
    draweritem: {
        paddingLeft: "4%",
        color: "#ffffff",
        fontSize: 15
    },
}) 