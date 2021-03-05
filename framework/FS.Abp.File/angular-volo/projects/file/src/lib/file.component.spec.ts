import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FileComponent } from './file.component';

describe('FileComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
