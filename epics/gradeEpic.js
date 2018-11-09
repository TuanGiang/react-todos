import {FETCH_GRADE, FETCH_GRADE_DONE} from '../actions/type';
import { filter, map, delay, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { AsyncStorage } from "react-native"

storeData = async (datas) => {
  try {
    await AsyncStorage.setItem('GRADE', JSON.stringify(datas));
  } catch (error) {
    // Error saving data
  }
}

const fetchData = () => {
    const request = fetch('https://api.loigiaihay.com/v3/tags')
    .then((response) => response.json())
    .then((responseJson) => {
      let datas = responseJson.list_class;
      storeData(datas);
      return datas;
    });
    return from(request);

};


export const gradeEpic = action$ => action$.pipe(
  filter(action => action.type === FETCH_GRADE),
  mergeMap(action => fetchData()),
  map(response => ({
        type: FETCH_GRADE_DONE,
        payload: response})
    )
  );
