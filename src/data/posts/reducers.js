import { combineReducers } from 'redux';
import * as ActionTypes from '@/data/rootActionTypes';

function entities(state = [], action) {
    switch (action.type) {
        case ActionTypes.FETCH_POSTS:
            return action.payload;
        default:
            return state;
    }
}

function edit(state = { title: '', body: '' }, action = {}) {
    switch (action.type) {
        case ActionTypes.EDIT_POST_BODY:
            return { ...state, body: action.body };
        case ActionTypes.EDIT_POST_TITLE:
            return { ...state, title: action.title };
        default:
            return state;
    }
}

// export function seq(state = 0, action) {
//     switch (action.type) {
//         case ActionTypes.GET_SEQ:
//             return action.payload;
//         default:
//             return state;
//     }
// }

export default combineReducers({
    entities,
    edit,
});
