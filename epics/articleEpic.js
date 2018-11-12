import {FETCH_ARTICLE, FETCH_ARTICLE_DONE} from '../actions/type';
import { filter, map, delay, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { AsyncStorage } from "react-native"

storeData = async (itemID,data) => {
  try {
    await AsyncStorage.setItem('ARTICLE-'+ itemID, JSON.stringify(datas));
  } catch (error) {
    // Error saving data
  }
}

const fetchData = (itemId) => {
    const request = fetch('https://api.loigiaihay.com/v3/articles/'+itemId)
    .then((response) => response.json())
    .then((responseJson) => {
      storeData(itemId,responseJson);
      return responseJson;
    });
    return from(request);

};


export const articleEpic = action$ => action$.pipe(
  filter(action => action.type === FETCH_ARTICLE),
  mergeMap(action => fetchData(action.itemId)),
  map(response => ({
        type: FETCH_ARTICLE_DONE,
        payload: response})
    )
  );
