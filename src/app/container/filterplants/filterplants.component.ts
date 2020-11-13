import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Observable } from "rxjs";

import { FacadeService } from "../../shared";

@Component({
  selector: "dialog-overview-example",
  template: ` <div mat-dialog-content>
      <p>Common Name : {{ data?.common_name }}</p>
      <p>Plant Type : {{ data?.plant_type }}</p>
      <p>Flower Color : {{ data?.flower_color }}</p>
      <p>Bloom Time : {{ data?.bloom_time }}</p>
      <p>Soil Type : {{ data?.soil_type }}</p>
      <p>Habitat Value : {{ data?.habitat_value }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="closeDialog()" cdkFocusInitial>Close</button>
    </div>`,
})
export class DialogBoxFilter {
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data) {}

  closeDialog() {
    this.dialog.closeAll();
  }
}

@Component({
  selector: "app-filterplants",
  templateUrl: "./filterplants.component.html",
  styleUrls: ["./filterplants.component.scss"],
})
export class FilterplantsComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _facade: FacadeService,
    public dialogRef: MatDialogRef<FilterplantsComponent>,
    public dialog: MatDialog
  ) {}

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

  filtered: Observable<any>;

  ngOnInit(): void {}

  submit() {
    if (this.filterForm.valid)
      this._facade.filter(this.filterForm.value).then((res) => {
        this.filtered = res;
      });
  }

  openModal(data) {
    this.dialog.open(DialogBoxFilter, {
      width: "300px",
      data,
    });
  }
}
