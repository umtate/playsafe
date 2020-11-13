import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, map, pluck, take } from "rxjs/operators";
import { AddPlant, GetPlants } from "src/app/core/root-store/plantlist";

@Injectable({
  providedIn: "root",
})
export class PlantsService {
  constructor(private _store: Store<any>) {}

  loadPlants() {
    this._store
      .select("plants")
      .pipe(pluck("payload"), take(1))
      .subscribe((val) => {
        if (!val) this._store.dispatch(new GetPlants());
      });
  }

  getPlants() {
    return this._store.select("plants").pipe(
      pluck("payload"),
      filter((x) => !!x),
      map((plants) => {
        const arr = [];
        plants?.forEach((plant) => {
          const newPlant = {
            common_name: plant?.common_name,
            plant_type: plant?.plant_type,
            bloom_time: plant?.bloom_time,
            flower_color: plant?.flower_color,
            soil_type: plant?.soil_type,
            habitat_value: plant?.habitat_value,
          };
          arr.push(newPlant);
        });
        return arr;
      })
    );
  }

  addPlant(plant) {
    return this._store.dispatch(new AddPlant(plant));
  }
}
