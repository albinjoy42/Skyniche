import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, ActivityIndicator, FlatList, Image, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';
function Home() {
    const [srch, setSearch] = useState("");
    const [loader, setLoader] = useState(false);
    const [fetchedData, setData] = useState([]);
    const [rating, setRating] = useState(3);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        setTotalResults(fetchedData.length);
    }, [fetchedData]);

    const handleStarRatingPress = (rating) => {
        setRating(rating);
    };
      
    const searchPlace = async () => {
        if (srch === "") {
            alert("Please enter a place name");
        } else {
            setLoader(true);
            const url = 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete';
            const options = {
                method: 'GET',
                params: {
                    text: srch,
                    languagecode: 'en-us'
                },
                headers: {
                    'X-RapidAPI-Key': '95556bc841msh2cd00ce5e8c6c15p1848fejsn8e6d184a44a1',
                    'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
                }
            };
            axios.get(url, options)
                .then((response) => {
                    if (response.data.length > 0) {
                        setData(response.data);
                    }
                    setLoader(false);
                    console.log('YOUR AXIOS RESPONSE IS:', response.data);
                })
                .catch((error) => {
                    setLoader(false);
                    console.log('AXIOS ERROR:', error);
                });
        }

    }

    const renderData = ({ item }) => {
        console.log("Rendering item : ", item);
        return (
            <View style={styles.flatlistContainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 5 }}>
                    <TouchableHighlight style={{ backgroundColor: "#f0da13", height: 25, width: 73, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                        <Text style={{ color: '#555555', fontSize: 11 }}>Always Open</Text>
                    </TouchableHighlight>
                    <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100, zIndex: -1, marginTop: -30 }} />
                </View>
                <View style={{ width: "60%", marginLeft: 10 }}>
                    <Text style={{ color: "#808080", fontSize: 16 }}>{item.dest_type}</Text>
                    <Text style={{ color: "#000000", fontSize: 20, fontWeight: 'bold' }}>{item.city_name}</Text>
                    <Text style={{ color: "#808080", fontSize: 16 }}>{item.label}</Text>
                    <Text style={{ color: "#808080", fontSize: 16 }}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={rating}
                            starSize={12}
                            fullStarColor="#f0da13"
                            selectedStar={(rating) => handleStarRatingPress(rating)} /> | Views {item.dest_id}</Text>
                    <Text style={{ color: "#808080", fontSize: 16 }}>{item.country}</Text>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.txtbxBg}>
                    <TextInput
                        style={styles.txtbox}
                        placeholder="What are you looking for.."
                        placeholderTextColor="#000000"
                        value={srch}
                        onChangeText={text => setSearch(text)}
                    />
                    <Icon name="search" color="#000000" size={25} onPress={searchPlace} />
                </View>
            </View>
            <View style={styles.sortTab}>
                <TouchableHighlight style={{ width: "33%", alignItems: 'center', justifyContent: 'center', borderRightColor: "#ffffff", borderRightWidth: 0.4, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ transform: [{ rotate: '90deg' }] }}><Icon name="tune" size={23} color="#ffffff" /></View>
                        <Text style={styles.sortText}>Filter</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{ width: "33%", alignItems: 'center', justifyContent: 'center', borderRightColor: "#ffffff", borderRightWidth: 0.4, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="sort" size={23} color="#ffffff" />
                        <Text style={styles.sortText}>Sort</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{ width: "33%", alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="restart-alt" size={23} color="#ffffff" />
                        <Text style={styles.sortText}>Reset</Text>
                    </View>
                </TouchableHighlight>
            </View>
            {loader ?
            <View style={{height:500,alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator size={30} color="#d61e1e" animating={loader} style={{ alignItems: 'center', justifyContent: 'center' }} />
                </View> :
                <View style={{height:560,width:"100%",backgroundColor:"#ffffff"}}>
                <Text style={styles.totalResultsText}>{totalResults} results found</Text>
                <FlatList
                    style={{ width: '100%', backgroundColor: "#e1e1e1" }}
                    data={fetchedData}
                    renderItem={renderData}
                />
                </View>}
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    searchContainer: {
        flexDirection: "row",
        width: "100%",
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#d61e1e",
    },
    txtbxBg: {
        backgroundColor: "#ffffff",
        width: "80%",
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtbox: {
        width: "80%",
        height: 50,
        color: "#000000",
    },
    flatlistContainer: {
        height: 160,
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
        elevation: 2,
        backgroundColor: "#ffffff",
        borderRadius: 8
    },
    sortTab: {
        width: "100%",
        backgroundColor: "#000000",
        height: 50,
        flexDirection: 'row'
    },
    sortText: {
        color: "#ffffff",
        fontSize: 16,
        marginLeft: 5
    },
    totalResultsText: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
        marginLeft:10,
        color:"#000000",
        height:30
    }
});