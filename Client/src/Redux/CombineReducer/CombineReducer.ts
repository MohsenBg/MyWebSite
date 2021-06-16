import { ReducerLoading } from "../Loading/Reducer/ReducerLoading";
import { combineReducers } from "redux";

const reducers = combineReducers({
  Loading: ReducerLoading,
});

export default reducers;
