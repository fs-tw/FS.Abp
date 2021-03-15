import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormManagementComponent } from './form-management.component';

describe('FormManagementComponent', () => {
  let component: FormManagementComponent;
  let fixture: ComponentFixture<FormManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
