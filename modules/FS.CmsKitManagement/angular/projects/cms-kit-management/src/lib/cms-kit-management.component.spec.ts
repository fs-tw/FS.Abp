import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CmsKitManagementComponent } from './cms-kit-management.component';

describe('CmsKitManagementComponent', () => {
  let component: CmsKitManagementComponent;
  let fixture: ComponentFixture<CmsKitManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsKitManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsKitManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
