import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FilterPlantsService {
  constructor(private _http: HttpClient) {}

  filterPlants(filters) {
    const bloom_time = `bloom_time=${filters.bloom_time}`;
    const plant_type = filters.plant_type
      ? `&plant_type=${filters.plant_type}`
      : null;
    const appropriate_location = filters.appropriate_location
      ? `&appropriate_location=${filters.appropriate_location}`
      : null;
    const habitat_value = filters.habitat_value
      ? `&habitat_value=${filters.habitat_value}`
      : null;

    let args = bloom_time;

    if (plant_type) args = args + plant_type;
    if (appropriate_location) args = args + appropriate_location;
    if (habitat_value) args = args + habitat_value;

    const url = `https://data.sfgov.org/resource/vmnk-skih.json?$limit=10&${args}`;
    return this._http.get(url);
  }
}
