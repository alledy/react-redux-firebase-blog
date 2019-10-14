import * as ActionTypes from '@/data/rootActionTypes';

export function writePost(title, contents, user) {
    return {
        type: ActionTypes.ADD_POST,
        title,
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

export function editPostBody(body) {
    return {
        type: ActionTypes.EDIT_POST_BODY,
        body,
    };
}

export function editPostTitle(title) {
    return {
        type: ActionTypes.EDIT_POST_TITLE,
        title,
    };
}
