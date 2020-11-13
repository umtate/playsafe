import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetPlantsService {
  constructor(private _http: HttpClient) {}

  getPlants() {
    const url = `https://data.sfgov.org/resource/vmnk-skih.json?$limit=500`;
    return this._http.get(url);
  }

  addPlant(plant) {
    return of(plant);
  }
}
