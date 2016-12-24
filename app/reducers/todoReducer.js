import ACTION_TYPES from '../actions/actionTypes';

export function todoReducer(state={ todoList: {} }, action) {
    const todoList = { ...state.todoList };
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO:
            const newId = Object.keys(todoList).length;
            todoList[`todo${newId}`] = action.item
            return { ...state, todoList };
        case ACTION_TYPES.REMOVE_TODO:
            delete todoList[action.id];
            return { ...state, todoList };          
        default:
            return state;
    }
};
