import * as L from "./loading";
import * as E from "./errorMessage";

export type AppState = {
  loading: L.State;
  errorMessage: E.State;
};
