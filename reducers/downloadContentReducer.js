import {DOWNLOAD_CONTENT, DOWNLOAD_CONTENT_DONE} from '../actions/type';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

    case DOWNLOAD_CONTENT_DONE:
    console.log('aaaaaaaaaaaa',JSON.stringify(action.payload));
    return [action.payload  , ...state];

    default:
      return state;
  }
}
