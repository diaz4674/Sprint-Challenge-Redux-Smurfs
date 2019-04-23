import axios from 'axios';

export const GET_SMURF = 'GET_SMURF';
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE';
export const FETCHING_SMURF = 'FETCHING_SMURF';

export const getSmurf = () => dispatch => {
  dispatch({type: FETCHING_SMURF});
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({type: GET_SMURF, payload: res.data}))
    .catch(err => dispatch({type: GET_SMURF_FAILURE, payload: err  }))
};

export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const addSmurf = (smurf) => dispatch => {
  dispatch({type: ADDING_SMURFS});
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(res => dispatch({type: ADD_SMURF_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: ADD_SMURF_FAILURE, payload: err}))
}

export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteSmurf = (i) => dispatch => {
  axios
  .delete(`http://localhost:3333/smurfs/${i}`)
  .then(res => dispatch({type: DELETE_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: DELETE_FAILURE, payload: err}))
}