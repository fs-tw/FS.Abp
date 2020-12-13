import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagementFolderFilterComponent } from './file-management-folder-filter.component';

describe('FileManagementFolderFilterComponent', () => {
  let component: FileManagementFolderFilterComponent;
  let fixture: ComponentFixture<FileManagementFolderFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagementFolderFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagementFolderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
