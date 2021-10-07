import { TestBed } from '@angular/core/testing';

import { EntityTypesService } from './entity-types.service';

describe('EntityTypesService', () => {
  let service: EntityTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
