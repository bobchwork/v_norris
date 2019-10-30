import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import formReducer from 'redux-form/es/reducer';
import jokesReducer from './jokes';

const reducer = combineReducers({
  toastr: toastrReducer,
  form: formReducer,
  jokes: jokesReducer,
});

export default reducer;
