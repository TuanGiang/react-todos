import {FETCH_GRADE, FETCH_GRADE_DONE,FETCH_SUBJECT,FETCH_SUBJECT_DONE,FETCH_SUBJECT_DETAIL,FETCH_SUBJECT_DETAIL_DONE,FETCH_ARTICLE_LIST, FETCH_ARTICLE_LIST_DONE, FETCH_ARTICLE, FETCH_ARTICLET_DONE, DOWNLOAD_CONTENT, DOWNLOAD_CONTENT_DONE} from './type';

export const fetchGrade = () => ({type:FETCH_GRADE});
export const fetchGradeDone = (grades) => ({type:FETCH_GRADE_DONE, grades});

export const fetchSubject = (grade) => ({type:FETCH_SUBJECT, payload: grade});
export const fetchSubjectDone = (subjects) => ({type:FETCH_SUBJECT_DONE, subjects});


export const fetchSubjectDetail = (id) => ({type:FETCH_SUBJECT_DETAIL, itemId: id});
export const fetchSubjectDetailDone = (details) => ({type:FETCH_SUBJECT_DETAIL_DONE, details});

export const fetchArticleList = (id) => ({type:FETCH_ARTICLE_LIST,  itemId: id});
export const fetchArticleListDone = (details) => ({type:FETCH_ARTICLE_LIST_DONE, details});


export const fetchArticle = (id) => ({type:FETCH_ARTICLE,  itemId: id});
export const fetchArticleDone = (detail) => ({type:FETCH_ARTICLET_DONE, detail});

export const downloadContent = (id, url) => ({type:DOWNLOAD_CONTENT,  itemId: id, downloadUrl: url});
export const downloadContentDone = (detail) => ({type:DOWNLOAD_CONTENT_DONE, detail});
