import React from 'react';
import PropTypes from 'prop-types';


const Overlay = (props) => {
  const { clearModal, modalClearOnClick } = props;

  const renderOverlayClick = ()  => (
    modalClearOnClick ? (e => e.target.dataset.space === 'overlay' ? clearModal() : null) : null);

  return (
    <div key="overlay" data-space='overlay' className="overlay" style={{background: props.background}} onClick={renderOverlayClick()}>
      <span className="glyphicon glyphicon-remove" onClick={clearModal} />
      {props.children}
    </div>
  );
};

Overlay.propTypes = {
  modalClearOnClick: PropTypes.bool,
  background: PropTypes.string
};

Overlay.defaultProps = {
  modalClearOnClick: true
};

export default Overlay;