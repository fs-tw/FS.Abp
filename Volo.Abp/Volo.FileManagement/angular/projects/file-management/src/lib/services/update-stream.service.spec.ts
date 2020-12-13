import { TestBed } from '@angular/core/testing';

import { UpdateStreamService } from './update-stream.service';

describe('UpdateStreamService', () => {
  let service: UpdateStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
