import {FETCH_ARTICLE_LIST, FETCH_ARTICLE_LIST_DONE} from '../actions/type';
import { filter, map, delay, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { AsyncStorage } from "react-native"

storeData = async (itemID,datas) => {
  try {
    await AsyncStorage.setItem('ARTICLE-LIST-'+ itemID, JSON.stringify(datas));
  } catch (error) {
    // Error saving data
  }
}

const fetchData = (itemId) => {
    const request = fetch('https://api.loigiaihay.com/v3/events/'+itemId)
    .then((response) => response.json())
    .then((responseJson) => {
      let datas = responseJson.listArticles;
      storeData(itemId,datas);
      return datas;
    });
    return from(request);

};


export const articleListEpic = action$ => action$.pipe(
  filter(action => action.type === FETCH_ARTICLE_LIST),
  mergeMap(action => fetchData(action.itemId)),
  map(response => ({
        type: FETCH_ARTICLE_LIST_DONE,
        payload: response})
    )
  );
