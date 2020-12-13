import { TestBed } from '@angular/core/testing';

import { DirectoryTreeService } from './directory-tree.service';

describe('DirectoryTreeService', () => {
  let service: DirectoryTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectoryTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
