import { Injectable } from "@angular/core";
import { PlantsService } from "./plants.service";

@Injectable({
  providedIn: "root",
})
export class FacadeService {
  constructor(private _plants: PlantsService) {}

  loadPlants() {
    this._plants.getPlant();
  }
}
