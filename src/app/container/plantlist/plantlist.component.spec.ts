import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { StoreModule } from "@ngrx/store";
import { filter, take } from "rxjs/operators";

import { PlantlistComponent } from "./plantlist.component";

describe("PlantlistComponent", () => {
  let component: PlantlistComponent;
  let fixture: ComponentFixture<PlantlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantlistComponent],
      imports: [StoreModule.forRoot({}), MatDialogModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be defined", () => {
    component.ngOnInit();
    component.loaded
      .pipe(
        filter((x) => !!x),
        take(1)
      )
      .subscribe((value) => expect(value).toBeDefined());
  });
});
