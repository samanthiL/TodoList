
import React, { useState } from 'react';
import { StyleSheet, Button, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
const Main: React.FC = () => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [choosendate, setchoosendate] = useState('');


  const navigation = useNavigation();

  const passdata = (task: string, type: string, choosendate: string) => {
    var tt = 'sdsd';

    var task = task;
    var type = type;
    var choosendate = choosendate;


    console.log("dfsfs", task, type, choosendate);
    navigation.navigate("Home", { task: task, type: type, choosendate: choosendate });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (datetime: Date) => {
    setDatePickerVisibility(false);
    setchoosendate(moment(datetime).format('MMMM, Do YYYY HH:mm'));
  };

  const handleConfirm = (datetime: Date) => {
    console.log("A date has been picked: ", datetime);
    hideDatePicker(datetime);
  };


  const [task, setTask] = useState('');

  const changeHandler = (val: string) => {
    setTask(val);
  }


  const [type, settype] = useState('')

  return (
    <View style={styles.container}>

      <View style={{ marginTop: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 26, padding: 25 }}>Create a Task</Text>


        <Text>Task</Text>
        <TextInput
          style={styles.input}
          placeholder="new task"
          onChangeText={changeHandler}
        />
        <Text>Task type</Text>
        <View style={{ flexDirection: 'row' ,marginBottom:12}} >

          <TouchableOpacity style={styles.important} onPress={() => settype('Important')} >
            <Text style={{ textAlign: "center", padding: 6, color: "white", fontSize: 20 }}>Important</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.important} onPress={() => settype('Planned')} >
            <Text style={{ textAlign: "center", padding: 6, color: "black", fontSize: 20 }}>Planned</Text>
          </TouchableOpacity>

        </View>
        <Text>Choose date and time</Text>

                     <TouchableOpacity style={styles.picker}  onPress={() => showDatePicker()} >
                     <Text style={styles.button}>Show Date Picker</Text>
          </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={'datetime'}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <TouchableOpacity style={styles.done} onPress={() => passdata(task, type, choosendate)} >
          
          <Text style={styles.button}>Done</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'black',
    width: 234

  },
  header: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,

    padding: 12,
    backgroundColor: '#fff',

  },
  button:{
textAlign:'center',
fontSize:20
  },
  redbox1: {
    textAlign: 'center',
    borderRadius: 13,
    width: "100%",
    marginTop: 20,
    backgroundColor: '#B6C4D4'
  },
picker:{
   
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#b6c4d4' 
  
},
  done:{
   
    borderRadius: 10,
    padding: 10,
    width: "50%",
    marginTop: 42,
    marginLeft:50,
    marginRight:50,
    backgroundColor: '#FA4C5C' 
  },
  important: {
    marginRight: 2,
    textAlign: 'center',
    borderRadius: 10,
    padding: 10,
    width: "50%",

    marginTop: 12,
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


export default Main;