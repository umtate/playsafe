import { TestBed } from '@angular/core/testing';

import { GetPlantsService } from './get-plants.service';

describe('GetPlantsService', () => {
  let service: GetPlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPlantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
