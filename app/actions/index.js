import ACTION_TYPES from './actionTypes';

export const addToGroceryList = (item) => {
    return { type: 'ADD_GROCERY', item };
}

export const removeFromGroceryList = (id) => {
    return { type: 'REMOVE_GROCERY', id };
}

export const addToTodoList = (item) => {
    return { type: 'ADD_TODO', item };
}

export const removeFromTodoList = (id) => {
    return { type: 'REMOVE_TODO', id };
}
