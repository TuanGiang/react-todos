import {FETCH_SUBJECT_DETAIL_DONE} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_SUBJECT_DETAIL_DONE:
      return action.payload;

    default:
      return state;
  }
}
