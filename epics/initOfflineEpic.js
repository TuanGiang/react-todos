import {INIT_OFFLINES, INIT_OFFLINES_DONE} from '../actions/type';
import { filter, map, delay, mergeMap } from 'rxjs/operators';
import { of, from, fromPromise } from 'rxjs';
import RNFetchBlob from 'react-native-fetch-blob'
import { AsyncStorage } from "react-native"
import { zip, unzip, subscribe } from 'react-native-zip-archive'

const fetchOfflineFromStorage = () => {
    let datas = AsyncStorage.getItem('OFFLINES').then((offlines) => {
      if(!offlines){
        return []
      }
      return JSON.parse(offlines);
      }, (error) => {
      console.log(error) //Display error
  });

    return from(datas);
};


export const initOffline = action$ => action$.pipe(
  filter(action => action.type === INIT_OFFLINES),
  mergeMap(action => fetchOfflineFromStorage()),
  map(response => ({
        type: INIT_OFFLINES_DONE,
        payload: response})
    )
  );
