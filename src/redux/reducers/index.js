import { combineReducers } from 'redux';
import auth from './auth';
import quote from './quote';
import {userReducer} from './user'

export default combineReducers({ auth, quote, user:userReducer });
