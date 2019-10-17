import * as ActionTypes from '@/data/rootActionTypes';

// const initialState = {
//     name: 'harry',
//     email: 'test@gmail.com',
//     password: '1234',
// };

const initialState = null;

export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case ActionTypes.FETCH_USER:
            return { name: action.user.displayName, email: action.user.email };

        case ActionTypes.RESET_AUTH:
            return null;

        default:
            return state;
    }
}
