import type * as T from "./types";

const initailizeState: T.State = false;

export const reducer = (
  state: T.State = initailizeState,
  action: T.Actions
) => {
  switch (action.type) {
    case "@loading/setLoadingAction":
      return action.payload;
  }
  return state;
};
