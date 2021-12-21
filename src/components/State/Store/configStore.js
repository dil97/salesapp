import { createStore, combineReducers } from "redux";
import { productsReducer } from "../Reducer/productsReducer";

export const configStore = () => {
  const myStore = createStore(
    combineReducers(productsReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
