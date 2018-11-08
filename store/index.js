import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';
import {composeWithDevTools} from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducers,
    {},
    composeWithDevTools(
        applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(rootEpic);

export default store;
