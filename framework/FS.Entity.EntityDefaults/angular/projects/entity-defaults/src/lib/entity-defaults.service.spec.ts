import { TestBed } from '@angular/core/testing';

import { EntityDefaultsService } from './entity-defaults.service';

describe('EntityDefaultsService', () => {
  let service: EntityDefaultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityDefaultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
