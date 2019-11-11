import * as ActionTypes from '@/data/rootActionTypes';
import { commentsRef, databaseRef } from '@/config/firebase';
import { snapshotToArray } from '@/utils/snapshotToArray';

// Firebase DB에서 해당 postId의 코멘트를 가져와, 배열 형태로 가공 후 payload로 전달
export function fetchComments(postId) {
    return async function(dispatch) {
        await commentsRef
            .orderByChild('postId')
            .equalTo(postId)
            .on('value', (snapshot) => {
                const payload = snapshotToArray(snapshot);
                dispatch({
                    type: ActionTypes.FETCH_COMMENTS,
                    payload,
                });
            });
    };
}

// Firebase DB에 업데이트
export function writeComment(postId, contents, writer) {
    return async function(dispatch) {
        try {
            dispatch({ type: ActionTypes.ADD_COMMENT });
            const newComment = {
                contents,
                writer,
                postId,
                createAt: Date.now(),
            };
            const newCommentKey = commentsRef.push().key;
            const updates = {};
            updates['/comments/' + newCommentKey] = newComment;
            await databaseRef.update(updates);
        } catch (e) {
            alert('코멘트 저장에 실패했습니다.');
            console.error(e);
        }
    };
}
