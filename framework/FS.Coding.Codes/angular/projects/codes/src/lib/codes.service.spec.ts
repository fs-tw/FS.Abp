import { TestBed } from '@angular/core/testing';

import { CodesService } from './codes.service';

describe('CodesService', () => {
  let service: CodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
