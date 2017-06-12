import { TOGGLE_MODAL } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case TOGGLE_MODAL:
      return { ...state, currentModal: (action.payload) };
  }

  return state;
}