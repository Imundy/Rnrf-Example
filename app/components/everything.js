import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import GroceryList from './groceryList';
import TodoList from './todoList';

export default class Everything extends React.Component {
    render() {
        return(
        <ScrollView>
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={() => { Actions.lists(); }}>
                    <Text style={styles.buttonText}>Go to Add screen</Text>
                </TouchableHighlight>
                <TodoList />
                <GroceryList />
            </View>
        </ScrollView>
        );
    }
}

const styles = {
    container: {
        marginTop: 80,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
    }
};
