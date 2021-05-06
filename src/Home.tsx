import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { RefreshControl, SafeAreaView, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Header from './Header';
import Swiper from 'react-native-swiper';

const Tab = createBottomTabNavigator();

const Home: React.FC = (prop: any) => {

  const [todo, setodo] = useState([
    {

      task: 'Meeting with Alex *',
      time: '12.30 PM-01.00 PM',
      id: 1
    },
    {
      task: 'Project Review:Crodox*',
      time: '2.30 PM-01.45 PM',
      id: 2
    },

    {
      task: 'Meeting with Mark *',
      time: '12.30 PM-01.00 PM',
      id: 3
    },
  ])
  const [complete, setcomplete] = useState(['']);

  const showdata = () => {
    var tasks = prop.route.params.task;
    var types = prop.route.params.type;
    var choosendate = prop.route.params.choosendate;

    console.log("data", tasks, types, choosendate);
    setodo((prevTodo: any) => {
      return [
        {
          task: tasks, time: choosendate, key: Math.random().toString()
        },
        ...prevTodo
      ]
    });
  }

  const presshandler = (id: number, task: string, time: string) => {

    setcomplete((prevTodos: any) => {
      return [
        {
          id: id, task: task, time: time, key: Math.random().toString()
        },
        ...prevTodos
      ]
    });

    setodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != id);
    });

  };


  return (
    <View style={styles.header}>

      <Header />
      <ScrollView>

        <View style={styles.container}>

          <Swiper style={{ height: 120, marginTop: 5 }} >
            <TouchableOpacity style={styles.redbox}>
              <Text style={{ textAlign: "center", padding: 10, color: "white", fontSize: 20 }}>My Day</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.important}>
              <Text style={{ textAlign: "center", padding: 10, color: "white", fontSize: 23 }}>Important</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.important}>
              <Text style={{ textAlign: "center", padding: 10, color: "black", fontSize: 23 }}>Important</Text>
            </TouchableOpacity>

          </Swiper>
          <View style={{ flexDirection: 'row' }} >
            <Text style={{ textAlign: 'left', marginRight: 62, marginTop: 20 }}>Tasks</Text>

            <TouchableOpacity style={styles.important} onPress={() => showdata()}>
              <Text style={{ textAlign: "center", padding: 10, color: "white", fontSize: 16 }}>View all task</Text>
            </TouchableOpacity>

          </View>



          <FlatList
            data={todo}
            renderItem={({ item }) =>

              <TouchableOpacity onPress={() => presshandler(item.id, item.task, item.time)}>

                <Text style={styles.item}>{item.task}
                  {item.time}</Text>

              </TouchableOpacity>
            }

          />
          <View style={styles.container}>

            <Text>Completed task</Text>
            <FlatList
              data={complete}
              renderItem={({ item }: any) =>

                <TouchableOpacity>

                  <Text style={styles.item}>{item.id} {item.time}{item.task}</Text>

                </TouchableOpacity>

              }
            />


          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    margin: 16,
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

    backgroundColor: '#1F145C'

  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10
  },

});


export default Home;