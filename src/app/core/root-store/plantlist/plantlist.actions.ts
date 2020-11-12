import { Action } from "@ngrx/store";

export enum PlantsActionTypes {
  GET_PLANTS = "[Plants ] Get Plants",
  GET_PLANTS_SUCCESS = "[Plants ] Get Plants Success",
  GET_PLANTS_FAIL = "[Planst ] Get Plants Fail",
}

export class GetPlants implements Action {
  readonly type = PlantsActionTypes.GET_PLANTS;
  constructor() {}
}

export class GetPlantsSuccess implements Action {
  readonly type = PlantsActionTypes.GET_PLANTS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetPlantsFail implements Action {
  readonly type = PlantsActionTypes.GET_PLANTS_FAIL;
  constructor(public payload: any) {}
}

export type currencyActions = GetPlants | GetPlantsSuccess | GetPlantsFail;
