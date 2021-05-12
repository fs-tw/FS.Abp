import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCodeComfirmComponent } from './phone-code-comfirm.component';

describe('PhoneCodeComfirmComponent', () => {
  let component: PhoneCodeComfirmComponent;
  let fixture: ComponentFixture<PhoneCodeComfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneCodeComfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCodeComfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
