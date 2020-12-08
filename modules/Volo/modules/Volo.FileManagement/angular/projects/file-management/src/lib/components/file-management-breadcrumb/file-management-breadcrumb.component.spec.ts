import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagementBreadcrumbComponent } from './file-management-breadcrumb.component';

describe('FileManagementBreadcrumbComponent', () => {
  let component: FileManagementBreadcrumbComponent;
  let fixture: ComponentFixture<FileManagementBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagementBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagementBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
