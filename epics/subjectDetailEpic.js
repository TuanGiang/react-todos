import {FETCH_SUBJECT_DETAIL, FETCH_SUBJECT_DETAIL_DONE} from '../actions/type';
import { filter, map, delay, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { AsyncStorage } from "react-native"

storeData = async (itemID,datas) => {
  try {
    await AsyncStorage.setItem('SUBJECT-DETAIL-'+ itemID, JSON.stringify(datas));
  } catch (error) {
    // Error saving data
  }
}

const fetchData = (itemType, itemId) => {
    const request = fetch('https://api.loigiaihay.com/v3/categories/'+itemId)
    .then((response) => response.json())
    .then((responseJson) => {
      let datas = responseJson.listEvents;
      storeData(itemId,datas);
      return datas;
    });
    return from(request);

};


export const subjectDetailEpic = action$ => action$.pipe(
  filter(action => action.type === FETCH_SUBJECT_DETAIL),
  mergeMap(action => fetchData(action.itemType, action.itemId)),
  map(response => ({
        type: FETCH_SUBJECT_DETAIL_DONE,
        payload: response})
    )
  );
