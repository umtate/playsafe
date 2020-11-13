import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
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

  loaded: Observable<boolean>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.loaded = this._facade.loading();
    this._facade.loadPlants().then((res) => {
      res
        .pipe(
          filter((x) => !!x),
          take(1)
        )
        .subscribe((plants) => {
          const ELEMENT_DATA: PlantsInterface[] = plants;

          this.dataSource = new MatTableDataSource<PlantsInterface>(
            ELEMENT_DATA
          );
          setTimeout(() => (this.dataSource.paginator = this.paginator));
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
