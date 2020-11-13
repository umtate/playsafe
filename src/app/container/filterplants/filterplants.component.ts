import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { FacadeService } from "../../shared";

@Component({
  selector: "app-filterplants",
  templateUrl: "./filterplants.component.html",
  styleUrls: ["./filterplants.component.scss"],
})
export class FilterplantsComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _facade: FacadeService) {}

  season = ["Summer", "Winter", "Autumn", "Spring"];
  type = ["", "Shrub", "Tree", "Grass", "Perennial"];
  location = ["", "Garden", "Roof", "Sidewalk"];
  value = ["", "Pollinator", "Cover", "Nesting", "Fruit", "Greens", "Buds"];

  filterForm = this._fb.group({
    bloom_time: ["", [Validators.required]],
    plant_type: ["", []],
    appropriate_location: [""],
    habitat_value: ["", []],
  });

  ngOnInit(): void {}

  submit() {
    if (this.filterForm.valid) this._facade.filter(this.filterForm.value);
  }
}
