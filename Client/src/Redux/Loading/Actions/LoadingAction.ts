import { ActionType } from "../ActionType/LoadingActionType";

interface onLoading {
  type: ActionType.ON_LOADING;
}

interface endLoading {
  type: ActionType.END_LOADING;
}

export type Actions = onLoading | endLoading;
