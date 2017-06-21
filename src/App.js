import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { current, toggle } from './enhancers/modal';

import './App.css';

import Header from './components/Header/Header';
import ModalConductor from './components/Modals/ModalConductor';

const enhance = compose(
  connect(),
  toggle(),
  current(),
);

const App = ({ children, currentModal, toggleClear }) => {
  const child = React.cloneElement(children);
  return (
    <div className="container">
      <Header />
      <div className="container">
        {child}
      </div>
      <ModalConductor currentModal={currentModal} clearModal={toggleClear} />
    </div>
  );
};

export default enhance(App);