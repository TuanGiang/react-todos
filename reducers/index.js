import {combineReducers} from 'redux';
import gradeReducer from './gradeReducer';
import subjectReducer from './subjectReducer';
import subjectDetailReducer from './subjectDetailReducer';
export default combineReducers({
  grade:gradeReducer,
  subject:subjectReducer,
  subjectDetail: subjectDetailReducer,
});
