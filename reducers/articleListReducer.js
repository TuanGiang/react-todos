import {FETCH_ARTICLE_LIST, FETCH_ARTICLE_LIST_DONE} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_ARTICLE_LIST_DONE:
      return action.payload;

    default:
      return state;
  }
}
