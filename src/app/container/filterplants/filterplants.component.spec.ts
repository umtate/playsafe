import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { StoreModule } from "@ngrx/store";
import { filter, take } from "rxjs/operators";

import { FilterplantsComponent } from "./filterplants.component";

describe("FilterplantsComponent", () => {
  let component: FilterplantsComponent;
  let fixture: ComponentFixture<FilterplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterplantsComponent],
      imports: [StoreModule.forRoot({}), MatDialogModule],
      providers: [
        FormBuilder,
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a invalid form", () => {
    component.filterForm.patchValue({
      common_name: "Maize",
      plant_type: "Grass",
    });

    expect(component.filterForm.valid).toBeFalse();
  });

  it("should have a vaid form", () => {
    component.filterForm.patchValue({
      bloom_time: "Summer",
    });

    expect(component.filterForm.valid).toBeTrue();
  });
});
