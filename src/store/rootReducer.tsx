import { combineReducers } from "redux";
import * as L from "./loading";
import * as E from "./errorMessage";

export const rootReducer = combineReducers({
  loading: L.reducer,
  errorMessage: E.reducer,
});
