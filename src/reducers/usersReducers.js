export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

const initialState = {
  logged: false,
  login: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        logged : true,
        login: action.login
      };

    case LOGIN_USER:
      return {
        ...state,
        logged: action.logged,
        login: action.login
      };

    default:
      return state;
  }
};