import { TOGGLE_MODAL } from '../../constants/types';

const API_URL = 'http://localhost:3090';

export const clearModal = (dispatch) => dispatch({type : TOGGLE_MODAL, payload: null});

export const setModal = (dispatch, type, payload) => dispatch({type : type, payload : payload});