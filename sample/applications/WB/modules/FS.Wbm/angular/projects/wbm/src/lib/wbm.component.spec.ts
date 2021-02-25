import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WbmComponent } from './wbm.component';

describe('WbmComponent', () => {
  let component: WbmComponent;
  let fixture: ComponentFixture<WbmComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
