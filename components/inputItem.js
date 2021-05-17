import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


const InputItem = props => {
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Goal" style={styles.inputBox} onChangeText={props.handler} value={props.enteredGoal} />
        <Button title="ADD" style={styles.addButton} onPress={props.onPressAdd} />
      </View>
    );
};


export default InputItem;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    
      inputBox: {
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        padding: 10,
        width: '70%',
    
      },
    
      addButton: {
      },
    
})