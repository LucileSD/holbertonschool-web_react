import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    }
  };
}

const logout = () => {
  return {
    type: LOGOUT,
  };
}

const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
}

const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
}


const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('../../dist/login-success.json')
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((err) => dispatch(loginFailure()));
  };
};

export { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest };
