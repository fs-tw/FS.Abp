import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiLingualsComponent } from './multi-linguals.component';

describe('MultiLingualsComponent', () => {
  let component: MultiLingualsComponent;
  let fixture: ComponentFixture<MultiLingualsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLingualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLingualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
