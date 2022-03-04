import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';




const styles = StyleSheet.create({
  
  header: {
    backgroundColor: '#65C18C',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto'
  },
  heading: {
    fontSize: 40,
    color: 'white'
  },
  inputCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    width: '70%',
    backgroundColor: 'White',
    color: 'black',
    fontSize: 20,
    borderRadius: 7,
    borderColor: '#FFBED8',
    marginHorizontal: 'auto'
  },
  list: {
  backgroundColor: '#FFBED8'
  },
  addbtn: {
    color: 'white',
    fontSize: 20
  },
  addbtnColor: {
    backgroundColor: '#65C18C',
    width: '20%',
    alignItems: 'center'
  },
  todoItem: {
    fontSize: 20,
    padding: 10
  },
  btn: {

    backgroundColor: '#65C18C',
    width: '110%',
    alignItems: 'center',
    color: 'white',
    fontSize: 17,
    marginLeft: '3%',
  },
  flexBet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,

  }
})

function App() {

  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(false)
  const [indexVAL, setIndexVAL] = useState()


  const add = () => {
    if (edit) {
      list[indexVAL] = text
      setList([...list])
      setEdit(false)
    } else {
      setList([...list, text])
      setText('')
    }
  }

  const delTodo = (ind) => {
    list.splice(ind, 1)
    setList([...list])
  }

  const editTodo = (ind) => {
    setText(list[ind])
    setEdit(true)
    setIndexVAL(ind)
  }


  return <>
    <View >
      <View style={styles.header}>
        <Text style={styles.heading}>TODO APP</Text>
      </View>
      <View style={styles.inputCenter}>
        <TextInput value={text} onChangeText={(e) => setText(e)} style={styles.input} placeholder='Enter Todo' />
        <TouchableOpacity style={styles.addbtnColor} onPress={add}>
          <Text style={styles.addbtn}>Add</Text>
        </TouchableOpacity>

      </View>

      <View>
        <ScrollView>
          {list.map((e, i) => <View style={styles.flexBet} key={i}>
            <Text style={styles.todoItem}>{e}</Text>
            <View style={styles.flexBet}>
              <TouchableOpacity onPress={() => delTodo(i)}>
                <Text style={styles.btn}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => editTodo(i)}>
                <Text style={styles.btn}>Edit</Text>
              </TouchableOpacity>
              </View>
          
          </View>)}
        </ScrollView>
      </View>
    </View>

  </>

}

export default App