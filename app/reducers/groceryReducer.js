import ACTION_TYPES from '../actions/actionTypes';

export function groceryReducer(state={ groceryList: {} }, action) {
    const groceryList = { ...state.groceryList };
    switch(action.type) {
        case ACTION_TYPES.ADD_GROCERY:
            const newId = Object.keys(groceryList).length;
            groceryList[`grocery${newId}`] = action.item
            return { ...state, groceryList };
        case ACTION_TYPES.REMOVE_GROCERY:
            delete groceryList[action.id];
            return { ...state, groceryList };          
        default:
            return state;
    }
};