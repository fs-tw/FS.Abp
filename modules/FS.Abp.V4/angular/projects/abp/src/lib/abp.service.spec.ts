import { TestBed } from '@angular/core/testing';

import { AbpService } from './abp.service';

describe('AbpService', () => {
  let service: AbpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
