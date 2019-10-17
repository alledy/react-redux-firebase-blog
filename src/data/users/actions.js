import * as ActionTypes from '@/data/rootActionTypes';
import { authRef } from '@/config/firebase';
import { provider } from '@/config/firebase';
// export function login(email, password) {
//     return async function(dispatch) {
//         try {
//             const { apiToken: token, user } = await services.login(email, password);
//             services.setToken(token);

//             dispatch({
//                 type: ActionTypes.SET_AUTH,
//                 token,
//                 user,
//             });
//         } catch (e) {
//             alert('로그인하는데 실패했습니다.');
//         }
//     };
// }

export function login(history) {
    return async function() {
        try {
            authRef.signInWithPopup(provider).then(() => {
                history.push('/');
                alert('성공적으로 로그인하였습니다.');
            });
        } catch (e) {
            alert('로그인에 실패했습니다.');
            console.error(e);
        }
    };
}

export function fetchUser() {
    return async function(dispatch) {
        authRef.onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: ActionTypes.FETCH_USER,
                    user,
                });
            } else {
                dispatch({
                    type: ActionTypes.FETCH_USER,
                    user: null,
                });
            }
        });
    };
}

export function logout() {
    return async function() {
        try {
            authRef.signOut();
            alert('로그아웃되었습니다.');
        } catch (e) {
            console.error(e);
        }
    };
}
