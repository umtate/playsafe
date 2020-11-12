import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetPlants } from "src/app/core/root-store/plantlist";

@Injectable({
  providedIn: "root",
})
export class PlantsService {
  constructor(private _store: Store) {}

  getPlant() {
    this._store.dispatch(new GetPlants());
  }
}
