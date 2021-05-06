import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { FlatList, ScrollView, StyleSheet, Text, Image, TouchableOpacity, TextInput, View, Button } from 'react-native';
const Welcome: React.FC = () => {

    const navigation = useNavigation();


    return (
        <View>
            <ScrollView>

                <View style={{ padding: 23, marginTop: 13, backgroundColor: 'white' }}>
                    <Image style={{ padding: 20, height: 160, width: 150, marginLeft: 36 }} source={require("../assets/Hand.png")} />

                    <Text style={{ fontSize: 23, textAlign: 'center', marginTop: 23, fontWeight: 'bold' }}>    Organize your works </Text>

                    <Text style={{ fontSize: 16, textAlign: 'center' }}>Let's oraganize your works priority and do everything without stress </Text>


                    <TouchableOpacity style={styles.important} onPress={() => navigation.navigate("Home")} ><Icon name="facebook-square" color={'blue'} size={30} />
                        <Text style={{ margin: 10 }}>Continue with Facebook</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.important} onPress={() => navigation.navigate("Home")}><Icon name="google" color={'blue'} size={30} /><Text style={{ margin: 10 }}>Continue with Google</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.important} onPress={() => navigation.navigate("Home")}><Icons name="email" color={'#3E3A4B'} size={30} /><Text style={{ margin: 10 }}>Continue with email</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>



    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: '#fff'
    },

    redbox1: {
        textAlign: 'center',
        borderRadius: 13,
        width: "100%",
        marginTop: 20,
        backgroundColor: '#B6C4D4'
    },
    important: {
        textAlign: 'center',
        borderRadius: 13,
        padding: 8,
        marginTop: 8,
        flexDirection: 'row',
        backgroundColor: '#B6C4D4'
    },
    redbox: {
        marginTop: 12,
        textAlign: 'center',
        borderRadius: 13,
        width: "40%",
        backgroundColor: '#b6c4d4'

    },
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10
    },

});

export default Welcome;