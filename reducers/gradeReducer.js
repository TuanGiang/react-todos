import {FETCH_GRADE, FETCH_GRADE_DONE} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_GRADE_DONE:
      return action.payload;

    default:
      return state;
  }
}
