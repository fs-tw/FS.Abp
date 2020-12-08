import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTemplateManagementComponent } from './text-template-management.component';

describe('TextTemplateManagementComponent', () => {
  let component: TextTemplateManagementComponent;
  let fixture: ComponentFixture<TextTemplateManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextTemplateManagementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTemplateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
