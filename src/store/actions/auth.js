import { handleSelectUserComunity } from "./user";

export const handleUserLoginLoading = _ => {
  return dispatch => {
    dispatch({ type: "USER_LOGIN_LOADING" });
  };
};

export const handleUserLoginSuccess = data => {
  return dispatch => {
    const { user } = data;

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: {
        user,
        token: "12345678"
      }
    });

    dispatch(handleSelectUserComunity());
  };
};

export const handleUserLoginRejected = _ => {
  return dispatch => {
    dispatch({ type: "USER_LOGIN_REJECTED" });
  };
};