import { combineReducers } from 'redux'
import { range } from 'ramda';
import numberOfForms from './numberOfForms';

const initialState = {
  name: '',
  email: '',
  message: ''
}

const createReducer = n => (state, action) => {
  if (state === undefined) {
    state = initialState;
  } else {
    console.log('hitting reducer');
  }
  switch (action.type) {
    case `FORM_${n}/UPDATE_NAME`:
      return {
        ...state,
        name: action.text
      }
    case `FORM_${n}/UPDATE_EMAIL`:
      return {
        ...state,
        email: action.text
      };
    case `FORM_${n}/UPDATE_MESSAGE`:
      return {
        ...state,
        message: action.text
      };
    default:
      return state
  }
}

const createReducers = to => {
  const reducers = {};
  range(0, to).forEach(number => {
    reducers[`form${number}`] = createReducer(number);
  });
  return reducers;
} 

export default combineReducers({
  ...createReducers(numberOfForms)
})