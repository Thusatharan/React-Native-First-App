import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView, FlatList} from 'react-native';
import GoalItem from './components/listItem';
import InputItem from './components/inputItem'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [listGoal, setListGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const onPressAdd = () => {
    setListGoal(currentList => [...listGoal, {id: Math.random().toString(), value: enteredGoal }]);
  }



  return (
    <View style={styles.mainContainer}>
    
    <InputItem handler={goalInputHandler} enteredGoal={enteredGoal} onPressAdd={onPressAdd}/>
      <FlatList
      keyExtractor= {(item, index) => item.id}
      data = {listGoal}
      renderItem= {itemData => (
       <GoalItem title={itemData.item.value}/>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50,
  },

});
