import {combineReducers} from 'redux';
import gradeReducer from './gradeReducer';
import subjectReducer from './subjectReducer';
import subjectDetailReducer from './subjectDetailReducer';
import articleListReducer from './articleListReducer';
import articleReducer from './articleReducer';
export default combineReducers({
  grade:gradeReducer,
  subject:subjectReducer,
  subjectDetail: subjectDetailReducer,
  articleList: articleListReducer,
  article: articleReducer,
});
