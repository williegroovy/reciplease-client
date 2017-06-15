import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserRecipes } from '../store/Recipe/actions';

class Landing extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps);
    console.log('props', this.props);
    console.log('nextState', nextState);
    console.log(nextProps.recipes.recipes === this.props.recipes.recipes);
    return nextProps.recipes === this.props.recipes ? false : true
  }

  render() {
    return (
      <div className="container" style={{height : '500px'}}>
        <h4>Welcome sign in to get started</h4>
        <button onClick={this.props.getUserRecipes}>Get Recipes</button>
        <div>{this.props.recipes[0]}</div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    recipes: {...state.recipes}
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserRecipes: () => dispatch(getUserRecipes)(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);