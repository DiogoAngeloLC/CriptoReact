/* import { createStore } from "redux";
import reducers from "./reducers";
import middlewares from "./middlewares";

const store = createStore(reducers, middlewares);

export default store; */




/* import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import reducers from "./reducers";
import middlewares from "./middlewares";
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducers)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
} */


// Libs
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const bundle = compose(applyMiddleware(thunk));
const createStoreWithMiddleware = bundle(createStore);
export const store = createStoreWithMiddleware(
  persistedReducer,
  {},
  window.__REDUXD_EVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);
export const persistor = persistStore(store);
