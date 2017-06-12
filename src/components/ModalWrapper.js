import React from 'react';
import PropTypes from 'prop-types';

import Overlay from './Overlay';

let modalWrapperStyles = {
  background : '#fff',
  position : 'absolute',
  zIndex : 9999,
  top : '50%',
  left : '50%',
  width : '40%',
  height: '50%',
  padding : '24px 20px',
  transform : 'translate(-50%, -50%)',
  borderRadius : '2px'
};

const ModalWrapper = props => {

  if(props.background) modalWrapperStyles.background = props.background;
  if(props.width) modalWrapperStyles.width = props.width;
  if(props.height) modalWrapperStyles.height = props.height;
  if(props.top) modalWrapperStyles.top = props.top;
  if(props.left) modalWrapperStyles.left = props.left;
  if(props.transform) modalWrapperStyles.transform = props.transform;
  if(props.padding) modalWrapperStyles.padding = props.padding;

  return(
    <Overlay>
      <div style={modalWrapperStyles}>
        {props.children}
      </div>
    </Overlay>
  );
};

ModalWrapper.propTypes = {
  background: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
  transform: PropTypes.string,
  padding: PropTypes.string

};

export default ModalWrapper;