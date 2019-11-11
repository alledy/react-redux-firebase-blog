import * as ActionTypes from '@/data/rootActionTypes';
import { postsRef, authRef, databaseRef } from '@/config/firebase';
import { snapshotToArray } from '@/utils/snapshotToArray';

// export function incrementSeq(seq) {
//     return async function(dispatch) {
//         dispatch({ type: ActionTypes.INCREMENT_SEQ });
//         await seqRef.push().set(seq);
//     };
// }

// export function getSeq() {
//     return async function(dispatch) {
//         seqRef.on('value', (snapshot) => {
//             const payload = snapshotToArray(snapshot);

//             if (payload.length > 0) {
//                 dispatch({
//                     type: ActionTypes.GET_SEQ,
//                     payload: payload[0],
//                 });
//             } else {
//                 dispatch({
//                     type: ActionTypes.GET_SEQ,
//                     payload: 0,
//                 });
//             }
//         });
//     };
// }

export function writePost(title, contents, user, history) {
    return async function(dispatch) {
        try {
            dispatch({ type: ActionTypes.WRITE_POST });
            const newPost = {
                writer: user,
                title,
                contents,
                createAt: Date.now(),
                likes: 0,
                comments: 0,
                likesOfMe: false,
            };
            const newPostKey = postsRef.push().key;
            const updates = {};
            const uid = authRef.currentUser.uid;
            updates['/posts/' + newPostKey] = newPost;
            updates['/user-posts/' + uid + '/' + newPostKey] = newPost;
            await databaseRef.update(updates);
            history.push('/home');
        } catch (e) {
            alert('포스트 저장에 실패했습니다.');
            console.error(e);
        }
    };
}

export function fetchPosts() {
    return async function(dispatch) {
        await postsRef.on('value', (snapshot) => {
            const payload = snapshotToArray(snapshot);
            dispatch({
                type: ActionTypes.FETCH_POSTS,
                payload,
            });
        });
    };
}

export function likePost(postKey, postIndex) {
    return async function(dispatch, getState) {
        // likesOfMe가 false일 때에만 likes 카운트 update
        const { posts } = getState();
        if (!posts.entities[postIndex].likesOfMe) {
            dispatch({ type: ActionTypes.LIKE_POST });
            await postsRef
                .child(postKey)
                .child('likes')
                .transaction(function(current_value) {
                    return current_value + 1;
                });
        }

        // likesOfMe가 false일 때 true로 업데이트
        await postsRef
            .child(postKey)
            .child('likesOfMe')
            .transaction(function(current_value) {
                if (!current_value) return true;
            });
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
