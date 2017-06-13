import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import ModalConductor from './components/Modal/ModalConductor';

class App extends Component{

  constructor(props) {
    super(props);
  }

  render() {

    const { children } = this.props;
    const child = React.cloneElement(children);

    return (
      <div>
        <Header />
        <div className="container">
          {child}
        </div>
        <ModalConductor/>
      </div>
    );
  }
}

export default App;