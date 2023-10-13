import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';

import DrawerContent from './Screens/Drawer/DrawerContent';
import Home from './Screens/Drawer/Home';
import Search from './Screens/Drawer/Search';
import Events from './Screens/Drawer/Events';
import Packages from './Screens/Drawer/Packages';
import Blog from './Screens/Drawer/Blog';
import About from './Screens/Drawer/About';
import Contact from './Screens/Drawer/Contact';
import Categories from './Screens/Drawer/Categories';

function MyDrawer({navigation}) {
  return(
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} navigation={navigation} />}>
    <Drawer.Screen name="Home" component={Home} options={{headerStyle: {backgroundColor: '#d61e1e'},headerTintColor: 'white'}}/>
    <Drawer.Screen name="Search" component={Search} options={{title:"Advance Search",headerStyle: {backgroundColor: '#d61e1e'},headerTintColor: 'white'}}/>
    <Drawer.Screen name="Events" component={Events} options={{title:"Public Events",headerStyle: {backgroundColor: '#d61e1e'},headerTintColor: 'white'}}/>
    <Drawer.Screen name="Packages" component={Packages} options={{headerStyle: {backgroundColor: '#d61e1e'},headerTintColor: 'white'}}/>
    <Drawer.Screen name="Blog" component={Blog} options={{headerStyle: {backgroundColor: '#d61e1e'},headerTintColor: 'white'}}/>
    <Drawer.Screen name="About" component={About} options={{title:"About Us",headerStyle: {backgroundColor: '#d61e1e'},headerTintColor: 'white'}}/>
    <Drawer.Screen name="Contact" component={Contact} options={{title:"Contact Us",headerStyle: {backgroundColor: '#d61e1e'},headerTintColor: 'white'}}/>
    <Drawer.Screen name="Categories" component={Categories} options={{headerStyle: {backgroundColor: '#d61e1e'},headerTintColor: 'white'}}/>
    <Drawer.Screen name="SignIn" component={SignIn}/>
  </Drawer.Navigator>
)};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawerkey">
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Drawerkey" component={MyDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
