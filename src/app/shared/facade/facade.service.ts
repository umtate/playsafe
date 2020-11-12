import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PlantsService } from "./plants.service";

@Injectable({
  providedIn: "root",
})
export class FacadeService {
  constructor(private _plants: PlantsService) {}

  async loadPlants(): Promise<Observable<any>> {
    await this._plants.loadPlants();
    return this._plants.getPlants();
  }
}
