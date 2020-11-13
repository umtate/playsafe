import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { FacadeService } from "../../shared";

@Component({
  selector: "dialog-overview-example",
  template: ` <div mat-dialog-content>
      <p>Your plant was added successfully</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="closeDialog()" cdkFocusInitial>Close</button>
    </div>`,
})
export class DialogBox {
  constructor(public dialog: MatDialog, private _router: Router) {}

  closeDialog() {
    this.dialog.closeAll();
    this._router.navigateByUrl("./plants");
  }
}

@Component({
  selector: "app-addplant",
  templateUrl: "./addplant.component.html",
  styleUrls: ["./addplant.component.scss"],
})
export class AddplantComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _facade: FacadeService,

    public dialogRef: MatDialogRef<AddplantComponent>,
    public dialog: MatDialog
  ) {}

  season = ["summer", "winter", "autumn", "spring"];
  type = ["shrub", "tree", "grass", "perennial"];
  added: Boolean = false;

  plantForm = this._fb.group({
    common_name: ["", [Validators.required, Validators.maxLength(25)]],
    plant_type: ["", [Validators.required]],
    bloom_time: ["", [Validators.required]],
    flower_color: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    soil_type: [""],
    habitat_value: [""],
  });

  ngOnInit(): void {}

  submit() {
    if (this.plantForm.valid)
      this._facade.addPlant(this.plantForm.value).then((value) => {
        value.pipe(take(1)).subscribe((status) => {
          if (status)
            this.dialog.open(DialogBox, {
              width: "250px",
            }); //;
        });
      });
  }
}
