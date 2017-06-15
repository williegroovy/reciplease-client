import React from 'react';
import PropTypes from 'prop-types';

const ModalWrapper = props => {

  const { pageCenter, modalWrapper, head, title, button, verticalAlign } = props.style;

  const onOk = () => {
    props.onClick();
    props.hideModal();
  };

  const okButton = props.showOk
    ? (<button onClick={onOk} disabled={props.okDisabled}> {props.okText} </button>) : null;

  return(
    <div style={pageCenter}>
      <div style={modalWrapper}>
         <header style={head}>
          <div className="row" style={verticalAlign}>
            <div className="col-md-6">
              <h3 style={title}>{props.title}</h3>
            </div>
            <div className="col-md-6">
              <button style={button} onClick={props.hideModal}>CLOSE</button>
            </div>
          </div>
        </header>
        {props.children}
        {okButton}`
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
  onOk: () => {console.log('oooootay')}
};

export default ModalWrapper;