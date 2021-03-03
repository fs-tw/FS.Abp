import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LineNotifyComponent } from './line-notify.component';

describe('LineNotifyComponent', () => {
  let component: LineNotifyComponent;
  let fixture: ComponentFixture<LineNotifyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LineNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
