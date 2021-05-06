import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Main from './src/Main';
import Settings from './src/Settings';
import Welcome from './src/Welcome'
import Icon from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

const App: React.FC = (prop) => {

  function MyTabs() {
    return (

      <Tab.Navigator

      >
        <Tab.Screen name="Welcome" component={Welcome} options={{
          tabBarVisible: false


        }} />
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }} />

        <Tab.Screen name="Main" component={Main} options={{
          tabBarLabel: 'Main',
          tabBarIcon: ({ color, size }) => (
            <Icon name="pluscircleo" color={'#FA4C5C'} size={size}  />
          ),
        }} />
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="setting" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>

      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  header: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

    backgroundColor: '#b6c4d4'
  },
  redbox: {
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


export default App;