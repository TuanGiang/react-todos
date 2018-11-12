import {FETCH_ARTICLE, FETCH_ARTICLE_DONE} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_ARTICLE_DONE:
      return action.payload;

    default:
      return state;
  }
}
