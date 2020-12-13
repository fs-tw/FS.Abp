import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagementFolderContentComponent } from './file-management-folder-content.component';

describe('FileManagementFolderContentComponent', () => {
  let component: FileManagementFolderContentComponent;
  let fixture: ComponentFixture<FileManagementFolderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagementFolderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagementFolderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
