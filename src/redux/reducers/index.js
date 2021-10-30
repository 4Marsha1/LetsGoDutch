import { combineReducers } from "redux";
import auth from './auth'
import groups from './groups'
import createGroup from './createGroup'

export default combineReducers({
    authReducer: auth,
    groupsReducer: groups,
    createGroupReducer: createGroup,
});
