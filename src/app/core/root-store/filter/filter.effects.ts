import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as filterActions from "./filter.actions";
import { switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { FilterPlantsService } from "../../store-service/filter-plants.service";

@Injectable()
export class FilterEffects {
  constructor(
    private actions$: Actions,
    private _filter: FilterPlantsService
  ) {}

  @Effect()
  filter$ = this.actions$.pipe(
    ofType(filterActions.FilterActionTypes.GET_FILTER),
    switchMap((action: filterActions.GetFilter) => {
      const payload = action.payload;
      return this._filter.filterPlants(payload).pipe(
        switchMap((res) => of(new filterActions.GetFilterSuccess(res))),
        catchError((err) => of(new filterActions.GetFilterFail(err)))
      );
    })
  );
}
