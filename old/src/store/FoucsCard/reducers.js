import { TOGGLE_CARD } from '../../constants/types';

export default function(state = {}, action) {
  switch(action.type) {
    case TOGGLE_CARD:
      return { ...state, currentCard: (action.payload) };
  }

  return state;
}