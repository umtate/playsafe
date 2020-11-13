import { Action } from "@ngrx/store";

export enum FilterActionTypes {
  GET_FILTER = "[Filter ] Get Filter",
  GET_FILTER_SUCCESS = "[Filter ] Get Filter Success",
  GET_FILTER_FAIL = "[Filter ] Get Filter Fail",
}

export class GetFilter implements Action {
  readonly type = FilterActionTypes.GET_FILTER;
  constructor(public payload: any) {}
}

export class GetFilterSuccess implements Action {
  readonly type = FilterActionTypes.GET_FILTER_SUCCESS;
  constructor(public payload: any) {}
}

export class GetFilterFail implements Action {
  readonly type = FilterActionTypes.GET_FILTER_FAIL;
  constructor(public payload: any) {}
}

export type plantActions = GetFilter | GetFilterSuccess | GetFilterFail;
