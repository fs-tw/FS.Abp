import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTagGroupComponent } from './edit-tag-group.component';

describe('EditTagGroupComponent', () => {
  let component: EditTagGroupComponent;
  let fixture: ComponentFixture<EditTagGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTagGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTagGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
