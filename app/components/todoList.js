import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { removeFromTodoList } from '../actions';

mapStateToProps = (state) => ({ todoList: state.todoReducer.todoList });

mapDispatchToProps = (dispatch) => ({
    removeTodoItem: (todoItem) => {
        dispatch(removeFromTodoList(todoItem));
    },
});

class TodoList extends React.Component {
    render(){
        const { todoList, removeTodoItem } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>To Do</Text>
                    { 
                        Object.keys(todoList).map((itemId) => {
                            return (
                                <TouchableHighlight key={itemId} onPress={() => {removeTodoItem(itemId)}}>
                                    <Text>{ todoList[itemId] }</Text>
                                </TouchableHighlight>
                            );
                        })
                    }
                </View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = {
    container: {
        marginTop: 80,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
    },
};
