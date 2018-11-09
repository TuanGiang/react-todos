import {combineEpics} from 'redux-observable';
import {gradeEpic} from './gradeEpic';
import {subjectEpic} from './subjectEpic';
import {subjectDetailEpic} from './subjectDetailEpic';
export default combineEpics(
    gradeEpic,
    subjectEpic,
    subjectDetailEpic,
)
