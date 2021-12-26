import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntityFeaturesComponent } from './entity-features.component';

describe('EntityFeaturesComponent', () => {
  let component: EntityFeaturesComponent;
  let fixture: ComponentFixture<EntityFeaturesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
