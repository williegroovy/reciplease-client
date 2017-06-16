import React, { Component } from 'react';
import { connect } from 'react-redux';

import deepEqual from 'deep-equal';

import { getUserRecipes } from '../store/Recipe/actions';

class Landing extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.recipes.recipes === this.props.recipes.recipes);
    let deepCompare = deepEqual(this.props.recipes, nextProps.recipes);
    console.log('deepCompare', deepCompare);
    return deepCompare ? false : true
  }


  render() {

    const recipes = {...this.props.recipes};
    //Below actually gives back a flat object, but needs work to massage.
    //Should look into writing or finding a middleware to help massage the data into the format I need it in.
    //Plus we can strip away the extra fluff from mongodb.
    console.log('recipes', recipes.recipes[0]);
    return (
      <div className="container" style={{height : '500px'}}>
        <h4>Welcome sign in to get started</h4>
        <button onClick={this.props.getUserRecipes}>Get Recipes</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log({...state.recipes});
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