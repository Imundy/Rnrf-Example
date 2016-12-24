import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { addToGroceryList, addToTodoList } from '../actions';

mapStateToProps = (state) => state;

mapDispatchToProps = (dispatch) => ({
    addGroceryItem: (groceryItem) => {
        dispatch(addToGroceryList(groceryItem));
    },
    addTodoItem: (todoItem) => {
        dispatch(addToTodoList(todoItem));
    },
});

class Lists extends React.Component {
    state = {
        groceryItem: '',
        todoItem: '',
    }
    render() {
        const { addTodoItem, addGroceryItem } = this.props;
        const { groceryItem, todoItem } = this.state;
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder="Add grocery item" onChangeText={(text) => this.setState({groceryItem: text})} />
                <TouchableHighlight style={styles.button} onPress={() => { addGroceryItem(groceryItem); }}>
                    <Text style={styles.buttonText}>Add Grocery item</Text>
                </TouchableHighlight>
                <TextInput style={styles.textInput} placeholder="Add todo item" onChangeText={(text) => this.setState({todoItem: text})} />                
                <TouchableHighlight style={styles.button} onPress={() => { addTodoItem(todoItem); }}>
                    <Text style={styles.buttonText}>Add Todo</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={() => { Actions.everything(); }}>
                    <Text style={styles.buttonText}>See everything!</Text>
                </TouchableHighlight>
            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);

const styles = {
    container: {
        marginTop: 80,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxHeight: 400,
        alignItems: 'center',
    },
    textInput: {
        alignSelf: 'stretch'
    },
    button: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
    }
};
