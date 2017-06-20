import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Transition from 'react-inline-transition-group';

import { clearModal } from '../store/Modal/actions';

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

const Overlay = (props) => {
  const { clearModal, modalClearOnClick } = props;

  const renderOverlayClick = () => (
    modalClearOnClick ? (e => e.target.dataset.space === 'overlay' ? clearModal() : null) : null);

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
        onClick={renderOverlayClick()}
      >
        <span
          className="glyphicon glyphicon-remove"
          style={{zIndex: 9999, position: 'absolute', top: 15, right: 25, color: 'white'}}
          onClick={clearModal}
        />
        {props.children}
      </div>
    </Transition>
  );
};

Overlay.propTypes = {
  modalClearOnClick: PropTypes.bool,
};

Overlay.defaultProps = {
  modalClearOnClick: true,
};

export default Overlay;