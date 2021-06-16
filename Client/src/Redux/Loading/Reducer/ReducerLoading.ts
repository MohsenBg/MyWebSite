import { ActionType } from "./../ActionType/LoadingActionType";
import { Actions } from "../Actions/LoadingAction";

interface InitialState {
  loading: boolean;
}

const initialState: InitialState = {
  loading: true,
};

export const ReducerLoading = (state = initialState, Action: Actions) => {
  switch (Action.type) {
    case ActionType.ON_LOADING:
      return { ...state, loading: true };

    case ActionType.END_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
