import axios from 'axios';
import { reset } from 'redux-form';
import { GET_APPOINMENTS, ADD_APPOINMENT } from './types';

// GET APPOINMENTS
export const getAppoinments = () => async dispatch => {
  const res = await axios.get('/appoinments/appoinment/');
  dispatch({
    type: GET_APPOINMENTS,
    payload: res.data
  });
  return res.data;
};

// Add APPOINMENTS
export const addAppoinment = formValues => async dispatch => {
  const res = await axios.post('/appoinments/', { ...formValues });
  dispatch({
    type: ADD_APPOINMENT,
    payload: res.data
  });
  dispatch(reset('appoinmentForm'));
};