import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntityTypesComponent } from './entity-types.component';

describe('EntityTypesComponent', () => {
  let component: EntityTypesComponent;
  let fixture: ComponentFixture<EntityTypesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
