import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsKitEntityBaseComponent } from './cms-kit-entity-base.component';

describe('CmsKitEntityBaseComponent', () => {
  let component: CmsKitEntityBaseComponent;
  let fixture: ComponentFixture<CmsKitEntityBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsKitEntityBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsKitEntityBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
