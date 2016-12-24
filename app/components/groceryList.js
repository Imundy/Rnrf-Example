import React from 'react';
import { ScrollView,View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { removeFromGroceryList } from '../actions';

mapStateToProps = (state) => ({ groceryList: state.groceryReducer.groceryList });

mapDispatchToProps = (dispatch) => ({
    removeGroceryItem: (groceryItem) => {
        dispatch(removeFromGroceryList(groceryItem));
    },
});

class GroceryList extends React.Component {
    render(){
        const { groceryList, removeGroceryItem } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Groceries</Text>
                    { 
                        Object.keys(groceryList).map((itemId) => {
                            return (
                                <TouchableHighlight key={itemId} onPress={() => {removeGroceryItem(itemId)}}>
                                    <Text>{ groceryList[itemId] }</Text>
                                </TouchableHighlight>
                            );
                        }) 
                    }
                </View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList);

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
