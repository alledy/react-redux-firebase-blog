import * as ActionTypes from '@/data/rootActionTypes';
import * as services from '@/data/rootServices';

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
