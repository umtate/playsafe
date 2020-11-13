import { TestBed } from "@angular/core/testing";
import { StoreModule } from "@ngrx/store";
import { filter, take } from "rxjs/operators";

import { FacadeService } from "./facade.service";

describe("FacadeService", () => {
  let service: FacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
    });
    service = TestBed.inject(FacadeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
