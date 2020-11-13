import * as fromActions from "./plantlist.actions";

export interface PlantsState {
  payload: any;
  loading: boolean;
  loaded: boolean;
  adding: boolean;
  added: boolean;
  error: any;
}

const initialState: PlantsState = {
  payload: null,
  loading: false,
  loaded: false,
  adding: false,
  added: false,
  error: null,
};

export function plantsReducer(
  state = initialState,
  action: fromActions.plantActions
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

    case fromActions.PlantsActionTypes.ADD_PLANT: {
      return {
        ...state,
        adding: true,
        added: false,
      };
    }

    case fromActions.PlantsActionTypes.ADD_PLANT_SUCCESS: {
      const newPlant = action.payload;
      return {
        ...state,
        payload: [...state.payload, newPlant],
        adding: false,
        added: true,
      };
    }
    default:
      return state;
  }
}
