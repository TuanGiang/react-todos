import {combineEpics} from 'redux-observable';
import {gradeEpic} from './gradeEpic';
import {subjectEpic} from './subjectEpic';
export default combineEpics(
    gradeEpic,
    subjectEpic
)
