import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

import { AddplantComponent } from "./addplant.component";

describe("AddplantComponent", () => {
  let component: AddplantComponent;
  let fixture: ComponentFixture<AddplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddplantComponent],
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
    fixture = TestBed.createComponent(AddplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a invalid form", () => {
    expect(component.plantForm.valid).toBeFalse();
  });

  it("should have a vaid form", () => {
    component.plantForm.patchValue({
      common_name: "Maize",
      plant_type: "Grass",
      bloom_time: "Summer",
      flower_color: "Green",
    });

    expect(component.plantForm.valid).toBeTrue();
  });
});
