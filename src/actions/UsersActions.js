export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

const MONGO_URL = 'http://127.0.0.1:8080/';

export const registerUser = (login, password) => {
    return (dispatch) => { 
	    return fetch(MONGO_URL + 'users', {
		    method: 'POST',
		    body: JSON.stringify({ login, password }),
		    headers: {
			   'Content-Type': 'application/json'
			}
	 	  })
	      .then(posts => dispatch({
	          type: REGISTER_USER
	        })
	      );
  }
};

export const loginUser = (login, password) => {
    return (dispatch) => { 
	    return fetch(MONGO_URL + 'users?login=' + login + '&password=' + password)
	   	  .then(response => response.json())
	      .then(response => dispatch({
	          type: LOGIN_USER,
	          logged: response,
	          login
	        })
	      );
  }
};