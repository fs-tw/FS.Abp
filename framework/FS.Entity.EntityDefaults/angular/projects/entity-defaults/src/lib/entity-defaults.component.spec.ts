import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntityDefaultsComponent } from './entity-defaults.component';

describe('EntityDefaultsComponent', () => {
  let component: EntityDefaultsComponent;
  let fixture: ComponentFixture<EntityDefaultsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDefaultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDefaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
