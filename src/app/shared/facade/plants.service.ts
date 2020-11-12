import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, pluck } from "rxjs/operators";
import { GetPlants } from "src/app/core/root-store/plantlist";

@Injectable({
  providedIn: "root",
})
export class PlantsService {
  constructor(private _store: Store<any>) {}

  loadPlants() {
    this._store.dispatch(new GetPlants());
  }

  getPlants() {
    return this._store.select("plants").pipe(
      pluck("payload"),
      filter((x) => !!x)
    );
  }
}
