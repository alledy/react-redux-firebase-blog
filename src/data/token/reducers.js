import * as ActionTypes from '@/data/rootActionTypes';

const initialState = null;

export default function token(state = initialState, action = {}) {
    switch (action.type) {
        case ActionTypes.SET_AUTH:
            return action.token;

        case ActionTypes.RESET_AUTH:
            return null;

        default:
            return state;
    }
}
