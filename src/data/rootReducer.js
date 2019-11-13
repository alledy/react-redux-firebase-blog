import { combineReducers } from 'redux';
import user from './users/reducers';
import posts from './posts/reducers';
import comments from './comments/reducers';

export default combineReducers({
    user,
    posts,
    comments,
});
