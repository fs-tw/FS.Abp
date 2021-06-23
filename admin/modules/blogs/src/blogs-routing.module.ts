import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { EditBlogPostComponent } from './components/edit-blog-post/edit-blog-post.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      { path: 'blog', component: BlogsComponent },
      { path: 'blog-posts', component: BlogPostsComponent },
      { path: 'blog-posts/:blogPostId', component: EditBlogPostComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
