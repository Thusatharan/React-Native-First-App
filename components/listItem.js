import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ListItem = props => {
    return (
        <Text style={styles.listItem}> {props.title} </Text>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        margin: 10,
        marginHorizontal: 20,
        backgroundColor: 'grey',
        color: 'white',
    
      }
});

export default ListItem;