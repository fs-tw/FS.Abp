import { async, TestBed } from '@angular/core/testing';
import { AuditLogManagementModule } from './audit-log-management.module';

describe('AuditLogManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuditLogManagementModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AuditLogManagementModule).toBeDefined();
  });
});
