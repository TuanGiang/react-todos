import {combineEpics} from 'redux-observable';
import {gradeEpic} from './gradeEpic';
import {subjectEpic} from './subjectEpic';
import {subjectDetailEpic} from './subjectDetailEpic';
import {articleListEpic} from './articleListEpic';
import {articleEpic} from './articleEpic';
import {downloadContentEpic} from './downloadContentEpic';
export default combineEpics(
    gradeEpic,
    subjectEpic,
    subjectDetailEpic,
    articleListEpic,
    articleEpic,
    downloadContentEpic,
)
