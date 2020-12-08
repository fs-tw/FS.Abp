import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveFileModalComponent } from './move-file-modal.component';

describe('MoveFileModalComponent', () => {
  let component: MoveFileModalComponent;
  let fixture: ComponentFixture<MoveFileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveFileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
