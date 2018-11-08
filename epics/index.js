import {combineEpics} from 'redux-observable';
import {gradeEpic} from './gradeEpic';

export default combineEpics(
    gradeEpic
)
