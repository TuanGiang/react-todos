import {FETCH_SUBJECT, FETCH_SUBJECT_DONE} from '../actions/type';
import { filter, map, delay, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { AsyncStorage } from "react-native"

storeData = async (tagId,datas) => {
  try {
    await AsyncStorage.setItem('SUBJECT-'+ tagId, JSON.stringify(datas));
  } catch (error) {
    // Error saving data
  }
}

const fetchData = (tagId) => {
    const request = fetch('https://api.loigiaihay.com/v3/tags/' + tagId)
    .then((response) => response.json())
    .then((responseJson) => {
      let datas = responseJson.list_data;
      storeData(datas);
      return datas;
    });
    return from(request);

};


export const subjectEpic = action$ => action$.pipe(
  filter(action => action.type === FETCH_SUBJECT),
  mergeMap(action => fetchData(action.payload)),
  map(response => ({
        type: FETCH_SUBJECT_DONE,
        payload: response})
    )
  );
