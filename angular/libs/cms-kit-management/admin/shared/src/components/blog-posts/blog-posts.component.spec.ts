import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsComponent } from './blog-posts.component';

describe('BlogPostsComponent', () => {
  let component: BlogPostsComponent;
  let fixture: ComponentFixture<BlogPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
