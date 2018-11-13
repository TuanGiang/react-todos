import {DOWNLOAD_CONTENT, DOWNLOAD_CONTENT_DONE} from '../actions/type';
import { filter, map, delay, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import RNFetchBlob from 'react-native-fetch-blob'
import { AsyncStorage } from "react-native"
import { zip, unzip, subscribe } from 'react-native-zip-archive'

storeData = async (itemID,data) => {
  try {
    await AsyncStorage.setItem('ARTICLE-'+ itemID, JSON.stringify(datas));
  } catch (error) {
    // Error saving data
  }
}

const fetchData = (itemId, url) => {
    let filename = url.substring(url.lastIndexOf('/') + 1, url.length);
    let filenameWithoutExtension = filename.substring(0, filename.lastIndexOf('.'));
    let dirs = RNFetchBlob.fs.dirs
    const download = RNFetchBlob
    .config({
      // response data will be saved to this path if it has access right.
      path : dirs.DocumentDir + '/download/' + filename
    })
    .fetch('GET', url)
    .then((res) => {
       return unzip(res.path(), dirs.DocumentDir + '/articles/' + filenameWithoutExtension).then((path)=> {
         return {itemId: itemId, path: path};
       })
    });
    return from(download);
};


export const downloadContentEpic = action$ => action$.pipe(
  filter(action => action.type === DOWNLOAD_CONTENT),
  mergeMap(action => fetchData(action.itemId, action.downloadUrl)),
  map(response => ({
        type: DOWNLOAD_CONTENT_DONE,
        payload: response})
    )
  );
