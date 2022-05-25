const initialState = {
  loading: false,
  data: {
    name: "Bruno Almeida"
  },
  token: "123456"
};

export default function user(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "USER_LOGIN_LOADING":
      return {
        ...state,
        loading: true,
      }

    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload.user,
        token: payload.token
      }

    case "USER_LOGIN_REJECTED":
      return initialState;
  
    default:
      return state;
  }
};