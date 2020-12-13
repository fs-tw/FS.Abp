import { TestBed } from '@angular/core/testing';

import { MoveService } from './move.service';

describe('MoveService', () => {
  let service: MoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
