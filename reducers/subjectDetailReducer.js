import {FETCH_SUBJECT_DETAIL_DONE, CLEAR_SUBJECT_DETAIL} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_SUBJECT_DETAIL_DONE:
      return action.payload;
    case CLEAR_SUBJECT_DETAIL:
      return initialState;
    default:
      return state;
  }
}
