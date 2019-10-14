import * as ActionTypes from '@/data/rootActionTypes';

export function writePost(contents, user) {
    return {
        type: ActionTypes.ADD_POST,
        contents,
        user,
    };
}

export function getPosts(posts) {
    return {
        type: ActionTypes.GET_POSTS,
        posts,
    };
}

export function likePost(postId) {
    return {
        type: ActionTypes.LIKE_POST,
        postId,
    };
}
