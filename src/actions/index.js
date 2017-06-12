import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, TOGGLE_MODAL } from './types';

const API_URL = 'http://localhost:3090';

export const signinUser = ({email, password}) => {
  /*
  return function(dispatch) {
    //Submit email/password to the server
    axios.post(`${API_URL}/signin`, {email, password})
      .then(response => {
        // If request is good...

        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // - Save the JWT token
        localStorage.setItem('token', response.data.token);

        // - redirect to the route '/feature'
        browserHistory.push('/feature');

      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Incorrect username/password'));
      })
  }
  */
};

export const authError = error => {return { type: AUTH_ERROR, payload: error }};

export const clearModal = (dispatch) => dispatch({type : TOGGLE_MODAL, payload: null});

export const setModal = (dispatch, type, payload) => dispatch({type : type, payload : payload});