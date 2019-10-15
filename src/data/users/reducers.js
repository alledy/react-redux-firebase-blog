import * as ActionTypes from '@/data/rootActionTypes';

const initialState = {
    name: 'harry',
    email: 'test@gmail.com',
    password: '1234',
};

export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case ActionTypes.SET_AUTH:
            return action.user;

        case ActionTypes.RESET_AUTH:
            return null;

        default:
            return state;
    }
}
