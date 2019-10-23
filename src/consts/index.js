import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user:
    {
      id: '123',
      firstname: 'Amogh',
      surname: 'Meshram',
      email: 'dummy@gmail.com',
      phone: '489900909',
      profilePicture: './assets/Images/Circular.png',
    },
  posts: [],
  isLoading: false,
};
const reducer = combineReducers({
});

export default reducer;
