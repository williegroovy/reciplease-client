import { TOGGLE_CARD } from '../../constants/types';

export const clearCard = (dispatch) => dispatch({type : TOGGLE_CARD, payload: null});

export const showCard = (dispatch, type, payload) => dispatch({type : type, payload : payload});