import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneVerificationComponent } from './phone-verification.component';

describe('PhoneVerificationComponent', () => {
  let component: PhoneVerificationComponent;
  let fixture: ComponentFixture<PhoneVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
