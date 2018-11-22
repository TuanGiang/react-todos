import {FETCH_ARTICLE, FETCH_ARTICLE_DONE, CLEAR_ARTICLE_DETAIL} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_ARTICLE_DONE:
      return action.payload;
    case CLEAR_ARTICLE_DETAIL:
        return initialState;
    default:
      return state;
  }
}
