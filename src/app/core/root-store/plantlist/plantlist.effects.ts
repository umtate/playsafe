import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as plantsActions from "./plantlist.actions";
import { switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { GetPlantsService } from "../../store-service/get-plants.service";

@Injectable()
export class PlantsEffects {
  constructor(private actions$: Actions, private _plants: GetPlantsService) {}

  @Effect()
  plants$ = this.actions$.pipe(
    ofType(plantsActions.PlantsActionTypes.GET_PLANTS),
    switchMap(() => {
      return this._plants.getPlants().pipe(
        switchMap((res) => of(new plantsActions.GetPlantsSuccess(res))),
        catchError((err) => of(new plantsActions.GetPlantsFail(err)))
      );
    })
  );
}
