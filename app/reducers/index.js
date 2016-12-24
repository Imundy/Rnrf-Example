import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';

import { groceryReducer } from './groceryReducer';
import { todoReducer } from './todoReducer';

const sceneReducer = (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }    
}

export const appReducer = combineReducers({
    sceneReducer,
    groceryReducer,
    todoReducer,
});
