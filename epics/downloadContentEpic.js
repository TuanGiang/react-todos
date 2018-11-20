import {DOWNLOAD_CONTENT, DOWNLOAD_CONTENT_DONE} from '../actions/type';
import { filter, map, delay, mergeMap } from 'rxjs/operators';
import { of, from, fromPromise } from 'rxjs';
import RNFetchBlob from 'react-native-fetch-blob'
import { AsyncStorage } from "react-native"
import { zip, unzip, subscribe } from 'react-native-zip-archive'

storeDataAA = async (item) => {
  try {
    const items = await AsyncStorage.getItem('OFFLINES');
    let itemsJSON = JSON.parse(items);
    if(!itemsJSON){
      itemsJSON = [];
    }
    itemsJSON.push(item)

      console.log('aaaacccc' , JSON.stringify(itemsJSON)) //Display key value
    await AsyncStorage.setItem('OFFLINES', JSON.stringify(itemsJSON));
  } catch (error) {
    // Error saving data
  }

}

const fetchData = (id, url, image, title, description) => {
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
         let item = {id: id, image: image, path :path , title: title, description : description};
         storeDataAA(item);
         return item;
       })
    });
    return from(download);
};


export const downloadContentEpic = action$ => action$.pipe(
  filter(action => action.type === DOWNLOAD_CONTENT),
  mergeMap(action => fetchData(action.id, action.downloadUrl, action.image, action.title, action.description)),
  map(response => ({
        type: DOWNLOAD_CONTENT_DONE,
        payload: response})
    )
  );
