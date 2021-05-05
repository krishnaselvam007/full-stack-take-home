import _ from 'lodash';
import { GET_APPOINMENTS, ADD_APPOINMENT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_APPOINMENTS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case ADD_APPOINMENT: // added
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};