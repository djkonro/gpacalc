import { TestBed, inject } from '@angular/core/testing';

import { GpaCalculateService } from './gpa-calculate.service';

describe('GpaCalculateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpaCalculateService]
    });
  });

  it('should be created', inject([GpaCalculateService], (service: GpaCalculateService) => {
    expect(service).toBeTruthy();
  }));
});
