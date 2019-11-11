import * as ActionTypes from '@/data/rootActionTypes';

export default function comments(state = [], action = {}) {
    switch (action.type) {
        case ActionTypes.FETCH_COMMENTS:
            return action.payload;
        // case ActionTypes.ADD_COMMENT: {
        //     const previewComments = state[action.postId] ? state[action.postId] : [];
        //     const comments = [
        //         {
        //             seq: previewComments.length,
        //             contents: action.contents,
        //             writer: action.writer,
        //             createAt: Date.now(),
        //         },
        //         ...previewComments,
        //     ];
        //     return {
        //         ...state,
        //         [action.postId]: comments,
        //     };
        // }
        default:
            return state;
    }
}
