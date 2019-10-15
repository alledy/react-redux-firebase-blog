import { combineReducers } from 'redux';
import * as ActionTypes from '@/data/rootActionTypes';

// function entities(state = {}, action = {}) {
//     switch (action.type) {
//         case ActionTypes.ADD_POST:
//             return {
//                 ...state,
//                 [Object.keys(state).length]: {
//                     seq: Object.keys(state).length,
//                     writer: action.user,
//                     title: action.title,
//                     contents: action.contents,
//                     createAt: Date.now(),
//                     likes: 0,
//                     comments: 0,
//                     likesOfMe: false,
//                 },
//             };
//         case ActionTypes.LIKE_POST: {
//             const newLikedPost = { ...state[action.postId] };
//             if (newLikedPost.likesOfMe === false) newLikedPost.likes += 1;
//             newLikedPost.likesOfMe = true;
//             return {
//                 ...state,
//                 [action.postId]: newLikedPost,
//             };
//         }
//         default:
//             return state;
//     }
// }

// function ids(state = [], action = {}) {
//     switch (action.type) {
//         case ActionTypes.FETCH_POSTS:
//             return [...state, ...action.posts.map((p) => p.seq)];
//         case ActionTypes.ADD_POST:
//             return [state.length, ...state];
//         default:
//             return state;
//     }
// }

function entities(state = {}, action) {
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

export function seq(state = 0, action) {
    switch (action.type) {
        case ActionTypes.INCREMENT_SEQ:
            return state + 1;
        default:
            return state;
    }
}

export default combineReducers({
    entities,
    edit,
});
