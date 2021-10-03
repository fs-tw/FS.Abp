import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodingManagementComponent } from './coding-management.component';

describe('CodingManagementComponent', () => {
  let component: CodingManagementComponent;
  let fixture: ComponentFixture<CodingManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
