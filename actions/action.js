import {FETCH_GRADE, FETCH_GRADE_DONE,FETCH_SUBJECT,FETCH_SUBJECT_DONE,FETCH_SUBJECT_DETAIL,FETCH_SUBJECT_DETAIL_DONE} from './type';

export const fetchGrade = () => ({type:FETCH_GRADE});
export const fetchGradeDone = (grades) => ({type:FETCH_GRADE_DONE, grades});

export const fetchSubject = (grade) => ({type:FETCH_SUBJECT, payload: grade});
export const fetchSubjectDone = (subjects) => ({type:FETCH_SUBJECT_DONE, subjects});


export const fetchSubjectDetail = (item_type, id) => ({type:FETCH_SUBJECT_DETAIL, itemType: item_type, itemId: id});
export const fetchSubjectDetailDone = (details) => ({type:FETCH_SUBJECT_DETAIL_DONE, details});
