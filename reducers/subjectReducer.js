import {FETCH_SUBJECT, FETCH_SUBJECT_DONE} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_SUBJECT_DONE:
      return action.payload;

    default:
      return state;
  }
}
