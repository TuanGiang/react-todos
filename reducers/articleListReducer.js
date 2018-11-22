import {FETCH_ARTICLE_LIST, FETCH_ARTICLE_LIST_DONE, CLEAR_ARTICLES} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_ARTICLE_LIST_DONE:
      return action.payload;
    case CLEAR_ARTICLES:
      return initialState;
    default:
      return state;
  }
}
