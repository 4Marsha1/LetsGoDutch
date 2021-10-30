import CreateGroupResource from "../resources/CreateGroupResource";
import {
    CREATE_GROUP_INITIATED,
    CREATE_GROUP_SUCCESS,
    CREATE_GROUP_FAILED,

} from "./types";

function getErrorMessage(err) {
    return err.response ? err.response.data.error : err.message ? err.message : "Unknown error";
}

function internalCreateGroup(details, token, dispatch) {
    new CreateGroupResource().createGroup(details, token)
        .then(res => {
            dispatch({
                type: CREATE_GROUP_SUCCESS
            })
        })
        .catch(err => {
            dispatch({
                type: CREATE_GROUP_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true
                }
            });
            console.log(err.response);
        });
}

export const createGroup = (details, token) => (dispatch) => {
    dispatch({
        type: CREATE_GROUP_INITIATED,
    });
    internalCreateGroup(details, token, dispatch);
}
