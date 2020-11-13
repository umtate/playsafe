import { Action } from "@ngrx/store";

export enum PlantsActionTypes {
  GET_PLANTS = "[Plants ] Get Plants",
  GET_PLANTS_SUCCESS = "[Plants ] Get Plants Success",
  GET_PLANTS_FAIL = "[Plants ] Get Plants Fail",
  ADD_PLANT = "[Plants] Add Plant",
  ADD_PLANT_SUCCESS = "[Plants] Add Plant Success",
  ADD_PLANT_FAIL = "[Plants] Add Plant Fail",
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

export class AddPlant implements Action {
  readonly type = PlantsActionTypes.ADD_PLANT;
  constructor(public payload: any) {}
}

export class AddPlantSuccess implements Action {
  readonly type = PlantsActionTypes.ADD_PLANT_SUCCESS;
  constructor(public payload: any) {}
}

export type plantActions =
  | GetPlants
  | GetPlantsSuccess
  | GetPlantsFail
  | AddPlant
  | AddPlantSuccess;
