import { TestBed } from '@angular/core/testing';

import { WbmService } from './wbm.service';

describe('WbmService', () => {
  let service: WbmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WbmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
