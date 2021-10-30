import {
    GET_GROUPS_INITIATED,
    GET_GROUPS_SUCCESS,
    GET_GROUPS_FAILED,
} from "../actions/types";

const initialState = {
    groups: [],
    isGetGroupsSuccessfull: false,
};

function handleError(error) {
    if (error) {
        if (error.should_show_to_user) {
            console.log("Error: Showing to user: " + error.error_msg);
            if (
                typeof window.Android != "undefined" &&
                typeof window.Android.showToast === "function"
            ) {
                window.Android.showToast(error.error_msg);
            } else {
                window.alert(error.error_msg);
            }
        } else {
            console.log("Error: Not showing to user: " + error.error_msg);
        }
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_GROUPS_INITIATED:
            return {
                ...state,
            };
        case GET_GROUPS_SUCCESS:
            return {
                ...state,
                isGetGroupsSuccessfull: true,
                groups: action.payload
            };
        case GET_GROUPS_FAILED:
            handleError(action.payload);
            return {
                ...state,
                isGetGroupsSuccessfull: false,
            };
        default:
            return state;
    }
}
