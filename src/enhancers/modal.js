import { withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { setModal, clearModal } from  '../store/Modal/actions';
import { TOGGLE_MODAL } from '../constants/types';

export const current = () => connect(state => ({currentModal: state.modal.currentModal}));

export const toggle = () => withHandlers(
  {
    toggleClear: ({ dispatch }) => () => dispatch(clearModal(dispatch)),
    toggleModal: ({ dispatch }) => (modal) => () => dispatch(setModal(dispatch, TOGGLE_MODAL, modal))
  }
);


// Maps owner props to a new collection of props that are passed to the base component.
//mapProps(props => console.log('mapProps', props)),

// Like mapProps, but new props are merged with the owner props.
//withProps(props => console.log('withProps', withProps)),

//Like withProps, except the new props are only created when the owner props
//specified by shouldMapOrKeys changes. Call createProps() to generate props.
//withPropsOnChange(),