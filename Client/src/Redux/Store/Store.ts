import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../CombineReducer/CombineReducer";
import thunk from "redux-thunk";

export const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type initialState = ReturnType<typeof Store.getState>;
