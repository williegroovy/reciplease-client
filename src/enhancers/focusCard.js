import { withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { showCard, clearCard } from  '../store/FoucsCard/actions';
import { TOGGLE_CARD } from '../constants/types';

export const currentCard = () => connect(state => ({focusCard: state.focusCard.currentCard}));

export const cardActions = () => withHandlers(
  {
    clearFocusCard: ({ dispatch }) => () => dispatch(clearCard(dispatch)),
    showCard: ({ dispatch }) => (card) => () => dispatch(showCard(dispatch, TOGGLE_CARD, card))
  }
);


// Maps owner props to a new collection of props that are passed to the base component.
//mapProps(props => console.log('mapProps', props)),

// Like mapProps, but new props are merged with the owner props.
//withProps(props => console.log('withProps', withProps)),

//Like withProps, except the new props are only created when the owner props
//specified by shouldMapOrKeys changes. Call createProps() to generate props.
//withPropsOnChange(),