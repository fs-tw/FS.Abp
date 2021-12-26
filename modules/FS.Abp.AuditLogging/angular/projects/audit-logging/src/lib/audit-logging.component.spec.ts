import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuditLoggingComponent } from './audit-logging.component';

describe('AuditLoggingComponent', () => {
  let component: AuditLoggingComponent;
  let fixture: ComponentFixture<AuditLoggingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditLoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
