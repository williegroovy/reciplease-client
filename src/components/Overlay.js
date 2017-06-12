import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Transition from 'react-inline-transition-group';

import { clearModal } from '../actions';



const Overlay = (props) => {

  const styles = {
        overlay: {
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,.6)'
        },
        base: {
          opacity: 0,
          transition: 'all 500ms',
       },

        show: {
          opacity: 1,
          transition: 'all 1000ms',
        },

        hide: {
          opacity: 0,
          transition: 'all 1000ms',
      }
     };
  const { clearModal } = props;

  return (
    <Transition
      childrenStyles={{
        base: styles.base,
        appear: styles.show,
        leave: styles.hide
      }
    }>
      <div
        style={styles.overlay} data-space='overlay'
        onClick={(e) => e.target.dataset.space === 'overlay' ? clearModal() : null }
      >
        {props.children}
      </div>
    </Transition>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
  clearModal: () => dispatch(clearModal)
  }
};
export default connect(null, mapDispatchToProps)(Overlay);