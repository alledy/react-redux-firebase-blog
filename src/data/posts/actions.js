import * as ActionTypes from '@/data/rootActionTypes';
import { postsRef } from '@/config/firebase';
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
            await postsRef.push().set(JSON.parse(JSON.stringify(newPost)));
            history.push('/home');
            // dispatch(incrementSeq(seq + 1));
        } catch (e) {
            alert('포스트 저장에 실패하였습니다.');
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

// NEED FIX //
export function likePost(postIndex) {
    return async function(distpatch, getState) {
        const post = postsRef
            .child('entities')
            .child('index')
            .equalTo(postIndex);

        const { posts } = getState();
        await post.set(JSON.parse(JSON.stringify(posts.entities[postIndex].likes + 1)));
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
