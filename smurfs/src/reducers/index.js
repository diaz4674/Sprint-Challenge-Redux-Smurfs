import {
  FETCHING_SMURF,
  GET_SMURF,
  GET_SMURF_FAILURE,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  ADDING_SMURFS,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  error: null
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  console.log('rootReducer', action);
  switch(action.type) {
    case FETCHING_SMURF:
    return{
      ...state,
      fetchingSmurfs: true,
    }
    case GET_SMURF:
    return{
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false
    }
    case GET_SMURF_FAILURE: 
    return{
      ...state,
      error: action.payload,
      fetchingSmurfs: false
    }
    case ADDING_SMURFS: 
    return {
      ...state, 
      addingSmurf: true
    }
    case ADD_SMURF_SUCCESS:
    return {
      ...state,
      addingSmurf: false,
      smurfs: action.payload
    }
    case ADD_SMURF_FAILURE:
    return {
      ...state,
      addingSmurf: false,
      error: action.payload
    }
    case DELETE_SUCCESS:
    return{
      ...state,
      smurfs: action.payload,
    }
    case DELETE_FAILURE:
    return {
      ...state,
      error: action.payload
    }
    default: 
    return state;
  }
}

export default rootReducer;