import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsNgAlainImagePickerComponent } from './fs-ng-alain-image-picker.component';

describe('FsNgAlainImagePickerComponent', () => {
  let component: FsNgAlainImagePickerComponent;
  let fixture: ComponentFixture<FsNgAlainImagePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsNgAlainImagePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsNgAlainImagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
