import { combineReducers } from 'redux';
import * as ActionTypes from '@/data/rootActionTypes';

function entities(state = {}, action = {}) {
    switch (action.type) {
        case ActionTypes.ADD_POST:
            return {
                ...state,
                [Object.keys(state).length]: {
                    seq: Object.keys(state).length,
                    writer: action.user,
                    contents: action.contents,
                    createAt: Date.now(),
                    likes: 0,
                    comments: 0,
                    likesOfMe: false,
                },
            };
        case ActionTypes.LIKE_POST: {
            const newLikedPost = { ...state[action.postId] };
            if (newLikedPost.likesOfMe === false) newLikedPost.likes += 1;
            newLikedPost.likesOfMe = true;
            return {
                ...state,
                [action.postId]: newLikedPost,
            };
        }
        default:
            return state;
    }
}

function ids(state = [], action = {}) {
    switch (action.type) {
        case ActionTypes.GET_POSTS:
            return [...state, ...action.posts.map((p) => p.seq)];
        case ActionTypes.ADD_POST:
            return [state.length, ...state];
        default:
            return state;
    }
}

export default combineReducers({
    entities,
    ids,
});
