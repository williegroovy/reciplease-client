import { RECIPES_FROM_USER } from '../../constants/types';

export default function(state = [], action) {
  switch(action.type) {
    case RECIPES_FROM_USER:
      return [...state, action.payload];

  }

  return state;
}