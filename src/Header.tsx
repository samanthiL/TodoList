import React from 'react';
 import { Image,FlatList, ScrollView, StyleSheet,Button, Text, TouchableOpacity,TextInput, View } from 'react-native';

export default function Header() {
    return (

        <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}} >

<View style={{margin:28}} >
            <Text style={{fontSize:24,color:'grey'}}>Hello,</Text> 
            <Text style={{fontSize:28,fontWeight:'bold'}}>Abdur Rahman</Text> 
      </View>
      <Image style={{ marginTop:30,height:60,width:60}} source={require("../assets/Male.png")} />
      {/* <Image source={Male}  /> */}
     
        </View>

        </View>
    )
}