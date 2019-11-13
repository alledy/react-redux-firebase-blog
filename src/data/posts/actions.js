import * as ActionTypes from '@/data/rootActionTypes';
import { postsRef, authRef, databaseRef } from '@/config/firebase';
import { snapshotToArray } from '@/utils/snapshotToArray';

export function writePost(title, contents, user, history) {
    return async function(dispatch) {
        try {
            dispatch({ type: ActionTypes.SHOW_LOADING });
            dispatch({ type: ActionTypes.WRITE_POST });
            const newPost = {
                writer: user,
                title,
                contents,
                createAt: Date.now(),
                likes: 0,
                comments: 0,
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
        } finally {
            dispatch({ type: ActionTypes.HIDE_LOADING });
        }
    };
}

export function fetchPosts() {
    return async function(dispatch) {
        try {
            dispatch({ type: ActionTypes.SHOW_LOADING });
            await postsRef.on('value', (snapshot) => {
                const payload = snapshotToArray(snapshot);
                dispatch({
                    type: ActionTypes.FETCH_POSTS,
                    payload,
                });
            });
        } catch (e) {
            console.error(e);
        } finally {
            dispatch({ type: ActionTypes.HIDE_LOADING });
        }
    };
}

export function likePost(postKey) {
    return async function(dispatch) {
        const uid = authRef.currentUser.uid;

        // user-likes에 유저 정보가 없거나, 있어도 해당 포스트키가 없는 경우에 실행
        await databaseRef.child('user-likes').on('value', (snapshot) => {
            if (
                !snapshot.child(uid).exists() ||
                !snapshot
                    .child(uid)
                    .child(postKey)
                    .exists()
            ) {
                dispatch({ type: ActionTypes.LIKE_POST });
                // 해당 post의 총 likes 값 +1
                // firebase transaction 사용
                postsRef
                    .child(postKey)
                    .child('likes')
                    .transaction(function(current_value) {
                        return current_value + 1;
                    });

                // user-likes에 user가 like한 포스트키 업데이트
                const updates = {};
                updates['/user-likes/' + uid + '/' + postKey] = postKey;
                databaseRef.update(updates);
            }
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
