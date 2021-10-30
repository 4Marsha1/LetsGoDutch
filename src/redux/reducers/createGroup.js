import {
    CREATE_GROUP_INITIATED,
    CREATE_GROUP_SUCCESS,
    CREATE_GROUP_FAILED,
} from "../actions/types";

const initialState = {
    group: {},
    isCreateGroupSuccess: false,
    isCreateGroupInitiated: false,
};

function handleError(error) {
    if (error) {
        if (error.should_show_to_user) {
            console.log("Error: Showing to user: " + error.error_msg);
            if (typeof window.Android != "undefined" && typeof window.Android.showToast === "function") {
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
        case CREATE_GROUP_INITIATED:
            return {
                ...state,
                isCreateGroupInitiated: true,
                isCreateGroupSuccess: null,
            };
        case CREATE_GROUP_SUCCESS:
            return {
                ...state,
                isCreateGroupSuccess: true,
                isCreateGroupInitiated: false,

            };
        case CREATE_GROUP_FAILED:
            handleError(action.payload);
            return {
                ...state,
                isCreateGroupSuccess: false,
                isCreateGroupInitiated: false,

            };
        default:
            return state;
    }
}
