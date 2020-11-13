import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FacadeService } from "../../shared";

@Component({
  selector: "app-addplant",
  templateUrl: "./addplant.component.html",
  styleUrls: ["./addplant.component.scss"],
})
export class AddplantComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _facade: FacadeService) {}

  season = ["summer", "winter", "autumn", "spring"];
  type = ["shrub", "tree", "grass", "perennial"];

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
    console.log(this.plantForm.value);
    this._facade.addPlant(this.plantForm.value);
  }
}
