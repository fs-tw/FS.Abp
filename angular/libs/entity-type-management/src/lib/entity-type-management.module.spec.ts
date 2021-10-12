import { async, TestBed } from '@angular/core/testing';
import { EntityTypeManagementModule } from './entity-type-management.module';

describe('EntityTypeManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EntityTypeManagementModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(EntityTypeManagementModule).toBeDefined();
  });
});
