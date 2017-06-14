import React from 'react';
import PropTypes from 'prop-types';

import Overlay from '../Overlay';


const ModalWrapper = props => {

  const { modalWrapper, head, title, button, verticalAlign } = props.style;

  const onOk = () => {
    props.onClick();
    props.hideModal();
  };

  const okButton = props.showOk
    ? (<button onClick={onOk} disabled={props.okDisabled}> {props.okText} </button>) : null;

  return(
    <Overlay>
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


      </div>
    </Overlay>
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
  title: 'Title Meh',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  onOk: () => {console.log('oooootay')}
};

export default ModalWrapper;