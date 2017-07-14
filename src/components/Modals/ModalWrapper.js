import React from 'react';
import PropTypes from 'prop-types';

const ModalWrapper = ({ button, okDisabled, showOk, okText, title, onClick, hideModal, children }) => {

  const onOk = () => {
    onClick();
    hideModal();
  };

  const okButton = showOk
    ? (<button onClick={onOk} disabled={okDisabled}> {okText} </button>) : null;

  return(
    <div className="page-center">
      <div className="modal-wrapper">
         <header className="mw-head">
          <div className="row mw-vertical-align">
            <div className="col-md-6">
              <h3>{title}</h3>
            </div>
            <div className="col-md-6">
              <button className="mw-button" onClick={hideModal}>CLOSE</button>
            </div>
          </div>
        </header>
        {children}
        {okButton}
      </div>
    </div>
  );
};

ModalWrapper.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  okText: PropTypes.string,
  okDisabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,

  hideModal: PropTypes.func,
  onOk: PropTypes.func
};

ModalWrapper.defaultProps = {
  title: '',
  showOk: false,
  okText: 'OK',
  okDisabled: false,
};

export default ModalWrapper;