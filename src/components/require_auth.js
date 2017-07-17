import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends React.Component {

    static propTypes = {
      history: PropTypes.object.isRequired
    }

    componentWillMount() {
      if (!this.props.authenticated) this.props.history.replace('/');
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) this.props.history.replace('/');
    }

    render() {
      return (<ComposedComponent {...this.props} />);
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated : state.user.authenticated
    }
  }

  return connect(mapStateToProps)(Authentication);
}