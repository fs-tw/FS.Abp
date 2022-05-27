import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SyncTableComponent } from './sync-table.component';

describe('SyncTableComponent', () => {
  let component: SyncTableComponent;
  let fixture: ComponentFixture<SyncTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
