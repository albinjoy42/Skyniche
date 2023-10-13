import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableHighlight,ScrollView } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

function Search() {
    const [selectedCategory, setselectedCategory] = useState("");
    const [statusData, setStatus] = useState(false);
    const [ltoh, setLtoh] = useState(false);
    const [htol, setHtol] = useState(false);
    const handleToggleStatus = () => {
        setStatus(!statusData);
    };
    const handleToggleLtoh = () => {
        setLtoh(!ltoh);
    };
    const handleToggleHtol = () => {
        setHtol(!htol);
    };
    const category = ["Restaurants", "Hotels", "Shopping", "Entertainment", "Health and Fitness", "Schools", "Tourist Attractions"];
    const pricetype = ["USD", "INR", "Pound", "Euro"]
    return (
        <View style={styles.container}>
            <TextInput style={styles.textBox} placeholder="Search (e.g Pizza or Burger)" placeholderTextColor="#777777"></TextInput>
            <SelectDropdown
                data={category}
                buttonStyle={styles.textBox}
                defaultButtonText='Select Category'
                buttonTextStyle={styles.selectButtonText}
                dropdownStyle={{ backgroundColor: "#aaaaaa" }}
                rowTextStyle={styles.selectRowText}
                search={true}
                searchInputStyle={{ backgroundColor: "#666666" }}
                searchInputTxtStyle={{ color: '#ffffff' }}
                searchPlaceHolder="Search Category"
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                    setselectedCategory(selectedItem)
                }} />
            <SelectDropdown
                data={pricetype}
                buttonStyle={styles.textBox}
                defaultButtonText='Select Price Type'
                buttonTextStyle={styles.selectButtonText}
                dropdownStyle={{ backgroundColor: "#aaaaaa" }}
                rowTextStyle={styles.selectRowText}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                    setselectedCategory(selectedItem)
                }} />
            <Text style={{ color: "#000000", fontWeight: "bold", textAlign: 'left', marginTop: 20,width:"80%",fontSize:16}}>Status</Text>
            <TouchableHighlight style={[styles.statusbutton, statusData && styles.selectedButton]} onPress={handleToggleStatus}>
                <Text style={styles.statusbuttonText}>Open Now</Text>
            </TouchableHighlight>
            <Text style={{ color: "#000000", fontWeight: "bold", textAlign: 'left', marginTop: 20,width:"80%",fontSize:16}}>Rated As</Text>
            <View style={{flexDirection:"row",justifyContent:'space-between',width:"70%"}}>
            <TouchableHighlight style={[styles.statusbutton, ltoh && styles.selectedButton]} onPress={handleToggleLtoh}>
                <Text style={styles.statusbuttonText}>Low to High</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.statusbutton, htol && styles.selectedButton]} onPress={handleToggleHtol}>
                <Text style={styles.statusbuttonText}>High to Low</Text>
            </TouchableHighlight>
            </View>
            <TextInput style={styles.textBox} placeholder="Location" placeholderTextColor="#777777"></TextInput>
            <TextInput style={styles.textBox} placeholder="Current Location" placeholderTextColor="#777777"></TextInput>
            <TouchableHighlight style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableHighlight>
        </View>
    )
}
export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textBox: {
        color: 'black',
        width: 300,
        height: 40,
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        marginTop: 30
    },
    selectButtonText: {
        color: "#000000",
        textAlign: 'left',
        fontSize: 15,
        marginLeft: -2
    },
    selectRowText: {
        height: 20,
        color: "#000000",
        textAlign: 'left',
        fontSize: 15,
        marginLeft: 20
    },
    statusbutton: {
        backgroundColor: '#bbbbbb',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop:10
    },
    selectedButton: {
        backgroundColor: '#d95b68',
    },
    statusbuttonText: {
        color: '#000000',
        fontSize:15,
        fontWeight: 'bold',
    },
    searchButton: {
        width: "60%",
        height: 40,
        backgroundColor: '#d61e1e',
        borderRadius: 3,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
})