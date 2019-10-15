import { combineReducers } from 'redux';
import user from './users/reducers';
import token from './token/reducers';
import posts from './posts/reducers';
import { seq } from './posts/reducers';
import comments from './comments/reducers';

export default combineReducers({
    user,
    seq,
    token,
    posts,
    comments,
});
