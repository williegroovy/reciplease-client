import { RECIPES_FROM_USER } from '../../constants/types';

export default function(state = [], action) {
  console.log('state', state);
  console.log('action', action.payload);

  switch(action.type) {
    case RECIPES_FROM_USER:
      return [...state, action.payload];

  }

  return state;
}