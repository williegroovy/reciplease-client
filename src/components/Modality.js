import React, { Component } from 'react';
import { connect } from 'react-redux';

import Overlay from './Overlay';
import Modal from './Modal/ModalWrapper';

const renderModalFromStore = () => {
  console.log('renderModalFromStore');
  return(
    <Modal>

    </Modal>
  );
};

const Modality = () => {

  return (
    <Overlay>
      {renderModalFromStore()};
    </Overlay>
  );
};

const mapStateToProps = state => {
  return {
    show: state.modal.show
  }
};

export default connect(mapStateToProps)(Modality);