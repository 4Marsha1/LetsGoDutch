import GroupResource from "../resources/GroupResource";
import {
    GET_GROUPS_INITIATED,
    GET_GROUPS_SUCCESS,
    GET_GROUPS_FAILED,
} from "./types";

function getErrorMessage(err) {
    return err.response
        ? err.response.data.error
        : err.message
            ? err.message
            : "Unknown error";
}

function internalGetGroups(dispatch, token) {
    new GroupResource()
        .getGroups(token)
        .then((res) => {
            dispatch({
                type: GET_GROUPS_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: GET_GROUPS_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true,
                },
            });
            console.log(err.response);
        });
}

export const getGroups = (token) => (dispatch) => {
    dispatch({
        type: GET_GROUPS_INITIATED,
    });
    internalGetGroups(dispatch, token);
};
