import * as ActionTypes from '@/data/rootActionTypes';
import { postsRef } from '@/config/firebase';

export function incrementSeq() {
    return {
        type: ActionTypes.INCREMENT_SEQ,
    };
}

export function writePost(title, contents, user) {
    return async function(dispatch, getState) {
        try {
            const { seq } = getState();
            const newPost = {
                seq,
                writer: user,
                title,
                contents,
                createAt: Date.now(),
                likes: 0,
                comments: 0,
                likesOfMe: false,
            };
            await postsRef.push().set(JSON.parse(JSON.stringify(newPost)));
            dispatch(incrementSeq());
        } catch (e) {
            alert('포스트 저장에 실패하였습니다.');
            console.error(e);
        }
    };
}

export function fetchPosts() {
    return async function(dispatch) {
        postsRef.on('value', (snapshot) => {
            dispatch({
                type: ActionTypes.FETCH_POSTS,
                payload: snapshot.val(),
            });
        });
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
