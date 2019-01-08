import { TestBed } from '@angular/core/testing';

import { GolfserviceService } from './golfservice.service';

describe('GolfserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GolfserviceService = TestBed.get(GolfserviceService);
    expect(service).toBeTruthy();
  });
});
