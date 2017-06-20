import axios from 'axios';
import { RECIPES_FROM_USER } from '../../constants/types';
import { API_URL } from '../../constants/api';

export const getUserRecipes = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    const config = {headers: {'authorization': token}};

    axios.get(`${API_URL}/user/recipes`, config)
      .then(res => dispatch({type: RECIPES_FROM_USER, payload: res.data[0]}));
  }
};
