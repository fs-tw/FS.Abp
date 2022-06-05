import { TestBed } from '@angular/core/testing';

import { CodingService } from './coding.service';

describe('CodingService', () => {
  let service: CodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
