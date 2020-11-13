import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";
import { FacadeService } from "../../shared";

@Component({
  selector: "app-addplant",
  templateUrl: "./addplant.component.html",
  styleUrls: ["./addplant.component.scss"],
})
export class AddplantComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _facade: FacadeService,
    private _router: Router
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
          if (status) this._router.navigateByUrl("./plants");
        });
      });
  }
}
