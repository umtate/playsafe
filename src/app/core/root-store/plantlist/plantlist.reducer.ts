import * as fromActions from "./plantlist.actions";

export interface PlantsState {
  payload: any;
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: PlantsState = {
  payload: null,
  loading: false,
  loaded: false,
  error: null,
};

export function plantsReducer(
  state = initialState,
  action: fromActions.currencyActions
) {
  switch (action.type) {
    case fromActions.PlantsActionTypes.GET_PLANTS: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case fromActions.PlantsActionTypes.GET_PLANTS_SUCCESS: {
      const payload = action.payload;
      return {
        ...state,
        payload,
        loading: false,
        loaded: true,
      };
    }
    case fromActions.PlantsActionTypes.GET_PLANTS_FAIL: {
      const err = action.payload;
      return {
        ...state,
        error: err,
        loading: false,
        loaded: true,
      };
    }
    default:
      return state;
  }
}
