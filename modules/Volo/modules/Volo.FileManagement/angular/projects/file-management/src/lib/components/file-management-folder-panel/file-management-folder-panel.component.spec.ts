import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagementFolderPanelComponent } from './file-management-folder-panel.component';

describe('FileManagementFolderPanelComponent', () => {
  let component: FileManagementFolderPanelComponent;
  let fixture: ComponentFixture<FileManagementFolderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagementFolderPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagementFolderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
