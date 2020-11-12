import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GetPlantsService {
  constructor(private _http: HttpClient) {}

  getPlants() {
    const url = `https://data.sfgov.org/resource/vmnk-skih.json?$limit=100&$offset=0`;
    return this._http.get(url);
  }
}
