import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { HttpClient } from "@angular/common/http";

import { FilterPlantsService } from "./filter-plants.service";
import { filter, take } from "rxjs/operators";

describe("FilterPlantsService", () => {
  let service: FilterPlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(FilterPlantsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should be defined", () => {
    let filter = {
      common_name: "Maize",
      plant_type: "Grass",
      bloom_time: "Summer",
    };

    service
      .filterPlants(filter)
      .pipe(take(1))
      .subscribe((value) => expect(value).toBeDefined());
  });
});
