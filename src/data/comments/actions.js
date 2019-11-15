import * as ActionTypes from '@/data/rootActionTypes';
import { databaseRef } from '@/config/firebase';
import { snapshotToArray } from '@/utils/snapshotToArray';
import { snapshotToObject } from '@/utils/snapshotToObject';

// Firebase DB에서 해당 postKey의 코멘트를 가져와, 배열 형태로 가공 후 payload로 전달
// export function fetchComments(postKey) {
//     return async function(dispatch) {
//         await commentsRef
//             .orderByChild('postKey')
//             .equalTo(postKey)
//             .on('value', (snapshot) => {
//                 const payload = snapshotToArray(snapshot);
//                 dispatch({
//                     type: ActionTypes.FETCH_COMMENTS,
//                     payload,
//                 });
//             });
//     };
// }

export function fetchComments() {
    return async function(dispatch) {
        try {
            await databaseRef.child('post-comments').on('value', (snapshot) => {
                const payload = snapshotToObject(snapshot);
                dispatch({
                    type: ActionTypes.FETCH_COMMENTS,
                    payload,
                });
            });
        } catch (e) {
            console.error(e);
        }
    };
}

// Firebase DB에 업데이트
// postKey를 보관하여 연결
export function writeComment(postKey, contents, writer) {
    return async function(dispatch) {
        try {
            dispatch({ type: ActionTypes.ADD_COMMENT });
            const newComment = {
                contents,
                writer,
                createAt: Date.now(),
            };
            const newCommentKey = databaseRef.child('post-comments').push().key;
            const updates = {};
            updates['/post-comments/' + postKey + '/' + newCommentKey] = newComment;
            await databaseRef.update(updates);
        } catch (e) {
            alert('코멘트 저장에 실패했습니다.');
            console.error(e);
        }
    };
}
