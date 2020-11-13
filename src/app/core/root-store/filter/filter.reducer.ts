import * as fromActions from "./filter.actions";

export interface FilterState {
  payload: any;
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: FilterState = {
  payload: null,
  loading: false,
  loaded: false,
  error: null,
};

export function filterReducer(
  state = initialState,
  action: fromActions.plantActions
) {
  switch (action.type) {
    case fromActions.FilterActionTypes.GET_FILTER: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case fromActions.FilterActionTypes.GET_FILTER_SUCCESS: {
      const payload = action.payload;
      return {
        ...state,
        payload,
        loading: false,
        loaded: true,
      };
    }
    case fromActions.FilterActionTypes.GET_FILTER_FAIL: {
      const err = action.payload;
      return {
        ...state,
        error: err,
        loading: false,
        loaded: true,
      };
    }
    default:
      return initialState;
  }
}
