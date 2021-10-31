import AuthResource from '../resources/AuthResource';
import axios from 'axios';
import {
    AUTH_ERROR,
    LOGIN_INITIATED, LOGIN_SUCCESS, LOGIN_FAILED, USER_LOADED, USER_LOADING,
    LOGOUT_INITIATED, LOGOUT_FAILED, LOGOUT_SUCCESS, SIGNUP_INITIATED, SIGNUP_FAILED, SIGNUP_SUCCESS
} from './types';

function getErrorMessage(err) {
    return err.response ? err.response.data.error : err.message ? err.message : "Unknown error";
}

function internalLoadUser(dispatch, token) {
    new AuthResource().loadUser(token)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: AUTH_ERROR,
                payload: {
                    error_msg: err.response && err.response.status === 401
                        ? "You have been logged out. Please login again!"
                        : getErrorMessage(err),
                    should_show_to_user: true
                }
            });
            console.log(err.response);
        });
}

function internalLoginUser(dispatch, email, password) {
    new AuthResource().loginUser(email, password)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true
                }
            });
            console.log(err.response);
        });
}

async function internalSignupUser(dispatch,name,email,password, phone_no,profileImg) {
        const formInfo= new FormData();
        console.log(profileImg,"profileImg")
        formInfo.append("file",profileImg);
        formInfo.append("upload_preset","benven");
        formInfo.append("cloud_name","jitul-teron");
        fetch("https://api.cloudinary.com/v1_1/jitul-teron/image/upload",{
            method:"post",
            body:formInfo
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data.url,"data.url")
              const profile_pic=data.url
    
              new AuthResource().signupUser(name, email, password, phone_no, profile_pic)
        .then(res => {
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: SIGNUP_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true
                }
            });
            console.log(err.response);
        });
          })
        
    
}

function internalLogoutUser(dispatch, token) {
    new AuthResource().logoutUser(token)
        .then(() => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch(err => {
            dispatch({
                type: LOGOUT_FAILED,
                payload: {
                    error_msg: getErrorMessage(err),
                    should_show_to_user: true
                }
            });
            console.log(err.response);
        });
}

export const loadUser = () => (dispatch, getState) => {
    dispatch({
        type: USER_LOADING
    });

    const token = getState().authReducer.token;

    if (token) {
        internalLoadUser(dispatch, token);
    } else {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                error_msg: "Token doesn't exist",
                should_show_to_user: false
            },
        });
    }
};

export const loginUser = (email, password) => (dispatch) => {
    dispatch({
        type: LOGIN_INITIATED
    });

    internalLoginUser(dispatch, email, password);
};

export const signupUser =async (profile, name, email,phone_no, password, password2) => (dispatch) => {

    dispatch({
        type: SIGNUP_INITIATED
    });

    if (password === password2) {
         internalSignupUser(dispatch,name, email, password,phone_no,profile);
    } else {
        dispatch({
            type: SIGNUP_FAILED,
            payload: {
                error_msg: "Both passwords didn't match. They should have same value.",
                should_show_to_user: true
            },
        });
    }
};

export const logoutUser = (token) => (dispatch) => {
    dispatch({
        type: LOGOUT_INITIATED
    });

    internalLogoutUser(dispatch, token);
};
