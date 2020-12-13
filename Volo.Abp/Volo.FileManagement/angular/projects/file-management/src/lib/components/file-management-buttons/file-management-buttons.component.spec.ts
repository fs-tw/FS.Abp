import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagementButtonsComponent } from './file-management-buttons.component';

describe('FileManagementButtonsComponent', () => {
  let component: FileManagementButtonsComponent;
  let fixture: ComponentFixture<FileManagementButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagementButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagementButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
