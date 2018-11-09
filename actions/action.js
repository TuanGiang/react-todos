import {FETCH_GRADE, FETCH_GRADE_DONE,FETCH_SUBJECT,FETCH_SUBJECT_DONE} from './type';

export const fetchGrade = () => ({type:FETCH_GRADE});
export const fetchGradeDone = (grades) => ({type:FETCH_GRADE_DONE, grades});

export const fetchSubject = (grade) => ({type:FETCH_SUBJECT, payload: grade});
export const fetchSubjectDone = (subjects) => ({type:FETCH_SUBJECT_DONE, subjects});
