import {combineReducers} from 'redux';
import gradeReducer from './gradeReducer';
import subjectReducer from './subjectReducer';

export default combineReducers({
  grade:gradeReducer,
  subject:subjectReducer,
});
