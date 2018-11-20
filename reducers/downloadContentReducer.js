import {DOWNLOAD_CONTENT, DOWNLOAD_CONTENT_DONE, INIT_OFFLINES_DONE} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case DOWNLOAD_CONTENT_DONE:
    return [action.payload  , ...state];
    case INIT_OFFLINES_DONE:
      return state.concat(action.payload)
    default:
      return state;
  }
}
