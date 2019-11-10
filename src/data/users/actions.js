import * as ActionTypes from '@/data/rootActionTypes';
import { authRef, facebook_provider, google_provider, actionCodeSettings } from '@/config/firebase';

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

export function OAuthLogin(OAuth, history) {
    return async function() {
        try {
            switch (OAuth) {
                case 'Facebook':
                    await authRef.signInWithPopup(facebook_provider);
                    break;
                case 'Google':
                    await authRef.signInWithPopup(google_provider);
                    break;
            }
            history.push('/home');
            alert('성공적으로 로그인하였습니다.');
        } catch (e) {
            alert('로그인에 실패했습니다.\n에러메세지 : ' + e.code);
            console.error(e);
        }
    };
}

export function sendEmailLink(email, history) {
    return async function() {
        try {
            await authRef.sendSignInLinkToEmail(email, actionCodeSettings);
            window.localStorage.setItem('emailForSignIn', email);
            alert('인증 메일이 전송되었습니다! 이메일을 확인해주세요.');
        } catch (e) {
            console.error(e);
        }
    };
}

export function verifySignIn(history) {
    return async function(dispatch) {
        try {
            if (authRef.isSignInWithEmailLink(window.location.href)) {
                let email = window.localStorage.getItem('emailForSignIn');
                if (!email) email = window.prompt('계정 인증 완료를 위해 이메일을 알려주세요.');
                if (email) {
                    const result = await authRef.signInWithEmailLink(email, window.location.href);
                    dispatch(fetchUser());
                    history.replace('/home');
                    const user = result.user;
                    alert(`${user.email}로 로그인 되었습니다.`);
                    window.localStorage.removeItem('emailForSignIn');
                }
            }
        } catch (e) {
            console.error(e);
        }
    };
}

export function fetchUser(history) {
    return async function(dispatch) {
        authRef.onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: ActionTypes.FETCH_USER,
                    user,
                });
                history.push('/home');
            } else {
                dispatch({
                    type: ActionTypes.RESET_AUTH,
                    user: null,
                });
                // history.push('/login');
            }
        });
    };
}

export function logout(history) {
    return async function() {
        try {
            authRef.signOut();
            history.push('/');
            alert('로그아웃되었습니다.');
        } catch (e) {
            console.error(e);
        }
    };
}
