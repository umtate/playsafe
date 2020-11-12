import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterplantsComponent } from './filterplants.component';

describe('FilterplantsComponent', () => {
  let component: FilterplantsComponent;
  let fixture: ComponentFixture<FilterplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterplantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
