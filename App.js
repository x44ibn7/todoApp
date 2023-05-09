import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity,  } from 'react-native';
import Task from './components/Task';



export default function App() {







    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
  
    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }
  
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);
      } 

  return (
    <View style={styles.container}>

    
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
      <View style={styles.items}>
        {/*This is where tasks will go*/}
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
        })
          }        
      </View>
    </View>   

    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}   
    >
      <TextInput style={[styles.input, styles.shadowProp]} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={[styles.addWrapper, styles.shadowProp]}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>


    
  );
}
const colorBackdrop = "#252525";
const colorText = "#FFFFFF";
const colorBorder = "#939393";
const colorItems = "#777777";
const gradient1 = "#4200FF";
const gradient2 = "#FF00E5";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colorBackdrop}`,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: `${colorText}`,
  },
  items: {
    marginTop: 35,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 260,
    height: 40,
    backgroundColor: `${colorItems}`,
    borderRadius: 8,
    borderColor: `${colorBorder}`,
    borderWidth: 1,
    marginBottom: 10,
  },
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: `${colorItems}`,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: `${colorBorder}`,
    borderWidth: 1,
    marginBottom: 10,
  },
  addText: {},
  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
},
});
