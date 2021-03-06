import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { HttpClient } from "@angular/common/http";

import { GetPlantsService } from "./get-plants.service";
import { filter, take } from "rxjs/operators";

describe("GetPlantsService", () => {
  let service: GetPlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GetPlantsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should be defined", () => {
    service
      .getPlants()
      .pipe(take(1))
      .subscribe((value) => expect(value).toBeDefined());
  });
});
