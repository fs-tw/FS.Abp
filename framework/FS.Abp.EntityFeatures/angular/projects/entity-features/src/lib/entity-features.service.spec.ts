import { TestBed } from '@angular/core/testing';

import { EntityFeaturesService } from './entity-features.service';

describe('EntityFeaturesService', () => {
  let service: EntityFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
