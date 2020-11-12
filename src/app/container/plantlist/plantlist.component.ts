import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { filter, take } from "rxjs/operators";

import { FacadeService } from "../../shared";

@Component({
  selector: "app-plantlist",
  templateUrl: "./plantlist.component.html",
  styleUrls: ["./plantlist.component.scss"],
})
export class PlantlistComponent implements OnInit, AfterViewInit {
  constructor(private _facade: FacadeService) {}
  displayedColumns: string[] = [
    "common_name",
    "plant_type",
    "bloom_time",
    "flower_color",
    "soil_type",
    "habitat_value",
  ];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this._facade.loadPlants().then((res) => {
      res
        .pipe(
          filter((x) => !!x),
          take(1)
        )
        .subscribe((values) => {
          const ELEMENT_DATA: PlantsInterface[] = [];

          values?.forEach((plant) => {
            const newPlant = {
              common_name: plant?.common_name,
              plant_type: plant?.plant_type,
              bloom_time: plant?.bloom_time,
              flower_color: plant?.flower_color,
              soil_type: plant?.soil_type,
              habitat_value: plant?.habitat_value,
            };
            ELEMENT_DATA.push(newPlant);
          });
          console.log(ELEMENT_DATA);
          this.dataSource = new MatTableDataSource<PlantsInterface>(
            ELEMENT_DATA
          );
          this.dataSource.paginator = this.paginator;
        });
    });
  }

  ngAfterViewInit() {}
}

export interface PlantsInterface {
  common_name: string;
  plant_type?: string;
  bloom_time?: string;
  flower_color?: string;
  soil_type?: string;
  habitat_value?: string;
}
