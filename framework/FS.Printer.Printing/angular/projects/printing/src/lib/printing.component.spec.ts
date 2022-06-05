import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintingComponent } from './printing.component';

describe('PrintingComponent', () => {
  let component: PrintingComponent;
  let fixture: ComponentFixture<PrintingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
