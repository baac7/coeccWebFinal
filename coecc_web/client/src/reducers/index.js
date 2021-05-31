
import { combineReducers } from 'redux';

import file from './file';
import auth from './auth';

export default combineReducers({
    file,
    auth
});