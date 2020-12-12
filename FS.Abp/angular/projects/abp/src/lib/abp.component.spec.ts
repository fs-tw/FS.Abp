import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AbpComponent } from './abp.component';

describe('AbpComponent', () => {
  let component: AbpComponent;
  let fixture: ComponentFixture<AbpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
